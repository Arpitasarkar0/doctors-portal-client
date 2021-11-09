import React from 'react';
import Navigation from '../../HomePage/Sheard/Navigation/Navigation';
import AppointmentHeader from '../AppointmeentHeader/AppointmentHeader';
import AvailableApoointments from '../AvailableAppointments/AvailableApoointments';

const Appointment = () => {
    const [date, setDate] = React.useState(new Date());
    return (
        <div>
            <Navigation></Navigation>
            <AppointmentHeader date={date} setDate={setDate}></AppointmentHeader>
            <AvailableApoointments date={date}></AvailableApoointments>
        </div>
    );
};

export default Appointment;