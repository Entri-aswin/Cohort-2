import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import toast from "react-hot-toast";
import { axiosInstance } from "../../config/axiosInstance";

export const CourseDetails = () => {
    const [CourseDetails, setCourseDetails] = useState({});
    const { id } = useParams();

    console.log(id);

    const fetchCourseDetails = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: `/course/details/${id}`,
            });

            setCourseDetails(response?.data?.data);
            console.log(response, "===response");
        } catch (error) {
            console.log(error);
        }
    };

    const addToCart = async () => {
        try {
            const response = await axiosInstance({
                url: "/cart/add-to-cart",
                method: "POST",
                data: { courseId: CourseDetails._id },
            });
            console.log(response);
            toast.success('course added to cart')
            
        } catch (error) {
            toast.error('item could not add to cart')
            console.log(error);
        }
    };

    useEffect(() => {
        fetchCourseDetails();
    }, []);

    return (
        <div>
            <h2>CourseDetails</h2>
            <div className="flex w-full">
                <div className="w-8/12 my-10">
                    <h1 className="text-3xl">{CourseDetails?.title} </h1>
                    <h1>{CourseDetails?.description} </h1>
                    <h1>{CourseDetails?.price} </h1>
                    <h1>{CourseDetails?.duration} </h1>

                    <button className="btn btn-success" onClick={addToCart}>ADD to Cart</button>
                </div>
                <div className="w-5/12">
                    <img src={CourseDetails?.image} alt="" />
                </div>
            </div>
        </div>
    );
};
