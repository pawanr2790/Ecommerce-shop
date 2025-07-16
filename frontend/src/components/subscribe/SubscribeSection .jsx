import React, { useState } from "react";

const SubscribeSection = () => {
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDeafult();
    console.log(email);
  };
  return (
    <div className="text-center flex flex-col justify-center gap-3 items-center ">
      <p className="text-medium text-gray-800 text-2xl ">
        Subscribe now & get 20% off
      </p>
      <p className="text-gray-700 mt-3">
        Be the first to know about new arrivals, exclusive offers, and more.
      </p>
      <form
        onSubmit={handleSubmit}
        className="w-full sm:w-1/2 flex flex-col sm:flex-row gap-2 sm:gap-0"
      >
        <input
          type="text"
          name="email"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
          placeholder="enter your email"
          className="border border-gray-700 sm:flex-1 p-2 outline-none h-12"
        />
        <button
          type="submit"
          className="bg-black text-white px-9 py-3 uppercase text-xs hover:bg-gray-400 hover:text-black"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default SubscribeSection;
