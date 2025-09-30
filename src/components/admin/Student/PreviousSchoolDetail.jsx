import React from 'react'

const PreviousSchoolDetail = () => {
  return (
    <div className='bg-white rounded-md font-primary'>
      <h2 className='border-b border-gray-100 p-4  font-bold'>Previous School Details</h2>
      <div className="grid grid-cols-2 p-4 py-6 ">
        <div>
          <h2 className='font-bold text-sm'>Previous School Name</h2>
          <p className='text-xs'>Lorem Ipsum School, Bhavnagar</p>
        </div>
        <div>
          <h2 className='font-bold text-sm'>School Address</h2>
          <p className='text-xs'>Lorem Ipsum is a dummy text. there will be show address.</p>
        </div>

      </div>
    </div>
  )
}

export default PreviousSchoolDetail
