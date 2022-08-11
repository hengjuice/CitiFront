import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import Paper from '@mui/material/Paper';
const BankerCalender = (props) => {
    const appointments = props.appointments
    const handleClick = props.handleClick
    
    const appointmentOptions = ({ data,children, style, ...restProps }) => {

        return (
        <Appointments.Appointment
         {...restProps}
         style={{
           ...style,
           backgroundColor: "#a02d37",
           borderRadius: "8px",
         }} 
          onClick={()=>{
            handleClick(data.title)
           }}
          >
         {children}
         </Appointments.Appointment>
         );
        }

    return (
        <div className="calendar">
            <Paper>
                <Scheduler
                    data= {appointments}>

                    <ViewState />
                    <EditingState />
                    <IntegratedEditing />
                    <WeekView
                        startDayHour={9}
                        endDayHour={17}
                    />
                    <Appointments appointmentComponent={appointmentOptions}/>
                    <AppointmentForm />
                </Scheduler>
            </Paper>
            
        </div>
            

    );
}

export default BankerCalender;