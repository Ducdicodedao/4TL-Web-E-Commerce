import React from "react";
import Footer from "../../Components/Footer/Footer";
import Header from "../../Components/Header/Header";
import Navbar from "../../Components/Navbar/Navbar";
import PaymentProperty from "../../Components/PaymentProperty/PaymentProperty";
import { Paypal } from "iconsax-react";
import "./payment.scss";

const Payment = () => {
    return (
        <div>
            <Navbar style="main" />
            <Header styles="hideNav" style="hideImg" />
            <div className="payment-container">
                <span>
                    <Paypal size={40} variant="Bold" />
                    Thanh toán
                </span>
                <PaymentProperty />
                <hr />
            </div>
            <Footer />
        </div>
    );
};

export default Payment;
