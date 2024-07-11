import React from 'react'
import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

function Stages() {
  return (
    <div className='bg-violet-200 ml-sm rounded'>
        {/* navigation */}
        <div className='ml-[10px] p-2 flex justify-between'>
            <span className='flex'>
                <IoArrowBackCircleOutline size="30" className='cursor-pointer'/>
                <p className=' ml-[10px] text-md font-medium  text-gray-600'>Stage-1{">"}Levels</p>
            </span>
            <div className='flex gap-2'>
                <a href="" className='text-violet-600 mt-2 text-md font-medium underline hover:text-gray-500'>Activity log</a>
                <button className='border rounded text-violet-1000 text-md font-medium border-black p-1 hover:bg-violet-600 hover:text-white bg-white flex gap-2'><MdOutlineManageAccounts size="30" className=''/>Manage</button>
                <button className='border rounded text-violet-1000 text-md font-medium border-black p-1 hover:bg-violet-600 hover:text-white bg-white flex gap-2'><CiCirclePlus  size="30" className=''/>create</button>

            </div>
            
        </div>
        {/* main levels */}
        <div className=''>
            <p>Levels</p>
            

        </div>
      
    </div>
  )
}

export default Stages
