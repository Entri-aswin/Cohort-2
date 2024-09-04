import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";

export const UserLayout = () => {
    return (
        <div>
            <UserHeader />
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
