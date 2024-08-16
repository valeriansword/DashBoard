import React from 'react'
import { PieChart, Pie, Sector, Cell, ResponsiveContainer,Legend } from 'recharts';
function Graphsss() {
    

  
  const graphType=[
    {
    id:1,
    graphName:"Task  analysis",
    graphValue:[{id:1,name:"Task",value:"30%"},
    {id:2,name:"No.of.Task",value:"30%"},
    {id:3,name:"Completed task",value:"30%"},],
    data:[
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 500 },
      ],
      color:['lightgreen','lightgray']

},
{
    id:2,
    graphName:"Project analysis",
    graphValue:[{id:1,name:"Project",value:"30%"},
    {id:2,name:"No.of.Project",value:"30%"},
    {id:3,name:"Completed Project",value:"30%"},],
    data:[
        { name: 'Group A', value: 100 },
        { name: 'Group B', value: 900 },
      ],
      color:['#ff0000','lightgray']

},
{
    id:3,
    graphName:"Assignment analysis",
    graphValue:[{id:1,name:"assignment",value:"30%"},
    {id:2,name:"No.of.assignment",value:"30%"},
    {id:3,name:"Completed assignment",value:"30%"},],
    data:[
        { name: 'Group A', value: 200 },
        { name: 'Group B', value: 900 },
      ],
      color:['#000000','lightgray']
},{
    id:4,
    graphName:"Internship analysis",
    graphValue:[{id:1,name:"Internship",value:"30%"},
    {id:2,name:"No.of.Internship",value:"30%"},
    {id:3,name:"Completed Internship",value:"30%"},],
    data:[
        { name: 'Group A', value: 500 },
        { name: 'Group B', value: 900 },
      ],
      color:['blue','lightgray']
}

  ]
  return (
    <>
    {graphType.map((g)=>(
        <div className='w-full flex items-center'>
         
      <PieChart width={300} height={400} >
        <Pie
          data={g.data}
          cx={120}
          cy={200}
          innerRadius={60}
          outerRadius={80}
          fill="#8884d8"
          paddingAngle={1}
          dataKey="value"
        >
          {g.data.map((entry, index) => (
            <Cell key={`cell-${index}`} fill={g.color[index % g.color.length]} />
          ))}
        </Pie>
        {/* <Legend className='mr-[200px]'/> */}
      
         
      </PieChart>
          <div>
            <ul className={`text-[${g.color[0]}]`} style={{listStyleType:"disc"}}>
                {
                    g.graphValue.map((gv)=>{
                        return <li>{gv.name}-{gv.value}</li>
})
                }
            </ul>
          </div>
      
    </div>

    ))}
    </>
    
  )
}

export default Graphsss
