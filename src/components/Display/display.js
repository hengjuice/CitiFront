import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
import React, { useEffect, useState } from 'react';
import { PieChart, Pie, Sector, Cell, ResponsiveContainer } from 'recharts';
import {Button, Paper} from '@mui/material';

const Display = (props) => {
  const clientInfo = props.clientInfo
  //fetch client info 
  const allClients = [{name: "Loh Yi Ze", sex: "Male", BankId: "8748", since: "08/11/2022", assetBreakdown:[
    { name: 'Stocks', value: 50 },
    { name: 'Bonds', value: 30 },
    { name: 'Crypto', value: 20 },
    { name: 'Group D', value: 200 },
  ]}
  , 
  {name: "Heng Jiu Xiao", sex: "Male", BankId: "9912", since: "25/12/2019", assetBreakdown:[
    { name: 'Stocks', value: 10 },
    { name: 'Bonds', value: 30 },
    { name: 'Crypto', value: 20 },
  ]}]
  const curClient = allClients.find((client => client.name == clientInfo))

  const [isLoading, setIsLoading] = useState(null)

  return (
    
    <div className='Display'>

      <Paper variant='outlined' square>
        <Avatar>
          <PersonIcon />
        </Avatar>
        <h2>{curClient.name}</h2>
        <h3> Sex: {curClient.sex}</h3>
        <h3> Asset Allocation: </h3>
        <PieChart width={400} height={300}>
          <Pie
            dataKey="value"
            startAngle={0}
            endAngle={360}
            data={curClient.assetBreakdown}
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