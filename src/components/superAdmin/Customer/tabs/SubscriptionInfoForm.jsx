import { div } from "framer-motion/client";
import React, { useState } from "react";

const SubscriptionInfoForm = () => {
  const [students, setStudents] = useState(0);
  const [subAdmins, setSubAdmins] = useState(1);
  const [extraStorage, setExtraStorage] = useState("100GB");
  const [supportLevel, setSupportLevel] = useState(null);
  const [couponCode, setCouponCode] = useState("");
  const [isPaid, setIsPaid] = useState("");

  // Prices
  const basePlanPrice = 3000;
  const subAdminPrice = 300;
  const extraStoragePrices = { "50GB": 3000, "100GB": 6000, "200GB": 11000 };
  const supportPrices = { Priority: 3000, Premium: 6000 };

  // Calculations
  // Calculations (adjusted)
  const subAdminTotal = isPaid === "paid" ? subAdmins * subAdminPrice : 0;
  const storageTotal =
    isPaid === "paid" && extraStorage ? extraStoragePrices[extraStorage] : 0;
  const supportTotal =
    isPaid === "paid" && supportLevel ? supportPrices[supportLevel] : 0;
  const basePrice = isPaid === "paid" ? basePlanPrice : 0;

  const planTotal = basePrice + subAdminTotal + storageTotal + supportTotal;

  return (
    <div className="flex justify-center py-6 bg-white w-full">
      <div className="w-full  bg-white shadow-md rounded-lg p-5 space-y-6">
        {/* Plan Selection */}
        <div className="grid grid-cols-2 gap-4 ">
          <div>
            <label className="block text-sm font-bold text-gray-700">
              Select Plan
            </label>
            <select
              className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
              onChange={(e) => setIsPaid(e.target.value)}
            >
              <option>Trial Pack</option>
              <option value="paid">Basic - ₹3,000</option>
            </select>
          </div>

          <div>
            {isPaid === "paid" ? (
              <>
                <label className="block text-sm font-bold text-gray-700">
                  Number of Students
                </label>
                <input
                  type="number"
                  value={students}
                  onChange={(e) => setStudents(Number(e.target.value))}
                  className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </>
            ) : (
              <>
                <label className="block text-sm font-bold text-gray-700">
                  Choose Date
                </label>
                <input
                  type="date"
                  className="mt-1 w-full border border-gray-300 rounded-sm px-3 py-2 focus:ring-blue-500 focus:border-blue-500 text-sm"
                />
              </>
            )}
          </div>
        </div>

        {isPaid === "paid" && (
          <>
            <p className="font-bold mb-2">Available Add-ons</p>
            {/* Quantity Based Add-ons */}
            <div className="border border-gray-300 rounded-sm rounded-s">
              <div className="flex justify-between items-center  px-3 py-2">
                <h3 className="text-sm font-bold">Quantity Based Add-ons</h3>
              </div>
              <div className="p-3 ">
                <div className="flex justify-between items-center px-3 py-3 border border-gray-300 rounded-sm">
                  <div className=" ">
                    <p className="text-sm font-bold">Sub-Admin</p>
                    <p className="text-xs text-gray-500 mb-2">
                      Additional storage space for documents and media files
                    </p>
                    <div className="flex h-[30px] text-center items-center gap-1">
                      <button
                        className="px-2 border border-gray-300 rounded"
                        onClick={() =>
                          setSubAdmins((prev) => Math.max(0, prev - 1))
                        }
                      >
                        -
                      </button>
                      <span className="p-1 text-sm bg-[#EAEAEA] rounded-md w-[30px]">
                        {subAdmins}
                      </span>
                      <button
                        className="px-2 border border-gray-300 rounded"
                        onClick={() => setSubAdmins((prev) => prev + 1)}
                      >
                        +
                      </button>
                    </div>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-xs text-gray-400">
                      <span className="font-bold">₹300</span> / Sub-Admin
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Storage Add-ons */}
            <div className="border border-gray-300 rounded-sm rounded-s">
              <h3 className="px-3 py-2  text-sm font-bold">
                Storage Based Add-ons
              </h3>
              <div className="flex flex-col divide-y p-3 gap-2">
                {Object.entries(extraStoragePrices).map(([size, price]) => (
                  <label
                    key={size}
                    className="flex items-center justify-between border rounded-sm border-gray-300 px-3 py-3 cursor-pointer"
                  >
                    <div className="flex items-center gap-2">
                      <input
                        type="radio"
                        name="storage"
                        value={size}
                        checked={extraStorage === size}
                        onChange={() => setExtraStorage(size)}
                        className="h-4 w-4 text-blue-600"
                      />
                      <div className="flex flex-col">
                        <span className="text-sm">Extra Storage ({size})</span>
                        <span className="text-xs text-[#6B7280]">
                          Additional storage space for documents and media files
                        </span>
                      </div>
                    </div>
                    <div className="text-right">
                      <p className="text-sm font-bold">
                        ₹{price.toLocaleString()}
                        <span className="text-xs text-gray-500"> /monthly</span>
                      </p>
                      <span className="text-green-700 bg-green-100 px-1 py-0.5 text-xs rounded-sm ">
                        Storage
                      </span>
                    </div>
                  </label>
                ))}
              </div>
            </div>

            {/* Support Add-ons */}
            <div className="border border-gray-300 rounded-sm rounded-s">
              <h3 className="px-3 py-2  text-sm font-bold">
                Support Based Add-ons
              </h3>
              <div className="p-3">
                <div className="flex flex-col divide-y gap-3">
                  {Object.entries(supportPrices).map(([level, price]) => (
                    <label
                      key={level}
                      className="flex items-center  border border-gray-300 justify-between px-3 py-3 cursor-pointer "
                    >
                      <div className="flex items-center gap-2 ">
                        <input
                          type="radio"
                          name="support"
                          value={level}
                          checked={supportLevel === level}
                          onChange={() => setSupportLevel(level)}
                          className="h-4 w-4 text-blue-600"
                        />
                        <span className="text-sm">{level} Support</span>
                      </div>
                      <div className="text-right">
                        <p className="text-sm font-bold">
                          ₹{price.toLocaleString()}
                          <span className="text-xs text-gray-500">
                            {" "}
                            /monthly
                          </span>
                        </p>
                        <span className="text-yellow-700 bg-yellow-100 px-2 py-0.5 text-xs rounded-full">
                          Support
                        </span>
                      </div>
                    </label>
                  ))}
                </div>
              </div>
            </div>
          </>
        )}

        {/* Plan Breakdown */}
        <div className="border border-gray-300 rounded-sm rounded-s bg-gray-50 p-3">
          <h3 className="text-sm font-bold mb-2">Plan Breakdown</h3>
          <div className="space-y-1 text-sm">
            <div className="flex justify-between">
              <span>Basic plan</span>
              <span>₹{basePlanPrice}</span>
            </div>
            <div className="flex justify-between">
              <span>Sub-Admin (x{subAdmins})</span>
              <span>₹{subAdminTotal}</span>
            </div>
            {extraStorage && (
              <div className="flex justify-between">
                <span>Extra Storage ({extraStorage})</span>
                <span>₹{storageTotal}</span>
              </div>
            )}
            {supportLevel && (
              <div className="flex justify-between">
                <span>{supportLevel} Support</span>
                <span>₹{supportTotal}</span>
              </div>
            )}
            <div className="flex justify-between font-bold border-t pt-2">
              <span>Plan Total</span>
              <span>₹{planTotal}</span>
            </div>
          </div>
        </div>

        {isPaid === "paid" && (
          <>
            {/* Coupon Code */}
            <div className="border border-gray-300 rounded-sm rounded-s bg-gray-50 p-3">
              <h3 className="text-sm font-bold mb-2">Coupon Code</h3>
              <div className="flex">
                <input
                  type="text"
                  value={couponCode}
                  onChange={(e) => setCouponCode(e.target.value)}
                  placeholder="Enter coupon code"
                  className="flex-1 border border-gray-300 rounded-sm px-3 py-2 text-sm focus:ring-blue-500 focus:border-blue-500"
                />
                <button className="ml-2 px-4 py-2 bg-primary text-white rounded-md text-sm hover:bg-blue-700">
                  Apply
                </button>
              </div>
            </div>
          </>
        )}

        {/* Summary */}
        <div className="border border-gray-300 rounded-sm rounded-s bg-gray-50 p-3">
          <h3 className="text-sm font-bold mb-2">Summary</h3>

          {isPaid === "paid" && <p className="text-sm">Plan: Basic</p>}

          <p className="text-sm">Users: {students}</p>
          <p className="text-sm">Sub-Admin: {subAdmins}</p>
        </div>

        {isPaid === "paid" && (
          <div className="rounded-sm rounded-s bg-white p-3">
            <h3 className="text-sm font-bold mb-2">Payment Methods</h3>
            <div className="flex">
              <select
                name="payment"
                id=""
                className="border border-gray-300 text-[#ADADAE] w-full px-2 py-1.5 rounded-md text-sm"
              >
                <option value="paytm" className="text-black">
                  Cash
                </option>
                <option value="UPI" className="text-black">
                  UPI
                </option>
                <option value="Bank Transection" className="text-black">
                  Bank Transection
                </option>
                <option value="Credit Card" className="text-black">
                  Credit Card
                </option>
                <option value="Debit Card" className="text-black">
                  Debit Card
                </option>
              </select>
            </div>
          </div>
        )}
        {/* Buttons */}
        <div className="flex justify-end gap-2">
          <button className="px-6 py-2 bg-[#DFE5EF] rounded-md text-sm hover:bg-gray-300">
            Previous
          </button>
          <button className="px-6 py-2 bg-primary text-white rounded-md text-sm hover:bg-green-700">
            Next
          </button>
        </div>
      </div>
    </div>
  );
};

export default SubscriptionInfoForm;
