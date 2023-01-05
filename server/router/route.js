import { Router } from 'express';

const router = Router();


router.route('/register').post((req, res)=> res.json('register Route'));
router.route('/registerMail').post();  //send the email
router.route('/authentication').post(); //authenticate user
router.route('/login').post();  //logini in app

// get method
router.route('/user/:username').get(); //user with username
router.route('/generateOTP').get();  //generate random OTP
router.route('/verifyOTP').get();  //verify generated OTP
router.route('createResetSession').get(); //reset all the variables

// put methods
  
router.route('/updateUser').put();  //is use to update the user profile
router.route('/resetPassword').put();  // use to reset password



export default router;


