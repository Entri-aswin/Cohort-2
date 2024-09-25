import React, { useEffect, useState } from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";
import { Outlet, useLocation } from "react-router-dom";
import { UserHeader } from "../components/user/UserHeader";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { clearUser, saveUser } from "../redux/features/userSlice";

export const UserLayout = () => {
    const { isUserExist } = useSelector((state) => state.user);
    const dispatch = useDispatch();
    const location = useLocation();
    const [loading, setLoading] = useState(true);

    const checkUser = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/check-user",
            });
            dispatch(saveUser());
            setLoading(false);
        } catch (error) {
            dispatch(clearUser());
            console.log(error);
        }finally{
            setLoading(false)
        }
    };

    useEffect(() => {
        checkUser();
    }, [location.pathname]);

    return loading ? null : (
        <div>
            {isUserExist ? <UserHeader /> : <Header />}
            <div className="min-h-96">
                <Outlet />
            </div>
            <Footer />
        </div>
    );
};
