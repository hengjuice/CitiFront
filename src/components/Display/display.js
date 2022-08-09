import React from 'react'
import Avatar from '@mui/material/Avatar';
import PersonIcon from '@mui/icons-material/Person';
const Display = (props) => {
  const clientInfo = props.clientInfo

  return (
    <div className="display">
      <Avatar>
        <PersonIcon />
      </Avatar>
      <h1> Heng Jiu Xiao</h1>
      <h2> Total Assets: </h2>
    </div>

    
  );
}

export default Display;