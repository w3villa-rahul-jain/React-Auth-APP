import { Router } from "express";
const router = Router();

// import all controllers
import * as controller from "../Controllers/appControllers.js";
import Auth, { localVariables } from "../middleware/auth.js";

// post routes
router.post("/register", controller.register);
router.post("/registerMail"); //send the email
router.post("/authentication", (req, res) => res.end()); //authenticate user
router.post("/login", controller.verifyUser, controller.login); //login in app

// get routes
router.get("/user/:username", controller.getUser); //user with username
router.get("/generateOTP",controller.verifyUser, localVariables,  controller.generateOTP); //generate random OTP
router.get("/verifyOTP", controller.verifyOTP); //verify generated OTP
router.get("createResetSession", controller.createResetSession); //reset all the variables

// put routes-generater

router.put("/updateUser", controller.updateUser); //is   use to update the user profile
router.put("/resetPassword",controller.verifyUser,  controller.resetPassword); // use to reset password

router.get("/test", (req, res, next) => {
  res.send("test");
});

export default router;
