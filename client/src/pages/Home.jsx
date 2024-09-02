import React from "react";
import { Header } from "../components/Header";
import { Footer } from "../components/Footer";

export const Home = () => {
    return (
        <div className="">
            <main className="min-h-96 flex gap-10 px-20">
                <div className="flex-1">
                    <h1 className="font-bold text-5xl my-5  ">Welcome user, </h1>
                    <p className="text-2xl font-normal">
                        Lorem ipsum dolor sit amet consectetur adipisicing elit. Nobis aspernatur ratione sint odit minus, saepe distinctio
                        cupiditate necessitatibus nemo, laboriosam perspiciatis vero blanditiis, ut corrupti!
                    </p>
                </div>
                <div className="flex-1">
                    <img src="https://archive.org/download/placeholder-image/placeholder-image.jpg" alt="home-image" />
                </div>
            </main>
        </div>
    );
};
