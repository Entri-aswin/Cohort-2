import React, { useEffect, useState } from "react";
import { Skeltons } from "../../components/ui/Skeltons";
// import { CourseCard } from "../../components/Cards";
import { useCourses } from "../../hooks/useCourses";
import { CourseCard } from "../../components/Cards";

export const CoursePage = () => {
    const [data, error, loading] = useCourses();


    return (
        <div>
            <h1>Course list</h1>

            {loading ? (
                Array(10).fill({}).map((value,index)=>(
                    <Skeltons key={index} />

                ))
            ) : (
                <div className="grid grid-cols-1 md:grid-cols-2">
                    {data.map((value) => (
                        <CourseCard course={value} key={value?._id} />
                    ))}
                </div>
            )}
        </div>
    );
};
