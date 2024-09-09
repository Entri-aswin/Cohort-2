import React from "react";
import { Link } from "react-router-dom";

export const ErrorPage = () => {



  return <div className="flex flex-col justify-center items-center w-full h-96">
    <h1>404 Page not Found!</h1>
    <Link to={'/'}>Go to Home</Link>

  </div>;
};
