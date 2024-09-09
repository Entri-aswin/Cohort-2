import { Outlet, useNavigate } from "react-router-dom";
import {  useSelector } from "react-redux";


export const AuthUser = () => {
    const { isUserExist } = useSelector((state) => state.user);
    const navigate = useNavigate();


    if (!isUserExist) navigate("/login");

    return isUserExist ? <Outlet /> : null;
};
