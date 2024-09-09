import React, { useEffect, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { axiosInstance } from "../config/axiosInstance";
import { MentorHeader } from "../components/mentor/MentorHeader";
import { MentorFooter } from "../components/mentor/Footer";
import { SideBar } from "../components/mentor/SideBar";
import { clearMentor, saveMentor } from "../redux/features/mentorSlice";

export const MentorLayout = () => {
    const { isMentorExist } = useSelector((state) => state.mentor);
    const dispatch = useDispatch();
    const location = useLocation();

    const checkMentor = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/mentor/check-mentor",
            });
            dispatch(saveMentor());
            console.log(response);
        } catch (error) {
            dispatch(clearMentor());
            console.log(error);
        }
    };

    useEffect(() => {
        checkMentor();
    }, [location.pathname]);

    return (
        <div>
            <MentorHeader />
            <div className="min-h-96 flex h-full">
                {isMentorExist && <SideBar />}
                <Outlet />
            </div>
            {/* <Footer /> */}
            <MentorFooter />
        </div>
    );
};
