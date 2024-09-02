import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { LoginPage } from "../pages/LoginPage";
import { SIgnupPage } from "../pages/SIgnupPage";
import { CoursePage } from "../pages/CoursePage";
import { CourseDetails } from "../pages/CourseDetails";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <RootLayout />,
        children: [
            {
                path: "",
                element: <Home />,
            },
            {
                path: "about",
                element: <About />,
            },
            {
                path: "login",
                element: <LoginPage />,
            },
            {
                path: "signup",
                element: <SIgnupPage />,
            },
            {
                path: "course",
                element: <CoursePage />,
            },
            {
                path: "course-details",
                element: <CourseDetails />,
            },
        ],
    },
]);
