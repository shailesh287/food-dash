import React, { Suspense, lazy } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Home from "./Pages/Home";
import { RouterProvider, createBrowserRouter } from "react-router-dom";
import Search from "./Pages/Search";
import About from "./Pages/About";
import { Provider } from "react-redux";
import appStore from "./Redux/appStore";
import Error from "./Pages/Error";
import Cart from "./Pages/Cart";
import Restaurant from "./Pages/Restaurant";

const Contact = lazy(() => import("./Pages/Contact"));

const appRouter = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        path: "search",
        element: <Search />,
      },
      {
        path: "about",
        element: <About />,
      },
      {
        path: "cart",
        element: <Cart />,
      },
      {
        path: "contact",
        element: (
          <Suspense fallback={<h1>Loading...</h1>}>
            <Contact />
          </Suspense>
        ),
      },
      {
        path: "restaurants/:id",
        element: <Restaurant />,
      },
    ],
    errorElement: <Error />,
  },
]);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <Provider store={appStore}>
    <RouterProvider router={appRouter} />
  </Provider>
);
