import { useEffect, useState } from "react";
import { axiosInstance } from "../config/axiosInstance";

export const useCourses = () => {
    const [data, setData] = useState([]);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);

    console.log(data, "=======data");

    const fetchCourses = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/course/course-list",
            });
            setTimeout(() => {
                setData(response?.data?.data);
                setLoading(false);
            }, 3000);
            console.log(response);
        } catch (error) {
            console.log(error);
            setError(error);
            setLoading(true);
        }
    };

    useEffect(() => {
        fetchCourses();
    }, []);

    return [data, error, loading];
};
