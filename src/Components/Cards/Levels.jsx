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
      <div className="flex justify-between bg-white-500 w-100">
        <div className=" bg-white-500 h-full  font-mono font-bold">
          {/* topbar */}
          <div className=" pr-4 bg-white-50  border border-gray ">
            <div className=" flex mt-6  ml-6 mb-2">
              <button className=" text-white mr-4 w-16 h-7  bg-violet-950 cursor-pointer rounded-sm  ">
                Logo
              </button>
              <p className="text-xl text-violet-600">Pr.Name</p>
            </div>
          </div>
          {/* downbar */}
          <div className="absolute top-20 grid :grid-cols-3">
            {/*Components*/}
            <div className="hover:bg-violet-600 hover:text-white  ml-6 mb-6 flex flex-col items-center w-50 rounded cursor-pointer h-19">
              <PiSquaresFour size="20" />
              <button className="  rounded">Overview</button>
            </div>

            <div className=" hover:bg-violet-600 hover:text-white ml-6 mb-6 flex flex-col items-center w-40 rounded cursor-pointer h-19">
              <GrSchedule size="20" />
              <button className="  rounded">Schedules</button>
            </div>
            <hr class="h-px my-8 ml-6 bg-gray-200 border-0 dark:bg-gray-700"></hr>
            <div className=" hover:bg-violet-600 ml-6 mb-2  flex flex-col items-center w-40 rounded cursor-pointer h-18">
              <IoSettingsOutline size="20" />
              <button className="  rounded">Overview</button>
            </div>
          </div>
        </div>
        {/*search bar */}
        <div className=" relative  h-20 shrink-0">
          {/* <LuSearch className='absolute top-3 text-violet p-1 pt-2  ' size="30"   /> */}
          <i className="pi pi-search absolute top-4 text-violet-600 p-1 pl-2 pt-2 pointer-events-none"></i>

          <input
            type="text"
            placeholder="search"
            autoComplete="off"
            className="px-3 py-2 bg-violet-200 mt-3 pl-9 w-80 placeholder-violet-600 text-black rounded border-none focus:border-none"
          />
          <i className="pi pi-filter  text-violet-600 absolute top-6 right-3 cursor-pointer  " />
        </div>
        {/*rightside */}
        <div className="flex justify-between mr-10 ">
          <i className="pi pi-bell  text-violet-600 mt-6 mr-5  text-xl" />
          <div className="flex">
            <span className="mr-5">
              <p className="text-black-500 mt-3   font-bold">Jhon</p>
              <p className="text-gray-600  font-medium">Doe</p>
            </span>

            <BsPersonCircle size="30" className="mt-4 " />
          </div>
        </div>
      </div>
      {/* main-content */}
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
        <ScrollArea className="h-[400px] ">
        <div className='bg-white m-2 rounded'>
            <div className="flex justify-between ">

            
                <p className="text-violet-1000 text-md p-2 pl-6 font-medium">Levels</p>
                <p className="text-violet-1000 text-md p-2 pr-6 font-medium">Description</p>
                <p className="text-violet-1000 text-md text-center p-2 pr-[100px] font-medium">
                    Upload Files
                    <p className="text-sm font-normal text-gray-500"> upload files to complete tasks</p>
                    </p>
            </div>
            <Separator />
            
    {levels.map((level)=>(
       <>
       {level.level===1 ?
         <div className="flex justify-between p-2 mt-6">
         <p className="pl-4 text-sm font-medium">Level-{level.level}</p>
         <p className="pl-40">{level.Description}</p>
       <div className="">
         
             <label for="myfile" className=""><FiUpload size="20" className="bg-violet-200 rounded cursor-pointer ml-40 "/>
             <input type="file" id="myfile" style={{visibility:"hidden"}} name="myfile"/>
             </label>
             
             
         </div>  
         <BsThreeDotsVertical size="20" />
     </div>:
     
        <div className="flex justify-between p-2 mt-6">
        <p className="pl-4 text-sm font-medium text-gray-300">Level-{level.level}</p>
        <p className="pl-40 text-sm font-medium text-gray-300">{level.Description}</p>
      <div className="text-gray-300">
        
            <label for="myfile" className=""><FiUpload size="20" className=" rounded cursor-pointer ml-40 "/>
            <input type="file" id="myfile" style={{visibility:"hidden"}} name="myfile"/>
            </label>
            
            
        </div>  
        <BsThreeDotsVertical size="20" className="text-gray-300" />
    </div>
     }
     
     
     
     </>
    ))}
    
        </div></ScrollArea>
      
    </div>
    </div>
  );
}

export default Levels;
