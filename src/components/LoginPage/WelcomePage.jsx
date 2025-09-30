import React from "react";
import Deen_Nest from "../../assets/Img/Deen_Nest_Img.svg";
import Deen_Nest_Logo from "../../assets/Img/DeenNest - logo _Main.svg";
const WelcomePage = () => {
  return (
    <div className="bg-[#FFFFFF] border border-[#f2f2f2] w-[30%] p-4 mx-auto mt-6 shadow-md">
      <div className="flex flex-col justify-start w-[70px] mt-12">
        <img src={Deen_Nest} alt="Deen_Nest" />
      </div>
      <div className="flex flex-col justify-between gap-6 mt-6">
        <p className="font-primary font-normal text-base text-[#000000]">
          Hello <span className="inline font-bold">Anish,</span>
        </p>
        <span className="font-primary font-normal text-base text-[#000000]">
          We’re excited to have you onboard!
        </span>
        <div className="font-primary">
          <p className="font-bold">Key benefits / features:</p>
          <ul className="list-disc list-inside pl-5 space-y-1">
            <li>Manage students and classes easily</li>
            <li>Track attendance and performance</li>
            <li>Handle fees and payments effortlessly</li>
          </ul>
        </div>
        <p className="font-primary font-normal text-base text-[#000000]">
          Get started by logging into your account:
        </p>
        <button className="bg-primary mx-auto block text-white py-3 px-12 rounded-sm text-base font-bold mt-6 cursor-pointer hover:scale-105">
          Log In
        </button>
        <p className="font-primary font-normal text-base mb-6">
          Thank you,
          <span className="block font-bold text-base">DeenNest Team</span>
        </p>
        <div className="border border-[#EFEFEF]"></div>

        <div className="flex flex-col justify-center items-center gap-10 mt-6">
          <div className="">
            <img src={Deen_Nest_Logo} alt="DeenNest_Logo" className="w-40" />
          </div>
          <div className="flex flex-col justify-center items-center ">
            <p className="font-primary font-normal text-base">
              This Is System Generated e-mail. Please do not reply.
            </p>
            <span className="font-primary font-normal text-base mt-2">
              T&CS | Disclaimer
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WelcomePage;
