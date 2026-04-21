import User from "../model/user2.model.js";

// export function createUser(req, res) {
//   User.create(req.body)

//     .then((user) => {
//       res.status(201).json({ success: true, data: user });
//     })
//     .catch((err) => {
//       if (err.code === 11000) {
//         return res
//           .status(400)
//           .json({ success: false, message: "Email already exists" });
//       }
//       if (err.name === "ValidationError") {
//         return res.status(400).json({ success: false, message: err.message });
//       }

//       res.status(500).json({ success: false, message: "Server error" });
//     });
// }

// export async function createUser(req, res) {
//   try {
//     const user = await User.create(req.body);

//     res.status(201).json({ success: true, data: user });
//   } catch (err) {
//     if (err.code === 11000) {
//       return res
//         .status(400)
//         .json({ success: false, message: "Email already exists" });
//     }

//     if (err.name === "ValidationError") {
//       return res.status(400).json({ success: false, message: err.message });
//     }

//     res.status(500).json({ success: false, message: "Server error" });
//   }
// }



export function createUser(req, res) {

  new Promise((resolve, reject) => {

    User.create(req.body)
      .then((user) => resolve(user))
      .catch((err) => reject(err));

  })
    .then((user) => {
      res.status(201).json({ success: true, data: user });
    })
    .catch((err) => {
      if (err.code === 11000) {
        return res.status(400).json({ success: false, message: "Email already exists" });
      }
      if (err.name === "ValidationError") {
        return res.status(400).json({ success: false, message: err.message });
      }
      res.status(500).json({ success: false, message: "Server error" });
    });
}