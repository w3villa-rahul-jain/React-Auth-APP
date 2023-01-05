import UserModel from "../model/User.model.js";
import bcrypt from "bcrypt";
import pkg from 'jsonwebtoken';
import ENV from "../router/config.js";

const  jwt  = pkg;
// {
//     "username" : "rahul",
//     "password" : "admin123",
//     "email" : "example@gmail.com",
//     "profile" : ""
//   }

// middleware for verify user

export async function verifyUser(req, res, next){
    try{
        const {username} = req.method == "GET" ?  req.query : req.body;

        // check the user existance
        let exist = await UserModel.findOne({username});
        if(!exist) return res.status(404).send({error: "Can't Find User !"});
        next();


       } catch(error){
           return res.status(404).send({error : "Authenticate User"});
       }

}
     

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
  const { username, password } = req.body;

  try {
    UserModel.findOne({ username }).then((user) => {
      bcrypt
        .compare(password, user.password)
        .then((passwordCheck) => {
          if (!passwordCheck)
            return res.status(400).send({ error: "password does not match" });

          // create jwt token
          const token = jwt.sign(
            {
              userId: user._id,
              username: user.username,
            },
            ENV.JWT_SECRET,
            { expiresIn: "24h" }
          );

          return res.status(200).send({
            msg: "Login Succesfully",
            username: user.username,
            token,
          });
        })
        .catch((error) => {
          return res.status(400).send({ error: "Password does not match" });
        });
    });
  } catch (error) {
    return res.status(500).send({ error });
  }
}

export async function getUser(req, res) {
  const { username } = req.params;

  try{
    if(!username) return res.status(501).send({ error: "Invalid Username"});

    UserModel.findOne({username}, function(err, user){
        if(err) return res.status(500).send({err});
        if(!user) return res.status(501).send({error: "Could not find user"});

        // remove password from user
        // mongoose return unneccery data with object tso cobnvert it into JSON
        const { password, ...rest} = Object.assign({}, user.toJSON());

        return res.status(201).send(rest);
    })

  } catch(error) {
    return res.status(404).send({error: "can not find User Data"})
  }

}

export async function updateUser(req, res) {
  try{
    const id = req.query.id;

    if(id){
      const body = req.body;
      UserModel.updateOne({_id: id}, body, function(err, data){
        if(err) throw err;
        
        return res.status(201).send({msg: "Record Updataed successfully"})
      })

    }else{
      return res.status(401).send({error: "Invalid User"});
    }


  }catch(error){
    return res.send(401).send({error});
  }
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
