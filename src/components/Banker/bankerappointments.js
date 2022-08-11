import React from "react";
import BankerCalender from "../Calendar/bankercalendar";
import Display from '../Display/display'
import { Grid } from '@mui/material';
import { useState } from 'react';
import BankerAppBar from "../Nav/bankernav";

const BankerAppointment = () => {

    //fetch appointments
    const schedulerData = [
        { startDate: '2022-08-11T09:45', endDate: '2022-08-11T11:00', title: 'Loh Yi Ze'},
        { startDate: '2022-08-11T12:00', endDate: '2022-08-11T13:30', title: 'Heng Jiu Xiao'},
    ]
    //fetch client data

    const [isLoading, setLoading] = useState(false);
    const [clientInfo, setClientInfo] = useState(null)
    const handleClick = client => {
        setClientInfo(client)
    }
    
    return (
        <div className="BankerAppointment">
            <BankerAppBar />
            <Grid container spacing={0}>
                <Grid item xs={8}>
                    <BankerCalender 
                        appointments={schedulerData}
                        handleClick={handleClick}
                    />
                </Grid>
                <Grid item xs={4}>
                    {clientInfo && <Display clientInfo={clientInfo}/>}
                </Grid>
            </Grid>
        </div>
        

    );
};

export default BankerAppointment;