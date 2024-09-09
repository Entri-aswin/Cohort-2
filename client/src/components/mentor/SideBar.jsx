import React from "react";
import { Link } from "react-router-dom";

export const SideBar = () => {
    return (
        <div className="min-h-full">
            <label htmlFor="" aria-label="" className=""></label>
            <ul className="menu bg-base-200 text-base-content min-h-full w-80 p-4">
                {/* Sidebar content here */}
                <li>
                    <Link to={"/mentor/profile"}>Profile </Link>
                </li>
                <li>
                    <Link>Courses</Link>
                </li>
                <li>
                    <Link to={"/mentor/create-course"}>Create course</Link>
                </li>
            </ul>
        </div>
    );
};
