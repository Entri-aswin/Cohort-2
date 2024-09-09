import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    isMentorExist: false,
    mentor: {},
};

export const mentorSlice = createSlice({
    name: "mentor",
    initialState,
    reducers: {
        saveMentor: (state, action) => {
            state.isMentorExist = true;
            state.mentor = action.payload;
        },
        clearMentor: (state) => {
            state.isMentorExist = false;
            state.mentor = {};
        },
    },
});

// Action creators are generated for each case reducer function
export const { saveMentor, clearMentor } = mentorSlice.actions;

export default mentorSlice.reducer;
