import React from "react";
import { Link } from "react-router-dom";
import avatar from "../assets/profile.png";
import "../styles/Username.css";

const Username = () => {
  return (
    <div className="container max-auto">
      <div className="flex justify-center items-center h-screen">
        <div className="glass">
          <div className="title flex flex-col items-center">
            <h4 className="font-bold">Hello Again!</h4>
            <span className="py-3 w-2/3 text-center text-gray-500">
              Explore More by Connecting with us
            </span>
          </div>
          <form className="py-1">
            <div className="profile flex justify-center py-4">
              <img src={avatar} alt="avatar" />
            </div>

            <div className="textbox flex flex-col items-center gap-6">
              <input
                type="text"
                className="input_field"
                placeholder="User Name"
              />
              <button type="submit" className="submit-btn">
                Let's GO
              </button>
            </div>

            <div className="text-center py-4">
              <span className="below_link">
                Not a Member
                <Link className="text-red-500 link" to="/register">
                  Register Now
                </Link>
              </span>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Username;
