import React, { useState } from "react";
import { X } from "lucide-react";
import uploadimg from "../../../assets/icons/uploadimg.svg"

const AddTeacher = ({ onClose }) => {
  const [image, setImage] = useState(null);

  // Handle file upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImage(URL.createObjectURL(file)); // preview
    }
  };

  // Remove uploaded image
  const handleRemoveImage = () => {
    setImage(null);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black opacity-40"
        onClick={onClose}
      ></div>

      {/* Modal */}
      <div className="relative bg-white rounded-lg shadow-lg w-[700px] max-h-[90vh] overflow-y-auto">
        {/* Header (padded) */}
        <div className="flex justify-between items-center p-6 pb-2">
          <h2 className="text-lg font-semibold">Teacher Form</h2>
          <button onClick={onClose}>
            <X className="w-5 h-5 text-gray-500 hover:text-black" />
          </button>
        </div>

        {/* Full-width divider line */}
        <div className="w-full h-px bg-gray-200"></div>

        {/* Body with padding */}
        <div className="p-6">
          {/* Upload Section */}
          <div className="flex items-start gap-4 mb-6">
            {/* Image Preview / Placeholder */}
            <div className="w-14 h-14 border border-gray-300 rounded-md flex items-center justify-center bg-gray-50 overflow-hidden">
              {image ? (
                <img
                  src={image}
                  alt="Preview"
                  className="w-full h-full object-cover"
                />
              ) : (
               <span><img src={uploadimg} alt="" className="h-6 w-6" /></span>
              )}
            </div>

            <div className="flex flex-col">
              <div className="flex gap-2">
                {/* Upload button */}
                <label className="bg-gray-200 px-3 py-1.5 text-sm font-medium text-gray-700 rounded cursor-pointer">
                  Upload
                  <input
                    type="file"
                    accept="image/*,.pdf"
                    className="hidden"
                    onChange={handleImageUpload}
                  />
                </label>

                {/* Show Remove only when image exists */}
                {image && (
                  <button
                    onClick={handleRemoveImage}
                    className="bg-red-100 px-3 py-1.5 text-sm font-medium text-red-600 rounded"
                  >
                    Remove
                  </button>
                )}
              </div>

              {/* Helper text */}
              <p className="text-xs text-gray-500 mt-2">
                Upload image size of 4MB, Format JPG, JPEG, PNG, PDF
              </p>
            </div>
          </div>

          {/* Body (form fields) */}
          <form className="grid grid-cols-2 gap-4">
            {/* Full Name */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">
                Full Name<span className="text-red-500">*</span>
              </label>
              <input
                type="text"
                placeholder="Enter Full Name"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Date Of Birth */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">
                Date Of Birth<span className="text-red-500">*</span>
              </label>
              <input
                type="date"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Contact */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Contact</label>
              <input
                type="text"
                placeholder="Enter contact details"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Email */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Email</label>
              <input
                type="email"
                placeholder="Enter email address"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Gender */}
            <div className="col-span-2">
              <label className="block text-sm font-medium">Gender</label>
              <div className="flex items-center gap-4 mt-1">
                <label>
                  <input type="radio" name="gender" value="Male" /> Male
                </label>
                <label>
                  <input type="radio" name="gender" value="Female" /> Female
                </label>
              </div>
            </div>

            {/* Date of Join */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Date of Join</label>
              <input
                type="date"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Status */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Status</label>
              <select className="mt-1 w-full border rounded-md p-2 text-sm">
                <option>Select</option>
                <option>Active</option>
                <option>Inactive</option>
              </select>
            </div>

            {/* Address Line 1 & 2 */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Address Line 1</label>
              <input
                type="text"
                placeholder="Enter Address"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>
            <div className="col-span-1">
              <label className="block text-sm font-medium">
                Address Line 2 (Optional)
              </label>
              <input
                type="text"
                placeholder="Enter Address"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Landmark */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Landmark</label>
              <input
                type="text"
                placeholder="Enter Landmark"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Area */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Area</label>
              <input
                type="text"
                placeholder="Enter Area"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Zip Code */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Zip Code</label>
              <input
                type="text"
                placeholder="Enter Zip Code"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* City */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">City</label>
              <input
                type="text"
                placeholder="Enter City"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* State */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">State</label>
              <input
                type="text"
                placeholder="Enter State"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Country */}
            <div className="col-span-1">
              <label className="block text-sm font-medium">Country</label>
              <input
                type="text"
                placeholder="Enter Country"
                className="mt-1 w-full border rounded-md p-2 text-sm"
              />
            </div>

            {/* Submit Button */}
            <div className="col-span-2 flex justify-end">
              <button
                type="button"
                className="bg-primary text-white px-4 py-2 rounded-md"
              >
                Next
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default AddTeacher;
