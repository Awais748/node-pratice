import userModel from "../model/user.model.js";

export const createUser = async (req, res) => {
  try {
    console.log(" CREATE USER BODY:", req.body);

    const { FirstName, LastName, Email, Password, Gender, role } = req.body;

    if (!FirstName || !LastName || !Email || !Password || !Gender || !role) {
      console.log(" Missing fields");
      return res.status(400).json({
        success: false,
        message: "Please provide all the fields",
      });
    }

    const existingUser = await userModel.findOne({ Email });

    if (existingUser) {
      console.log(" User already exists:", Email);
      return res.status(400).json({
        success: false,
        message: "User already exists",
      });
    }

    const user = await userModel.create({
      FirstName,
      LastName,
      Email,
      Password,
      Gender,
      role,
    });

    console.log(" User created:", user._id);

    return res.status(201).json({
      success: true,
      message: "User created successfully",
      data: user,
    });
  } catch (error) {
    console.log(" CREATE ERROR:", error);
    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const getAllUsers = async (req, res) => {
  try {
    console.log(" FETCH ALL USERS REQUEST");

    const users = await userModel.find();

    console.log(" USERS FOUND:", users.length);

    return res.status(200).json({
      success: true,
      message: "All users fetched",
      data: users,
    });
  } catch (error) {
    console.log(" FETCH ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const updateUser = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(" UPDATE USER ID:", id);
    console.log(" UPDATE DATA:", req.body);

    const user = await userModel.findByIdAndUpdate(id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!user) {
      console.log(" User not found:", id);
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log(" User updated:", user._id);

    return res.status(200).json({
      success: true,
      message: "User updated successfully",
      data: user,
    });
  } catch (error) {
    console.log(" UPDATE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};

export const deleteUser = async (req, res) => {
  try {
    const { id } = req.params;

    console.log(" DELETE USER ID:", id);

    const user = await userModel.findByIdAndDelete(id);

    if (!user) {
      console.log(" User not found for delete:", id);
      return res.status(404).json({
        success: false,
        message: "User not found",
      });
    }

    console.log(" User deleted:", id);

    return res.status(200).json({
      success: true,
      message: "User deleted successfully",
    });
  } catch (error) {
    console.log(" DELETE ERROR:", error);

    return res.status(500).json({
      success: false,
      message: "Server error",
      error: error.message,
    });
  }
};
