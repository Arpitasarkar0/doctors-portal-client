import { Grid } from '@mui/material';
import * as React from 'react'
import Appointments from '../Pages/DashboardPage/Appointments/Appointments';
import Calender from '../Pages/Shareds/Calender/Calender';

const DashboardHome = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <Grid container spacing={2}>
            <Grid item xs={12} sm={5}>
                <Calender
                    date={date}
                    setDate={setDate}
                ></Calender>
            </Grid>
            <Grid item xs={12} sm={7}>
                <Appointments date={date}></Appointments>
            </Grid>

        </Grid>
    );
};

export default DashboardHome;