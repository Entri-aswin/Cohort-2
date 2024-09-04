import React, { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";
import { CourseCard } from "../components/Cards";

export const CoursePage = () => {
    const [data, setData] = useState([]);

    console.log(data, "=======data");

    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/course/course-list",
            });
            setData(response?.data?.data);
            console.log(response);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return (
        <div>
            <h1>Course list</h1>

            {data.map((value) => (
                <CourseCard course={value} key={value?._id} />
            ))}
        </div>
    );
};
