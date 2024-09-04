import React from "react";
import { Link } from "react-router-dom";
import { DarkMode } from "./ui/DarkMode";

export const Header = () => {
    return (
        <div className="flex justify-between items-center w-full px-20  h-24 shadow-2xl  ">
            <Link to={"/"}>
                <div className="text-3xl font-bold">Logo</div>
            </Link>
            <nav className="flex gap-16 items-center font-semibold">
                <Link to={"/"}>Home</Link>
                <Link to={"/about"}>About</Link>
                <Link to={"/course"}>Course</Link>
            </nav>

            <div>
                <DarkMode />
                <button className="btn btn-primary">Join us</button>
            </div>
        </div>
    );
};