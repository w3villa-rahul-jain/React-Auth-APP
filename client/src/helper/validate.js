import toast from "react-hot-toast";
import { passwordVerify } from "./passwordValidate";

/** validate login page username */
export async function usernameValidate(values) {
  const errors = usernameVerify({}, values);

  return errors;
}


// validate profile page 

export async function profileValidation(values) {
  const errors = emailVerify({}, values);

  return errors; 
}




// validate Register form 
export async function registerValidation(values){
  const errors = usernameVerify({}, values);
  emailVerify(errors, values);
  passwordVerify(errors, values);
  

  return errors;
}






/** validate username */
function usernameVerify(error = {}, values) {
  if (!values.username) {
    error.username = toast.error("Username Required...!");
  } else if (values.username.includes(" ")) {
    error.username = toast.error("Invalid Username...!");
  }
  return error;
}


function emailVerify(error ={}, values){
  if(!values.email){
    error.email = toast.error("Email Required...!");
  }
  else if (values.email.includes(" ")){
    error.email = toast.error("Invalid Email...!");
  }

  return error;
}
  