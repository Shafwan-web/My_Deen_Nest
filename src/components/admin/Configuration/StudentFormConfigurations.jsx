import React from 'react';
import icon from "../../../assets/icons/icon.svg";
import { ChevronRight } from "lucide-react"; // <-- Use left arrow

const StudentFormConfigurations = () => {
  return (
    <div className='flex bg-white p-4 gap-4 items-center justify-between font-primary'>
      <div className='flex items-center gap-4'>
        <img src={icon} alt="" className='h-8 w-8 bg-[#F2F2F2]' />
        <div>
          <p className='text-sm text-[#1E293B] font-semibold'>Student Form Configuration</p>
          <p className='text-[10px] text-[#1E293B]'>Student Form Configuration</p>
        </div>
      </div>
      <ChevronRight /> 
    </div>
  );
}

export default StudentFormConfigurations;
