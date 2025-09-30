import React from "react";
import icon from "../../../assets/icons/contact.svg";

const ContactInfo = () => {
  return (
    <div className="flex flex-col w-75 h-40 bg-white rounded-md font-primary">
      <div>
        <h2 className="font-bold text-base border-b border-gray-200 p-4">
          Primary Contact Info
        </h2>
      </div>
      <div className="flex flex-col space-y-1 p-4">
        {/* Phone */}
        <div className="flex items-start space-x-4 ">
          <img src={icon} alt="Phone" className="w-8 h-8 mt-1" />
          <div className="flex flex-col">
            <p className="text-sm text-[#1E293B] font-bold">Phone Number</p>
            <p className="text-sm font-medium text-[#1E293B]">9797979797</p>
          </div>
        </div>
        {/* Email */}
        <div className="flex items-start space-x-4 ">
          <img src={icon} alt="Email" className="w-8 h-8 mt-1" />
          <div className="flex flex-col">
            <p className="text-sm text-[#1E293B] font-bold">Email Address</p>
            <p className="font-medium text-[#1E293B]">example@example.com</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactInfo;
