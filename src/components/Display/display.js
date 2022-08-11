import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {Button, Paper} from '@mui/material';

const Display = (props) => {
  const clientInfo = props.clientInfo
  //fetch client info 
  const [isLoading, setIsLoading] = useState(null)
  useEffect( () => {
    setTimeout(()=> {setIsLoading(true)
      // fetch('').then(res=> {
      //   return res.json()
      // })
      // .then(data => {
      //   setIsLoading(false)
      // })
    }, 1000)
  }, [clientInfo])

  const data = [
    { name: 'Group A', value: 400 },
    { name: 'Group B', value: 300 },
    { name: 'Group C', value: 300 },
    { name: 'Group D', value: 200 },
    { name: 'Group E', value: 278 },
    { name: 'Group F', value: 189 },
  ]

  return (
    
    <div className='Display'>

      <Paper variant='outlined' square>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <h2>{clientInfo.title}</h2>
        <h3> Sex: </h3>
        <h3> Asset Allocation </h3>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            startAngle={0}
            endAngle={360}
            data={data}
            cx="50%"
            cy="50%"
            outerRadius={80}
            fill="#8884d8"
            label
          />
        </PieChart>
        <Button variant="text">More information</Button>
      </Paper>
      

    </div>
  );
}

export default Display;