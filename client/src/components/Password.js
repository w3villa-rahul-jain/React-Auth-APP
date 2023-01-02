import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import { passwordValidate } from "../helper/passwordValidate";

const Password = () => {
  const formik = useFormik({
    initialValues: {
      password: "",
    },
    validate: passwordValidate,
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
            <h4 className="font-bold">Hello Again!</h4>
            <span className="py-3 w-2/3 text-center text-gray-500">
              Explore More by Connecting with us
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className="input_field"
                placeholder="Password"
              />
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </div>

            <div className="text-center py-4">
              <span className="below_link">
                Forget Password ?
                <Link className="text-red-500 link" to="/recovery">
                  Recover Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Password;
