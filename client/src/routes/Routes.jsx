import { createBrowserRouter } from "react-router-dom";
// import { Home } from "../pages/Home";
// import { About } from "../pages/About";
import { LoginPage } from "../pages/shared/LoginPage";
import { SIgnupPage } from "../pages/shared/SIgnupPage";
// import { CoursePage } from "../pages/CoursePage";
// import { CourseDetails } from "../pages/CourseDetails";
import { UserLayout } from "../layout/UserLayout";
import { AuthUser } from "./protectedRoutes/AuthUser";
import { ProfilePage } from "../pages/user/ProfilePage";
// import { ErrorPage } from "../pages/ErrorPage";
import { CartPage } from "../pages/user/CartPage";
import { Home } from "../pages/user/Home";
import { About } from "../pages/user/About";
import { CoursePage } from "../pages/user/CoursePage";
import { CourseDetails } from "../pages/user/CourseDetails";
import { ErrorPage } from "../pages/user/ErrorPage";
import { MentorLayout } from "../layout/MentorLayout";
import { CreateCourse } from "../pages/mentor/CreateCourse";

export const router = createBrowserRouter([
    {
        path: "",
        element: <UserLayout />,
        errorElement: <ErrorPage />,
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
            {
                path: "user",
                element: <AuthUser />,
                children: [
                    {
                        path: "profile",
                        element: <ProfilePage />,
                    },
                    {
                        path: "my-learnings",
                        element: <h1>My learnings</h1>,
                    },
                    {
                        path: "cart",
                        element: <CartPage />,
                    },
                    {
                        path: "payment/success",
                        element: <h2>Payment success</h2>,
                    },
                    {
                        path: "payment/cancel",
                        element: <h2>Payment cancel</h2>,
                    },
                ],
            },
        ],
    },

    {
        path: "mentor",
        element: <MentorLayout />,
        children: [
            {
                path: "signup",
                element: <h2>Mentor signup </h2>,
            },
            {
                path: "login",
                element: <LoginPage role="mentor" />,
            },

            {
                path: "",
                // element: ,
                children: [
                    {
                        path: "profile",
                        element: <h1>Mentor profile</h1>,
                    },
                    {
                        path: "create-course",
                        element: <CreateCourse />,
                    },
                ],
            },
        ],
    },
]);
