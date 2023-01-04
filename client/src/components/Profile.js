import React, { useState } from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";
import { Toaster } from "react-hot-toast";
import { useFormik } from "formik";
import convertToBase64 from "../helper/convert";
import { profileValidation } from "../helper/validate";

const Profile = () => {
  const [file, setFile] = useState();

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      mobileNo: "",
      address: "",
    },
    validate: profileValidation,
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
            <h4 className="font-bold">Profile</h4>
            <span className="py-3 w-2/3 text-center text-gray-500">
              You can update the details
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
              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("firstName")}
                  type="text"
                  className="input_field"
                  placeholder="FirstName"
                />
                <input
                  {...formik.getFieldProps("lastName")}
                  type="text"
                  className="input_field"
                  placeholder="LastName"
                />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("mobileNo")}
                  type="mobile"
                  className="input_field"
                  placeholder="Mobile No"
                />
                <input
                  {...formik.getFieldProps("email")}
                  type="text"
                  className="input_field"
                  placeholder="Email"
                />
              </div>

              <div className="name flex w-3/4 gap-10">
                <input
                  {...formik.getFieldProps("address")}
                  type="text"
                  className="input_field"
                  placeholder="Address"
                />
              </div>
              <div className="name flex w-3/4 gap-10">
                <button type="submit" className="submit-btn">
                  Register
                </button>
              </div>
            </div>

            <div className="text-center py-4">
              <span className="below_link">
                come back later
                <Link className="text-red-500 link" to="/">
                  logout
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Profile;
