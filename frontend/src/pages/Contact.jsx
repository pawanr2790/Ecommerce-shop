import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeSection from "../components/subscribe/SubscribeSection ";

const Contact = () => {
  return (
    <div>
      <div className="flex justify-center items-center mt-10">
        <div className="flex items-center">
          <p className="text-2xl text-gray-500 uppercase">
            Contact <span className="text-gray-800"> Us</span>
          </p>
          <hr className="w-10 border-none h-[2px] bg-gray-700 ml-3" />
        </div>
      </div>
      <div className="flex flex-col  my-10 md:flex-row mb-28 gap-10 justify-center">
        <img
          src={assets.contact_img}
          alt=""
          className="w-full md:max-w-[480px]"
        />
        <div className="flex flex-col justify-center items-start gap-6 ">
          <p className="font-semibold text-xl text-gray-600">Our Store</p>
          <p className="text-gray-500">
            54709 Willms Station
            <br />
            Suite 350, Washington, USA
          </p>
          <p className="text-gray-500">
            Tel: (415) 555-0132
            <br />
            Email: admin@forever.com
          </p>
          <p className="font-semibold text-xl text-gray-600">
            Careers at Forever
          </p>
          <p className="text-gray-500">
            Learn more about our teams and job openings.
          </p>
          <button className="border border-black px-8 py-4 text-sm hover:bg-black hover:text-white transition-all duration-500">
            Explore Jobs
          </button>
        </div>
      </div>

      <div>
        <SubscribeSection />
      </div>
    </div>
  );
};

export default Contact;
