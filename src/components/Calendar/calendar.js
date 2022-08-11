import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Grid } from '@mui/material';
import { useState } from 'react';
const CalenderGrid = (props) => {

    const [isLoading, setLoading] = useState(false); 


    // const saveAppointment= async (data) =>{
    //     const response = await fetch('https://localhost:4000/api/appts', {
    //     method: 'POST',
    //     body: JSON.stringify({
    //        apptId: "appointment" ,
    //        endDate: data.endDate,
    //        startDate: data.startDate,
    //        notes: data.notes,
    //        clientId: 1234,
    //        bankerId: 5678,
    //        title: data.title,
    //     }),
    //     headers: {
    //         'Content-Type': 'application/json'
    //     }
        
    // })
    // const json = await response.json()
    // console.log(json)
    // }

    const saveAppointment = (data) => {
        fetch('http://localhost:4000/api/appts', {
            method: 'POST',
            mode: 'no-cors',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                apptId: "appointment" ,
                endDate: data.endDate,
                startDate: data.startDate,
                notes: data.notes,
                clientId: 1234,
                bankerId: 5678,
                title: data.title,
            })
        }).then(()=>{
            console.log("Has been posted")
        }).catch((e)=>{
            console.log("Error posting")
        })
    }

    // const saveAppointment =(data) =>{
    //     console.log(data)
    // }

    return (
        <div className="calendar">
            <Scheduler>
                <ViewState />
                <EditingState onCommitChanges={saveAppointment}/>
                <IntegratedEditing />
                <WeekView
                    startDayHour={9}
                    endDayHour={17}
                />
                <Appointments />
                <AppointmentForm />
            </Scheduler>
        </div>
            

    );
}

export default CalenderGrid;