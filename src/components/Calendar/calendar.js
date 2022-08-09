import React from 'react';
import ReactDOM from 'react-dom/client';
import { ViewState, EditingState, IntegratedEditing } from '@devexpress/dx-react-scheduler';
import { Scheduler, WeekView, Appointments, AppointmentForm } from '@devexpress/dx-react-scheduler-material-ui';
import { Grid } from '@mui/material';
const CalenderGrid = () => {

    const [isloading, setLoading] = useState(false);


    return (
        <Grid item xs={8}>
            <h1>Banker Page</h1>
            <Scheduler>
                <ViewState/>
                <EditingState/>
                <IntegratedEditing/>
                <WeekView />
                <Appointments />
                <AppointmentForm />
            </Scheduler>
            <Display 
                clientInfo={clientInfo}
                isLoading={isLoading}
            />
        </Grid>
    );
}

export default CalenderGrid;