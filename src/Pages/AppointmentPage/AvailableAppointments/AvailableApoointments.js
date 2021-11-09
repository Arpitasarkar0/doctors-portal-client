import { Alert, Container, Grid, Typography } from '@mui/material';
import React, { useState } from 'react';
import Bookings from '../Bookings/Bookings';


const bookings = [
    {
        id: 1,
        name: 'Teeth Orthodonics',
        time: '08.00 - 09.00 AM',
        space: 10,
    },
    {
        id: 2,
        name: 'Cosmetic Dentistry',
        time: '0.900 - 10.00 AM',
        space: 10,
    },
    {
        id: 3,
        name: 'Teeth Cleaning',
        time: '09.00 - 10.00 AM',
        space: 10,
    },
    {
        id: 4,
        name: 'Cavity Protection',
        time: '11.00 - 12.00 AM',
        space: 10,
    },
    {
        id: 5,
        name: 'Pediatric Dental',
        time: '06.00 - 07.00 PM',
        space: 10,
    },
    {
        id: 6,
        name: 'Oral Surgery',
        time: '07.00 - 08.00 PM',
        space: 10,
    },
]

const AvailableApoointments = ({ date }) => {
    const [bookingSuccess, setBookingSuccess] = useState(false);

    return (
        <Container>
            <Typography variant="h4" sx={{ color: 'info.main', mb: 3 }} style={{ textAlign: 'center' }}>  Available Appointments on {date.toDateString()}</Typography>
            {bookingSuccess && <Alert severity="success">Appointment booking  Successfully</Alert>}
            <Grid container spacing={2}>
                {
                    bookings.map(booking => <Bookings
                        key={booking.id}
                        booking={booking}
                        date={date}
                        setBookingSuccess={setBookingSuccess}
                    ></Bookings>)
                }

            </Grid>
        </Container>
    );
};

export default AvailableApoointments;