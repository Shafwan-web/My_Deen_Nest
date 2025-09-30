import React from 'react'

function PersonalInfo() {
  return (
    <>
        <div className="bg-white rounded-md p-6 w-full font-primary">
      {/* Title */}
      <h2 className="text-base md:text-lg font-bold text-gray-800 mb-4">
        Personal Information
      </h2>

      {/* Info Fields */}
      <div className="space-y-3 text-sm text-gray-700">
        <div className="flex justify-between">
          <span className="font-medium">Phone:</span>
          <span>+91 1234567899</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Email:</span>
          <span>example@email.com</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Date of Birth:</span>
          <span>14/12/2000</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Class:</span>
          <span>class 2 -A</span>
        </div>
        <div className="flex justify-between">
          <span className="font-medium">Subject:</span>
          <span>Quran</span>
        </div>
      </div>
    </div>
    </>
  )
}

export default PersonalInfo