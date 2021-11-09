import React from 'react';
import AppointmentBanner from '../AppointmentBanner/AppointmentBanner';
import Banner from '../Banner/Banner';
import ContactUs from '../ContactUs/ContactUs';
import DentalCare from '../DentalCare/DentalCare';
import Services from '../Services/Services';
import Navigation from '../Sheard/Navigation/Navigation';
import Testimonial from '../Testimonial/Testimonial';


const Home = () => {
    return (
        <div>

            <Navigation></Navigation>
            <Banner></Banner>
            <Services></Services>
            <DentalCare></DentalCare>
            <AppointmentBanner></AppointmentBanner>
            <Testimonial></Testimonial>
            <ContactUs></ContactUs>

        </div>
    );
};

export default Home;