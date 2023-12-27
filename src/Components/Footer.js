import React from "react";
import { Link } from "react-router-dom";
import { CDN_URL } from "../Utils/constant";
import swiggy from "../Images/swiggy.png";
import linkedIn from "../Images/linkedin.png";
import git from "../Images/github.png";
const style = {
  color: {
    backgroundColor: "#02060C",
  },
};
const Footer = ({ appInfo }) => {
  return (
    <>
      <div
        style={{ backgroundColor: "#EEEEF4" }}
        className="flex justify-around items-center p-3 mt-12"
      >
        <div
          style={{ color: "#02060CBF" }}
          className="text-xs lg:text-2xl font-bold"
        >
          <p> For better experience,download</p>
          <p>the Swiggy app now</p>
        </div>
        <div className="w-[100px] lg:min-w-[190px]">
          <Link target="_blank" to={appInfo?.androidAppLink}>
            <img src={CDN_URL + appInfo?.androidAppImage} alt="android" />
          </Link>
        </div>
        <div className="w-[100px] lg:min-w-[190px]">
          <Link target="_blank" to={appInfo?.iosAppLink}>
            <img src={CDN_URL + appInfo?.iosAppImage} alt="ios" />
          </Link>
        </div>
      </div>

      <div className=" text-white p-10" style={style.color}>
        <div className="flex flex-wrap justify-around">
          <div className="flex flex-col">
            <div className="flex items-center">
              <img src={swiggy} alt="swiggy" className="h-7 mr-2" />
              <div className="text-3xl font-bold">Swiggy</div>
            </div>
            <div className="leading-loose my-4">
              &copy; 2023 Swiggy Clone by Shailesh
            </div>
            <div className="flex justify-around">
              <Link
                target="_blank"
                to="https://www.linkedin.com/in/shailesh-bind-48ba93238/"
              >
                <img src={linkedIn} alt="linkedin" className="w-7 h-7" />
              </Link>
              <Link target="_blank" to="https://github.com/shailesh287">
                <img src={git} alt="github" className="w-7 h-7" />
              </Link>
            </div>
          </div>
          <div className="flex flex-col p-14">
            <h1 className="text-xl font-bold leading-loose">Company</h1>
            <p className="leading-loose">About</p>
            <p className="leading-loose">Careers</p>
            <p className="leading-loose">Team</p>
            <p className="leading-loose">Swiggy One</p>
            <p className="leading-loose">Swiggy Instamart</p>
            <p className="leading-loose">Swiggy Genie</p>
          </div>
          <div className="flex flex-col p-14">
            <div>
              <h1 className="text-xl font-bold leading-loose">Contact us</h1>
              <p className="leading-loose">Help & Support</p>
              <p className="leading-loose">Partner with us</p>
              <p className="leading-loose">Ride with us</p>
            </div>
            <div className="flex flex-col mt-10">
              <h1 className="text-xl font-bold leading-loose">Legal</h1>
              <p className="leading-loose">Terms & Conditions</p>
              <p className="leading-loose">Cookie Policy</p>
              <p className="leading-loose">Privacy Policy</p>
            </div>
          </div>
          <div className="flex flex-col p-14">
            <h1 className="text-xl font-bold leading-loose">We deliver to:</h1>
            <p className="leading-loose">Bangalore</p>
            <p className="leading-loose">Chennai</p>
            <p className="leading-loose">Hyderabad</p>
            <p className="leading-loose">Delhi</p>
            <p className="leading-loose">Mumbai</p>
            <p className="leading-loose">Pune</p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
