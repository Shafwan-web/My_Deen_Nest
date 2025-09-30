import React from "react";
import Deen_Nest from "../../assets/Img/Deen_Nest_Img.svg";
import Deen_Nest_Logo from "../../assets/Img/DeenNest - logo _Main.svg";
export default function OTP() {
  return (
    <div>
      <div className="bg-[#FFFFFF] border border-[#f2f2f2] w-[30%] p-4 mx-auto mt-6 shadow-md">
        <div className="flex flex-col justify-start w-[70px] mt-12">
          <img src={Deen_Nest} alt="Deen_Nest" />
        </div>
        <div className="flex flex-col justify-between gap-6 mt-6">
          <p className="font-primary font-normal text-base text-[#000000]">
            Hello <span className="inline font-bold">Anish,</span>
          </p>
          <span className="font-primary font-normal text-base text-[#000000]">
            Use the following OTP to complete your verification:
          </span>
          <h1 className="font-primary font-bold mx-auto text-3xl mt-6">
            123 - 456
          </h1>
          <p className="font-primary font-normal text-lg leading-loose">
            This code is valid for 10 minutes. If you did not request this,
            ignore this email. Thank you,DeenNest Team
          </p>
          <p className="font-primary font-normal text-base mb-12">
            Thank you,
            <span className="block font-bold text-base">DeenNest Team</span>
          </p>
        </div>
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
}
