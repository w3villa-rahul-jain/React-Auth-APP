import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";

// {
//     "username" : "rahul",
//     "password" : "admin123",
//     "email" : "example@gmail.com",
//     "profile" : ""
//   }

export async function register(req, res) {
  try {
    const { username, password, profile, email } = req.body;

    // check te existing user
    const existUsername = new Promise((resolve, reject) => {
      UserModel.findOne({ username }, function (err, user) {
        if (err) reject(new Error(err));
        if (user) reject({ error: "Please use Unique username" });
        resolve();
      });
    });

    // check te existing email
    const existEmail = new Promise((resolve, reject) => {
      UserModel.findOne({ email }, function (err, email) {
        if (err) reject(new Error(err));
        if (email) reject({ error: "Please provide unique Email" });
        resolve();
      });
    });

    Promise.all([existUsername, existEmail])
      .then(() => {
        if (password) {
          bcrypt
            .hash(password, 10)
            .then((hashedPassword) => {
              const user = new UserModel({
                username,
                password: hashedPassword,
                profile: profile || "",
                email,
              });

              //return save result as a response
              user
                .save()
                .then((result) =>
                  res.status(201).send({ msg: "User Register Succesfully" })
                )
                .catch((error) => res.status(500).send({ error }));
            })
            .catch((error) => {
              error: "enable to hashed password";
            });
        }
      })
      .catch((error) => {
        return res.status(500).send({
          error: "Enable to hashed Password",
        });
      });
  } catch (error) {
    return res.status(500).send(error);
  }
}

export async function login(req, res) {
  res.json("register route");
}

export async function getUser(req, res) {
  res.json("user route");
}

export async function updateUser(req, res) {
  res.json("updateUser route");
}

export async function generateOTP(req, res) {
  res.json("generateOTP route");
}

export async function verifyOTP(req, res) {
  res.json("verifyOTP route");
}

export async function createResetSession(req, res) {
  res.json("createResetSession route");
}

export async function resetPassword(req, res) {
  res.json("resetPassword route");
}
