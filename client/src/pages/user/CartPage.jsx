import React, { useEffect, useState } from "react";
import { axiosInstance } from "../../config/axiosInstance";
import { CartCards } from "../../components/Cards";

export const CartPage = () => {
    const [cartItems, setCartItems] = useState([]);
    const [cartData, setCartData] = useState({});

    const fetchCartItems = async () => {
        try {
            const response = await axiosInstance({
                method: "GET",
                url: "/cart",
            });
            setCartItems(response?.data?.data?.courses);
            setCartData(response?.data?.data);
        } catch (error) {
            console.log(error);
        }
    };

    console.log(cartItems, "=====cart Items");

    useEffect(() => {
        fetchCartItems();
    }, []);

    return (
        <div className="flex gap-10  px-20 py-10">
            <div className="w-8/12">
                <h2>This is cart Page</h2>

                {cartItems.map((value, index) => (
                    <CartCards item={value} key={index} />
                ))}
            </div>
            <div className="w-6/12 bg-base-300 flex flex-col items-center gap-5">
                <h2>Price summary</h2>

                <h2>Total Price: {cartData?.totalPrice}</h2>

                <button className="btn btn-success">Checkout</button>
            </div>
        </div>
    );
};
