import React from "react";

import { IoArrowBackCircleOutline } from "react-icons/io5";
import { MdOutlineManageAccounts } from "react-icons/md";
import { CiCirclePlus } from "react-icons/ci";

import { FiArrowLeftCircle } from "react-icons/fi";

import { AlignCenter, PlusCircleIcon } from "lucide-react";
import { ScrollArea } from "../ui/scroll-area";
import { FiUpload } from "react-icons/fi";

import { PiSquaresFour } from "react-icons/pi";
import { GrSchedule } from "react-icons/gr";
import { IoSettingsOutline } from "react-icons/io5";
import { LuSearch } from "react-icons/lu";
import { BsPersonCircle } from "react-icons/bs";
import { TiTickOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import "primeicons/primeicons.css";
import { Separator } from "../ui/separator"

function Levels() {
  const levels = [
    {
      level: 1,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 2,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 3,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 4,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 5,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 6,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 7,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 8,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 9,
      Description: "Easy to Complete and know basics",
    },
    {
      level: 10,
      Description: "Easy to Complete and know basics",
    },
  ];
  return (
    <div>   
        <div className='bg-accent grid  rounded'>
        {/* navigation */}
        <div className=' p-2  flex justify-between '>
            <span className='flex  mt-2 sm:flex '>
                <IoArrowBackCircleOutline size="30" className='cursor-pointer'/>
                <p className='  text-md font-medium sm:text-sm sm:font-base '>Stage-1 {">"}Levels</p>
            </span>
            <div className='flex gap-2'>
                <a href="" className=' mt-2 text-md font-medium sm:text-sm sm:font-base underline text-primaryLight'>Activity log</a>
                <button className='border  rounded md:text-sm md:font-base text-md font-medium border-black p-1 hover:bg-primaryLight hover:text-white bg-white flex gap-2'><MdOutlineManageAccounts size="30" className='md:h-[20px] md:w-[20px] sm:h-[18px] sm:w-[18px]'/>Manage</button>
                <button className='border  rounded md:text-sm md:font-base text-md font-medium border-black p-1 hover:bg-primaryLight hover:text-white bg-white flex gap-2'><CiCirclePlus  size="30" className='md:h-[20px] md:w-[20px] sm:h-[18px] sm:w-[18px]'/>create</button>

            </div>
            
        </div>
        {/* main levels */}
        
        <div className='bg-white grid m-2 rounded   '>
            <div className="flex justify-between  ">

            
                <p className="text-violet-1000 md:text-sm md:font-base  text-md p-2 pl-6 font-medium">Levels</p>
                <p className="text-violet-1000 md:text-sm md:font-base  text-md p-2  font-medium">Description</p>
                <p className="text-violet-1000 sm:ml-[10px]  md:text-sm md:font-base   text-md text-center p-2 lg:pr-[100px] font-medium">
                    Upload Files
                    <p className="text-sm font-normal   sm:font-normal text-gray-500">( upload files to complete tasks)</p>
                    </p>
            </div>
            <Separator />
            
    {levels.map((level)=>(
       <>
       {level.level===1 ?
         <div className="flex justify-between    lg:flex md:flex   sm:flex p-2 mt-6">
         <p className="pl-4 text-sm font-medium">Level-{level.level}</p>
        <div className=" sm:w-[100px]">
           <p className=" md:pl-[4px] sm:pl-[0px]  sm:font-normal sm:text-sm text-sm font-medium text-black-300">{level.Description}</p>
        </div>
        <div className="md:mr-[150px] 4k:flex 4k:mr-[150px] 2xlg:flex 2xlg:mr-[150px] xlg:flex xlg:mr-[150px] lg:flex lg:mr-[150px] md:flex md:justify-between sm:flex sm:justify-between sm:mr-[50px] ">
         
             <FiUpload size="20" className="bg-primaryLight text-white rounded cursor-pointer  " />
             <BsThreeDotsVertical size="20"  className="text-primaryLight "/>
         </div> 
        
         
     </div>:
     
        <div className="flex  justify-between  sm:flex lg:flex md:flex p-2 mt-6">
        <p className="pl-4 text-sm font-medium text-gray-300">Level-{level.level}</p>
        <div className="sm:w-[100px]">
        <p className="  md:pl-[4px] sm:pl-[0px] text-sm font-medium  text-gray-300">{level.Description}</p></div>
      <div className="text-gray-300 4k:flex 4k:mr-[150px]  xlg:flex xlg:mr-[150px] 2xlg:flex 2xlg:mr-[150px] lg:flex lg:mr-[150px] lg:justify-between md:mr-[150px] md:flex md:justify-between sm:flex sm:justify-between sm:mr-[50px]">
        
            <FiUpload size="20" className=" rounded cursor-pointer  "/>
            <BsThreeDotsVertical size="20" className="text-gray-300" />
      </div>  
        
    </div>
     }
     
     
     
     </>
    ))}
    
        </div>
      
    </div>
    </div>
  );
}

export default Levels;
