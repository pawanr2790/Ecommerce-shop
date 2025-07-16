import React from "react";

const Title = ({ text1, text2, text3 }) => {
  return (
    <div className="w-full  flex gap-2 flex-col py-8 flex-wrap">
      <div className="flex items-center justify-center flex-col sm:flex-row gap-2 ">
        <p className="text-3xl text-gray-500 text-medium">{text1}</p>
        <p className="text-3xl text-gray-700">{text2}</p>
        <p className="w-8 md:w-11 h-[2px] bg-[#414141]"></p>
      </div>
      <div className="w-full flex items-center justify-center sm:px-2 px-10 text-center">
        <p className=" text-xs sm:text-sm md:text-base text-gray-600">
          {text3}
        </p>
      </div>
    </div>
  );
};

export default Title;
