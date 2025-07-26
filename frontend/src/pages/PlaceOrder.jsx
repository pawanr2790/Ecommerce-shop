import React, { useState } from "react";
import { useSelector } from "react-redux";
import { assets } from "../assets/frontend_assets/assets";

const PlaceOrder = () => {
  const [values, setValues] = useState({});
  const { cartItems, currency } = useSelector((store) => store.product);
  const [paymentMethod, setPaymentMethod] = useState("cod");
  const intialValue = {
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    city: "",
    state: "",
    zipCode: "",
    country: "",
    phoneNumber: "",
  };
  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between gap-4 pt-5 sm:pt-14 min-h-[50vh] border-t">
      <div className="flex flex-col gap-4 w-full sm:max-w-[480px] ">
        <div className="text-xl sm:text-2xl my-3">
          <p className="prata-regular">DELIVERY INFORMATION</p>
        </div>
        <form className="flex flex-col gap-3">
          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="firstName"
              value={values.firstName}
              onChange={handleChange}
              placeholder="First Name"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
            <input
              type="text"
              name="lastName"
              value={values.lastName}
              onChange={handleChange}
              placeholder="Last Name"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
          </div>

          <input
            type="email"
            name="email"
            value={values.email}
            onChange={handleChange}
            placeholder="Email"
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
          />

          <input
            type="text"
            name="street"
            value={values.street}
            onChange={handleChange}
            placeholder="Street Address"
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
          />

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="city"
              value={values.city}
              onChange={handleChange}
              placeholder="City"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
            <input
              type="text"
              name="state"
              value={values.state}
              onChange={handleChange}
              placeholder="State"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
          </div>

          <div className="flex flex-col sm:flex-row gap-3">
            <input
              type="text"
              name="zipCode"
              value={values.zipCode}
              onChange={handleChange}
              placeholder="Zip Code"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
            <input
              type="text"
              name="country"
              value={values.country}
              onChange={handleChange}
              placeholder="Country"
              className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
            />
          </div>

          <input
            type="text"
            name="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
            placeholder="Phone Number"
            className="border rounded border-gray-300 py-1.5 px-3.5 w-full"
          />
        </form>
      </div>

      <div
        className="mt-8 
      "
      >
        <div className=" mt-8 min-w-96">
          <div className="mt-8 ">
            <h2 className="text-xl font-semibold text-gray-700 mb-4 border-b pb-2">
              CART <span className="text-black">TOTALS</span>
            </h2>
            <div className="space-y-3 text-sm text-gray-700">
              <div className="flex justify-between border-b pb-2">
                <span>Subtotal</span>
                <span>{currency}</span>
              </div>
              <div className="flex justify-between border-b pb-2">
                <span>Shipping Fee</span>
                <span>{currency}</span>
              </div>
              <div className="flex justify-between font-semibold text-black text-base">
                <span>Total</span>
                <span>{currency}</span>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-12">
          <div className="text-xl sm:text-2xl my-3">
            <p className="">PAYMENT METHODS</p>
          </div>
          <div className="flex flex-col lg:flex-row gap-3">
            <div
              onClick={() => setPaymentMethod("stripe")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer min-w-[150px]"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-500  rounded-full ${
                  paymentMethod === "stripe" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.stripe_logo} alt="" />
            </div>

            <div
              onClick={() => setPaymentMethod("razorpay")}
              className="flex items-center gap-2 border p-2 px-3 cursor-pointer min-w-[150px]"
            >
              <p
                className={`min-w-3.5 h-3.5 border border-gray-500  rounded-full ${
                  paymentMethod === "razorpay" ? "bg-green-400" : ""
                } `}
              ></p>
              <img className="h-5 mx-4" src={assets.razorpay_logo} alt="" />
            </div>

            <div
              onClick={() => setPaymentMethod("cod")}
              className="flex items-center gap-3 border p-2 px-3 cursor-pointer"
            >
              <p
                className={`min-w-3.5 h-3.5 border rounded-full border-gray-500  ${
                  paymentMethod === "cod" ? "bg-green-400" : ""
                } `}
              ></p>
              <p className="text-gray-500 text-sm font-medium mx-4">COD</p>
            </div>
          </div>
        </div>
        <button className="mt-6 w-full bg-black text-white text-sm font-medium py-3 tracking-wide hover:bg-gray-500 hover:text-black">
          PAY
        </button>
      </div>
    </div>
  );
};

export default PlaceOrder;
