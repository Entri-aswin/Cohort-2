const express = require("express");
const { userAuth } = require("../../middlewares/userAuth");
const { Order } = require("../../models/orderModel");
const stripe = require("stripe")(process.env.Stripe_Private_Api_Key);

const client_domain = process.env.CLIENT_DOMAIN;

const router = express.Router();

router.post("/create-checkout-session", userAuth, async (req, res, next) => {
    try {
        const { products } = req.body;

        const lineItems = products.map((product) => ({
            price_data: {
                currency: "inr",
                product_data: {
                    name: product.courseId.title,
                    images: [product.courseId.image],
                },
                unit_amount: Math.round(product.courseId.price * 100),
            },
            quantity: 1,
        }));

        const session = await stripe.checkout.sessions.create({
            payment_method_types: ["card"],
            line_items: lineItems,
            mode: "payment",
            success_url: `${client_domain}/user/payment/success`,
            cancel_url: `${client_domain}/user/payment/cancel`,
        });

        const order = new Order({
            userId: req.user.id,
            sessionId: session.id,
        });
        await order.save();

        res.json({ success: true, sessionId: session.id });
    } catch (error) {
        next(error);
    }
});

router.get("/session-status", userAuth, async (req, res) => {
    try {
        const userId = req.user.id;

        const orderDetails = await Order.findOne({ userId });
        const sessionId = orderDetails.sessionId;

        // const sessionId = req.query.session_id;
        const session = await stripe.checkout.sessions.retrieve(sessionId);

        // res.send({
        //     status: session?.status,
        //     customer_email: session?.customer_details?.email,
        // });

        res.json({
            message:"successully fetched order details",
            success:true,
            data:session
        })
    } catch (error) {

        res.status(error?.statusCode || 500).json(error.message || "internal server error");
    }
});

module.exports = { paymentRouter: router };
