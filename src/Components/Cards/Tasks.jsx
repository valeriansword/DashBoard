import React from "react";
import { TiTickOutline } from "react-icons/ti";
import { BsThreeDotsVertical } from "react-icons/bs";
import { PiSquaresFour } from "react-icons/pi";
import virtual_assistant from "/virtual_assistant.webp"
// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "../ui/card";
import { PiDotsThreeVertical} from "react-icons/pi";
import { FaRegClock } from "react-icons/fa6";
import { HiOutlinePlusCircle } from "react-icons/hi2";
import { FaRegSmile } from "react-icons/fa";
import { FaRegCheckCircle } from "react-icons/fa";
import { Progress } from "../ui/progress"
import { ScrollArea } from "../ui/scroll-area"


// import {
//   Card,
//   CardContent,
//   CardDescription,
//   CardFooter,
//   CardHeader,
//   CardTitle,
// } from "@/components/ui/card"
// import { icons } from 'lucide-react'

function Tasks() {
  
const tasks=[
  {
    id:1,
    taskname:"complete Stage",
    level:25,
    icons:<FaRegCheckCircle color='rgba(75, 251, 114, 1)'/>
    
    
  },
  {
    id:2,
    taskname:"Remaining Stage",
    level:50,
    icons:<FaRegClock color='rgba(251, 120, 82, 1)'/>
  }
  ,
  {
    id:3,
    taskname:"Total Stages",
    icons: <FaRegSmile color='rgba(75, 251, 114, 1)' />,
    level:75,
  },
 
]
const stages=[
{
    id:1,
    progress:32,

  },{
    id:2,
    progress:90,

  },
  {
    id:3,
    progress:80,

  },{
    id:4,
    progress:60,

  },
  {
    id:5,
    progress:40,

  },
  {
    id:6,
    progress:28,

  },
  {
    id:7,
    progress:70,

  },
  {
    id:8,
    progress:50,

  },{
    id:9,
    progress:60,
  },
  {
    id:10,
    progress:32,

  }
  
  
  


]
var newDate = new Date();
let dateTime=new Intl.DateTimeFormat("en-In",{
  dateStyle:"short",
  timeStyle:"short"
})
let curDate=dateTime.format(newDate);

  return (
   <div>
    <div className='grid ml-sm mr-2 p-2 grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5 bg-violet-200 w-lg rounded-lg'>
    {tasks.map((task)=>(
  
    <div className='bg-white border-2 rounded-2xl   w-48 text-center shadow-l border-gray-300 '>
      <div className='ml-1 mr-1'>
       <span className='font-bold  text-text flex justify-between mt-2'>
          <span className='flex '>
          <h1 >{task.taskname} </h1>
          <p className='mt-2 ml-2'>{task.icons}</p>
          </span>
          <PiDotsThreeVertical className='mt-2 cursor-pointer'/>
        </span>
        <h2 className='mt-2 font-bold  text-text text-2xl'>{task.level}</h2>
        <h2 className='text-s cursor-pointer'>See Details {'>'}</h2>
     </div>
      
     </div>
     
    ))}     
    <div className='bg-white border-2 font-bold rounded-lg  w-48 text-center shadow-xl border-gray-300'>
      <div className='ml-1 mr-1 mt-2'>
       <span className=' text-text text-center'>
          <h1 >Add Stages</h1>
        </span>
        <h2 className='mt-4  ml-20'><HiOutlinePlusCircle className="cursor-pointer"  size={25}/></h2>
        
     </div>
      
     </div>
</div>
{/* main tasks levels */}
<div className="flex">
<ScrollArea className="h-xsm w-xmd rounded-md border ml-sm bg-violet-200 p-4">
<div className="bg-violet-200 pl-2 w-lg  rounded ">
    {/* top */}
    <div className="bg-white rounded-md w-md border-2 h-full flex justify-between p-2 border-b-2 ">
      <p className="text font-bold text-lg">Stages</p>
      <PiSquaresFour size="30" className="border bg-violet-200 rounded-xl cursor-pointer "  />

    </div>
    {/* levels progress */}
    {stages.map((stage)=>(
      <div  className=" bg-white w-md flex rounded justify-between">
      <div className="bg-white   h-full p-2">
        <p className=" text text-base font-medium">Stage-{stage.id}</p>
        <p className="text text-sm font-medium text-slate-500" >10 Levels</p>
      </div>
      <div>
       <span className="w-sm flex justify-between"> <p className="bg-black-500 text-md font-medium">Progress Bar</p><p className="text-violet-600 text-md font-medium">{stage.progress}%</p></span>
        <Progress value={stage.progress} className="mt-2 " />

      </div>
      <div>
        <p className="text text-violet-600 font-medium mt-2 mr-2 cursor-pointer ">View Details</p>
      </div>
    </div>
    ))}
    
   
      {/* stages completed */}
    </div></ScrollArea>

    {/* side main compo */}
    <div className="bg-violet-200 w-[278px] rounded" >
      {/* your last activity */}
      <div className="mt-2 rounded-xl bg-white ml-2 mr-2">
        <span >
          <p className="pt-2 pl-2 text-violet-700 font-bold text-medium">Your last activity</p>
          <p className=" pl-2 text-xs text-slate-500 font-medium">{curDate}</p>
        </span>
        <div className="w-[250px] pt-2 pl-2">
        <span className=" flex justify-between text-gray-500 font-medium text-sm"> <p>Stage-1 {">"} Stage-2</p><p className="">10%</p></span>
        <Progress value={10} className="ml-1  mr-2 mb-2" />

        </div>
        <button className="w-[250px] m-2 text-white h-[30px] bg-violet-600">Resume</button>

      </div>
      {/* ask me anything */}
      <div className="mt-2 rounded-xl bg-white ml-2 mr-2">
        <img src={virtual_assistant} className="h-[100px] w-[100px] ml-[90px]" alt="virtual assistant is not available" />
        <span >
          <p className="pt-2 pl-2 text-violet-700 text-center font-bold text-medium">Ask me anything</p>
          <p className=" pl-2 text-xs text-slate-500 font-medium">I am here to resolve your queries and doubts</p>
        </span>
        
        
        <button className="w-[250px] m-2 text-white h-[30px] bg-violet-600">Start  Converse</button>

      </div>

    </div>
  </div>
</div>
)

  ;
}

export default Tasks;
