import React from "react";
import pay from "../../../../assets/icons/pay-now.svg";
import downwhite from "../../../../assets/icons/download-white.svg";
import downblack from "../../../../assets/icons/download-black.svg";
import blackDashboardIcon from "../../../../assets/icons/blackicon.svg";
const Fees = () => {
  const FeesData = [
    {
      count: 15000,
      label: "Total Annual Fee",
      icon: blackDashboardIcon,
      bg: "white",
    },
    {
      count: 1500,
      label: "Amount Paid",
      icon: blackDashboardIcon,
      bg: "white",
    },
    {
      count: 15000,
      label: "Pending Amount",
      icon: blackDashboardIcon,
      bg: "white",
    },
  ];

  const samplePayments = [
    { id: 1, amount: 2450, date: "2025-03-12", paymentType: "Cash" },
    { id: 2, amount: 1320, date: "2025-04-05", paymentType: "Online" },
    { id: 3, amount: 3890, date: "2025-01-20", paymentType: "Cash" },
    { id: 4, amount: 520, date: "2025-02-28", paymentType: "Online" },
    { id: 5, amount: 2780, date: "2025-05-15", paymentType: "Cash" },
    { id: 6, amount: 1980, date: "2025-06-07", paymentType: "Online" },

  ];

  const transection = [];
  return (
    <div className="gap-2">
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-3 gap-4 mt-4 font-primary">
        {FeesData.map((stat, index) => (
          <div
            key={index}
            className={`flex items-center bg-white  justify-between p-4 rounded shadow ${stat.bg}`}
          >
            <div>
              <p className="text-xs lg:text-sm text-gray-600">{stat.label}</p>
              <h2 className="text-base lg:text-lg xl:text-xl font-bold">
                ₹{stat.count}{" "}
              </h2>
            </div>
            <img src={stat.icon} alt={stat.label} className="w-8 h-8 -mt-3" />
          </div>
        ))}
      </div>
      <div className="grid md:grid-cols-2 my-4 gap-2">
        <div className="fee-status rounded-md bg-white  ">
          <div className=" pt-4 px-6 w-full   font-primary">
            {/* Title */}
            <h2 className="text-base md:text-lg font-bold text-gray-800  ">
              Fee Status
            </h2>
          </div>
          <div className="p-4  rounded-lg  ">
            <div className="flex justify-between px-3">
              <h3 className="font-bold text-base">Quran Memorization</h3>
              <p className="text-left font-semibold text-sm ">90% </p>
            </div>

            {/* Inline progress bar */}
            <div className="w-full bg-gray-200 rounded-full h-3 mt-2 mb-3">
              <div
                className="bg-primary h-3 rounded-full"
                style={{ width: `80%` }}
              ></div>
            </div>

            <div className="flex flex-col ">
              <div className="flex justify-between mt-2 w-full px-2">
                <p className="text-base text-gray-600 font-bold">Fee Status</p>
                <p className="bg-[#FFF9E6] text-[#F59E0B] font-semibold flex justify-center items-center rounded-full px-1 text-xs">
                  Pending
                </p>
              </div>
              <div className="flex justify-between mt-2 w-full px-2">
                <p className="text-base text-gray-600 font-bold">Due Date:</p>
                <p className="font-bold flex justify-center items-center rounded-full px-1 text-sm">
                  30/10/2025
                </p>
              </div>
              <div className="flex justify-between mt-2 w-full px-2">
                <p className="text-base text-gray-600 font-bold">
                  Next Installment:
                </p>
                <p className="  font-bold flex justify-center items-center rounded-full px-1 text-sm">
                  ₹3,000
                </p>
              </div>
            </div>
            <div className="flex w-full">
              <button className="bg-primary text-white w-full py-2 rounded-sm mt-5 px-3 flex justify-center gap-2">
                <img src={pay} className="w-4 " alt="" /> Pay Now
              </button>
            </div>
          </div>
        </div>
        <div className="payment-history  bg-white rounded-md">
          <div className=" pt-4 px-6 w-full flex justify-between  font-primary ">
            {/* Title */}
            <div className="text-base md:text-lg flex w-full justify-between mb-5 items-center font-bold text-gray-800  ">
              Payment History
              <button className="bg-primary text-white text-sm py-1 rounded-sm  px-3 flex justify-center gap-2">
                <img src={downwhite} className="w-4 " alt="" /> Download
              </button>
            </div>
          </div>
          <div className="flex flex-col mb-3 w-full px-4 ">
            {samplePayments.map((item) => (
              <div
                key={item.id}
                className="entry flex   my-1 justify-between bg-[#F9FAFC] p-2 w-full"
              >
                <div className="flex flex-col p-2">
                  <p className="text-base font-bold">₹{item.amount}</p>
                  <p className="text-sm text-[#6B7280]">{item.date}</p>
                </div>
                <div className="flex flex-col items-center justify-center p-2">
                  <p className="text-sm text-[#6B7280]">{item.paymentType}</p>
                </div>
                <div className="flex p-2 gap-2 items-center">
                  <p className="text-xs font-bold bg-[#EEEEEE] py-1 px-3 rounded-full">
                    RCP001
                  </p>
                  <button className="text-white py-1 rounded-sm px-3 flex justify-center gap-2">
                    <img src={downblack} className="w-4" alt="" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Fees;
