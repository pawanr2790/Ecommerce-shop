import React from "react";
import { assets } from "../assets/frontend_assets/assets";
import SubscribeSection from "../components/subscribe/SubscribeSection ";
const About = () => {
  return (
    <div className="border-t border-gray-200">
      <div className="flex flex-col gap-3 ">
        {/* ABOUT HEADING */}
        <div className="flex justify-center items-center mt-10">
          <div className="flex items-center">
            <p className="text-2xl text-gray-500 uppercase">
              About <span className="text-gray-800"> Us</span>
            </p>
            <hr className="w-10 border-none h-[1.5px] bg-gray-700 ml-3" />
          </div>
        </div>
        {/* about scetion  */}
        <div className="flex flex-col md:flex-row  gap-16 my-10 justify-center  md:items-center">
          {/* about-img */}
          <div className="w-full md:max-w-[450px]">
            <img src={assets.about_img} alt="" />
          </div>
          {/* content */}
          <div className="w-full md:max-w-[760px] my-15 flex-wrap">
            <div className="flex flex-col gap-8 text-gray-600 ">
              <p className="">
                Forever was born out of a passion for innovation and a desire to
                revolutionize the way people shop online. Our journey began with
                a simple idea: to provide a platform where customers can easily
                discover, explore, and purchase a wide range of products from
                the comfort of their homes.
              </p>

              <p>
                Since our inception, we've worked tirelessly to curate a diverse
                selection of high-quality products that cater to every taste and
                preference. From fashion and beauty to electronics and home
                essentials, we offer an extensive collection sourced from
                trusted brands and suppliers.
              </p>
              <b>Our Mission</b>
              <p>
                Our mission at Forever is to empower customers with choice,
                convenience, and confidence. We're dedicated to providing a
                seamless shopping experience that exceeds expectations, from
                browsing and ordering to delivery and beyond.
              </p>
            </div>
          </div>
        </div>
        {/* why choose us */}
        <div className="flex  items-center mt-10">
          <div className="flex items-center">
            <p className="text-xl text-gray-500 uppercase">
              WHY <span className="text-gray-800"> choose us</span>
            </p>
            <hr className="w-10 border-none h-[1.5px] bg-gray-700 ml-3" />
          </div>
        </div>
        {/* 3 boxes */}
        <div className="flex flex-col md:flex-row text-sm mb-20">
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Quality Assurance:</b>
            <p className="text-gray-600">
              We meticulously select and vet each product to ensure it meets our
              stringent quality standards.
            </p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Convenience:</b>
            <p className="text-gray-600">
              With our user-friendly interface and hassle-free ordering process,
              shopping has never been easier.
            </p>
          </div>
          <div className="border border-gray-300 px-10 md:px-16 py-8 sm:py-20 flex flex-col gap-5">
            <b>Exceptional Customer Service:</b>
            <p className="text-gray-600">
              Our team of dedicated professionals is here to assist you the way,
              ensuring your satisfaction is our top priority.
            </p>
          </div>
        </div>
        <div>
          <SubscribeSection />
        </div>
      </div>
    </div>
  );
};

export default About;
