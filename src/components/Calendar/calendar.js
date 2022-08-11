import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Grid } from '@mui/material';
import { useState } from 'react';
const CalenderGrid = (props) => {

    const [isLoading, setLoading] = useState(false);
    const saveAppointment= (data) =>{
        console.log(data)
    }

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