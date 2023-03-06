import React from "react";

import { createBrowserRouter } from "react-router-dom";
import Main from "../../../Layout/Main";
import Home from "../../Home/Home";
import Login from "../../Login/Login";
import Register from "../../Register/Register";
import Courses from "../../Courses/Courses";
import Blog from "../../Blog/Blog";
import FAQ from "../../FAQ/FAQ";
import CourseDetailBtn from "../CourseDetailBtn/CourseDetailBtn";
import PremiumDetails from "../PremiumDetails/PremiumDetails";
import ErrorPage from "../ErrorPage/ErrorPage";
import PrivateRoute from "../PrivateRoute/PrivateRoute";

export const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main></Main>,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <Home></Home>,
      },
      {
        path: "/login",
        element: <Login></Login>,
      },
      {
        path: "/register",
        element: <Register></Register>,
      },
      {
        path: "/courses",
        element: <Courses></Courses>,
        loader: ({ params }) =>
          fetch("https://onlinelearningplatform.vercel.app/courses-card"),
      },

      {
        path: "/course-detail/:id",
        element: <CourseDetailBtn></CourseDetailBtn>,
        loader: ({ params }) =>
          fetch(
            `https://onlinelearningplatform.vercel.app/course-detail/${params.id}`
          ),
      },
      {
        path: "/premium-detail/:id",
        element: (
          <PrivateRoute>
            <PremiumDetails></PremiumDetails>
          </PrivateRoute>
        ),
        loader: ({ params }) =>
          fetch(
            `https://onlinelearningplatform.vercel.app/premium-detail/${params.id}`
          ),
      },

      {
        path: "/blog",
        element: <Blog></Blog>,
      },
      {
        path: "/faq",
        element: <FAQ></FAQ>,
      },
    ],
  },
]);
