import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { registerValidation } from "../helper/validate";

const Register = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      email: "",
      username: "",
      password: "",
    },
    validate: registerValidation,
    validateOnBlur: false,
    validateOnChange: false,
    onSubmit: async (values) => {
      values = await Object.assign(values, { profile: file || "" });
      console.log(values);
    },
  });

  // formik does not support file upload

  const onUpload = async (e) => {
    const base64 = await convertToBase64(e.target.files[0]);
    setFile(base64);
  };

  return (
    <div className="container max-auto">
      <Toaster position="top-center" reverseOrder={false}></Toaster>
      <div className="flex justify-center items-center h-screen mt-3">
        <div className="glass">
          <div className="title flex flex-col items-center">
            <h4 className="font-bold">Register</h4>
            <span className="py-3 w-2/3 text-center text-gray-500">
              Happy to Join You
            </span>
          </div>
          <form className="py-1" onSubmit={formik.handleSubmit}>
            <div className="profile flex justify-center">
              <label htmlFor="profile" className="pro_label">
                <img
                  src={file || avatar}
                  alt="avatar"
                  className="profile-image"
                />
              </label>
              <input
                onChange={onUpload}
                type="file"
                id="profile"
                name="profile"
              />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                {...formik.getFieldProps("email")}
                type="email"
                className="input_field"
                placeholder="Email"
              />
              <input
                {...formik.getFieldProps("username")}
                type="text"
                className="input_field"
                placeholder="User Name"
              />
              <input
                {...formik.getFieldProps("password")}
                type="password"
                className="input_field"
                placeholder="Password"
              />
              <button type="submit" className="submit-btn">
                Register
              </button>
            </div>

            <div className="text-center py-4">
              <span className="below_link">
                Already Register?
                <Link className="text-red-500 link" to="/">
                  Login Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
