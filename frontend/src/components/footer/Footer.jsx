import { assets } from "../../assets/frontend_assets/assets";

const Footer = () => (
  <div>
    <div className="flex flex-col  sm:grid grid-cols-[3fr_1fr_1fr] gap-14 my-10 mt-30 text-sm">
      <div>
        <img src={assets.logo} alt="" className="w-32 mb-5" />
        <p className="w-full sm:w-4/5 text-gray-600">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Iure veniam
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit
          quibusdam iure quae amet ea fugit minus vitae nemo incidunt debitis!
          Rem qui numquam quae obcaecati quibusdam facere! Veniam, doloribus
          officia?
        </p>
      </div>
      <div className="">
        <p className="text-gray-800 text-xl text-bold mb-5">COMPANY</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li>Home</li>
          <li>About us</li>
          <li>Delivery</li>
          <li>Privacy policy</li>
        </ul>
      </div>
      <div className="flex flex-col ">
        <p className="text-gray-800 text-xl text-bold mb-5">GET IN TOUCH</p>
        <ul className="flex flex-col gap-1 text-gray-600">
          <li className="text-gray-500">+1-000-000-0000</li>
          <li className="text-gray-500">greatstackdev@gmail.com</li>
          <li className="text-gray-500">Instagram</li>
        </ul>
      </div>
    </div>

    <div>
      <hr className="border-gray-400" />
      <p className="py-5 text-sm text-center">
        Copyright 2024@ pawan.dev - All Right Reserved.
      </p>
    </div>
  </div>
);

export default Footer;
