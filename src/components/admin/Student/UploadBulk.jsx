import React from "react";
import { X } from "lucide-react";
import uploadIcon from "../../../assets/icons/uploadicon.svg";

const UploadBulk = ({ onClose }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50 px-3">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white  rounded-2xl shadow-lg p-8 z-10 font-primary h-[70%]">
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-2 right-2 text-gray-500 hover:text-gray-700"
        >
          <X size={20} />
        </button>

        <div className="grid grid-cols-2 gap-6 items-stretch">
          {/* Upload Box */}
          <div className="flex flex-col ">
            <div className="flex flex-col flex-1 items-center justify-center border-2 border-dashed border-[#EEEEEE] rounded-lg p-12 text-center cursor-pointer hover:border-primary h-full ">
              <img src={uploadIcon} alt="ulpoadicon" className="mb-2" />
              <p className="text-base text-gray-500">
                Click to Select a CSV file or drag and drop
              </p>
              <p className="text-sm text-gray-400 ">Maximum file size 10MB</p>
            </div>
            <button className="mt-2 w-full px-4 py-1 bg-primary text-white rounded-md">
              Process File
            </button>
          </div>

          {/* Download Box */}
          <div className="flex flex-col">
            <div className="flex flex-col flex-1 items-center justify-center border-2 border-dashed border-[#EEEEEE] rounded-lg p-6 text-center h-full">
              <p className="text-sm text-gray-500 mb-2">
                Click here to download the sample <br /> Template to fill up the
                details
              </p>
              <h2 className="bg-white p-3 font-bold shadow-sm">CSV</h2>
            </div>
            <button className="mt-2 w-full px-4 py-1 bg-gray-200 text-gray-700 rounded-md">
              Download CSV Template
            </button>
          </div>
        </div>

        {/* Guidelines */}
        <div className="mt-6">
          <h3 className="text-lg font-semibold text-[#000000] mb-2">Guidelines:</h3>
          <ul className="text-base text-[#000000] space-y-1 list-decimal list-inside">
            <li>
              Please download the CSV template first for the proper format.
            </li>
            <li>
              Fill in the required details in the given format in the sheet.
            </li>
            <li>Save the sheet in CSV Format and Upload the same here.</li>
            <li>
              If the Data is entered as per the given format, the sheet will get
              uploaded without any errors.
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default UploadBulk;
