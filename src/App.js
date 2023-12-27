// import { Toaster } from "react-hot-toast";
// import { Outlet, useLocation } from "react-router-dom";
// import Footer from "./components/Footer";
// import { useLayoutEffect } from "react";
// import { useDispatch, useSelector } from "react-redux";
// import { closeMenu } from './features/app/appSlice';
import { Outlet } from "react-router-dom";
import Header from "./Components/Header";
import useOnlineStatus from "./Hooks/useOnlineStatus";
import { Toaster } from "react-hot-toast";

const App = () => {
  const isOnline = useOnlineStatus();

  return (
    <>
      {isOnline ? (
        <>
          <Toaster />
          <Header />
          <Outlet />
        </>
      ) : (
        <div className="flex flex-col justify-center items-center min-h-screen">
          <h1 className="text-4xl font-bold">Oops! Connection lost</h1>
          <p>
            Looks like you're offline, please check your internet connection.
          </p>
        </div>
      )}
    </>
  );
};

export default App;
