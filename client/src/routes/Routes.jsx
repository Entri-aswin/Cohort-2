import { createBrowserRouter } from "react-router-dom";
import { Home } from "../pages/Home";
import { RootLayout } from "../layout/RootLayout";
import { About } from "../pages/About";
import { LoginPage } from "../pages/LoginPage";
import { SIgnupPage } from "../pages/SIgnupPage";
import { CoursePage } from "../pages/CoursePage";
import { CourseDetails } from "../pages/CourseDetails";
import { UserLayout } from "../layout/UserLayout";
import { AuthUser } from "./protectedRoutes/AuthUser";
import { ProfilePage } from "../pages/user/ProfilePage";

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
                path: "course-details/:id",
                element: <CourseDetails />,
            },
        ],
    },
    {
        path: "user",
        element: (
            <AuthUser>
                <UserLayout />
            </AuthUser>
        ),
        children: [
            {
                path: "profile",
                element: <ProfilePage />,
            },
            {
                path: "my-learnings",
                element: <h1>My learnings</h1>,
            },
        ],
    },
    {
        path: "mentor-signup",
        element: <h2>Mentor signup </h2>
    },
    {
        path:'mentor-login',

    },

    {
        path: "mentor",
        // element: ,
        children: [
            {
                path: "dashboard",
            },
            {
                path: "create-course",
            },
        ],
    },
]);
