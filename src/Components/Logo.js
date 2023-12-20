import { Link } from "react-router-dom";
import logo from "../Images/logo.jpg";
const Logo = () => {
  return (
    <>
      <Link
        to="/"
        data-testid="logo"
        className="text-xl md:text-2xl font-semibold flex items-center"
      >
        <img className="w-11 h-11" src={logo} alt="logo" />
        <span className="hidden md:block logo">FoodDash</span>
      </Link>
    </>
  );
};

export default Logo;
