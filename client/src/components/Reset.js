import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { resetPasswordValidation } from "../helper/passwordValidate";

const Reset = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
      confirm_pwd: "",
    },
    validate: resetPasswordValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      console.log(values);
    },
  });

  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="title flex flex-col items-center">
            <h4 className="font-bold">Reset</h4>
            <span className="py-3 w-2/3 text-center text-gray-500">
              Enter New Password
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className="input_field"
                placeholder="New Password"
              />
              <input
                {...formik.getFieldProps("confirm_pwd")}
                type="password"
                className="input_field"
                placeholder="Repeat Password"
              />
              <button type="submit" className="submit-btn">
                Reset
              </button>
            </div>

            <div className="text-center py-4">
              
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Reset;
