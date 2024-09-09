import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { useNavigate } from "react-router-dom";
import { clearUser } from "../../redux/features/userSlice";
import { useDispatch } from "react-redux";

export const ProfilePage = () => {
    const [user, setUser] = useState({});

    const navigate = useNavigate()
    const dispatch = useDispatch()

    const fetchUserProfile = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/user/profile",
            });
            setUser(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(user);
    
    const handleLogout = async () => {
        try {
            const response = await axiosInstance({
                method: "POST",
                url: "/user/logout",
            });
            dispatch(clearUser());
            navigate('/')
        } catch (error) {
            console.log(error);
        }
    };

    

    useEffect(() => {
        fetchUserProfile();
    }, []);

    return (
        <div>
            <h1>{user?.name} </h1>
            <h1>{user?.email} </h1>
            <img src={user?.profilePic} alt="" />

            <button className="btn btn-outline">Edit </button>
            <br />
            <button onClick={handleLogout} className="btn btn-secondary"> Log-out </button>
        </div>
    );
};
