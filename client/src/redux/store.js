import { configureStore } from "@reduxjs/toolkit";
import userReducer from "../redux/features/userSlice";
import mentorReducer from "../redux/features/mentorSlice";

export const store = configureStore({
    reducer: {
        user: userReducer,
        mentor: mentorReducer,
    },
});
