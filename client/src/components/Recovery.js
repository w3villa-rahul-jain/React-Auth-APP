import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";

const Recovery = () => {
  return (
    <div className="container max-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="title flex flex-col items-center">
            <h4 className="font-bold">Hello Again!</h4>
            <span className="py-3 w-3/3 text-center text-gray-500">
              Enter OTP to recover Password
            </span>
          </div>
          <form className="pt-2">
            <div className="textbox flex flex-col items-center gap-3">
              <span className="py-6 text-sm ">
                Enter 6 Digit OTP to Your Email{" "}
              </span>
              <input
                type="text"
                className="input_field"
                placeholder="Enter 6 Digit OTP"
              />
              <button type="submit" className="submit-btn">
                Sign In
              </button>
            </div>
            <div className="text-center py-4">
              <span className="below_link">
                Can't Get OTP
                <button className="text-red-500 link">Resend</button>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Recovery;
