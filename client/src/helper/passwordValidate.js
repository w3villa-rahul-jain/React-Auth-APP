import toast from "react-hot-toast";

export async function passwordValidate(values) {
  const errors = passwordVerify({}, values);

  return errors;
}

export async function resetPasswordValidation(values) {
  const errors = passwordVerify({}, values);

  if (values.password !== values.confirm_pwd) {
    errors.exist = toast.error("Password Not Match ..!");
  }

  return errors;
}

/** validate password */

export function passwordVerify(errors = {}, values) {
  if (!values.password) {
    errors.password = toast.error("Password Required...");
  } else if (values.password.includes(" ")) {
    errors.password = toast.error("Invalid Password...");
  } else if (values.password.length < 4) {
    errors.password = toast.error("Passowrd must be more than 4 characters");
  }

  return errors;
}
