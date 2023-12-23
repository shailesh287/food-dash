import React from "react";
import aboutImage from "../Images/about_img.jpg";

const About = () => {
  return (
    <div className="container-max py-16  text-center min-h-[80vh]">
      <img
        src={aboutImage}
        alt="About Img"
        className="w-full max-w-[480px] mx-auto rounded-lg"
      />

      <div className="w-[90%] max-w-[480px] mx-auto">
        <h1 className="text-3xl my-4">FoodDash 🍔</h1>

        <p>
          Foody is a food ordering web application built with React.js ⚛ and
          Swiggy's API.
        </p>
        <p>
          This project was built 🔧 during the coursework of{" "}
          <a
            className="text-orange-600"
            href="https://namastedev.com/namaste-react/"
          >
            Namaste React
          </a>{" "}
          taught by{" "}
          <a
            className="text-orange-600"
            href="https://www.linkedin.com/in/akshaymarch7/"
          >
            Akshay Saini
          </a>
        </p>
      </div>
    </div>
  );
};

export default About;
