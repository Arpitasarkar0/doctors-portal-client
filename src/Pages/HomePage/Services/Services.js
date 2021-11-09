import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from '@mui/material';
import Typography from '@mui/material/Typography';
import Service from '../Service/Service';
import flouride from "../../../images/fluoride.png"
import cavity from "../../../images/cavity.png"
import whitening from "../../../images/whitening.png"

const services = [
    {
        name: "Flouride Treatment",
        description: "the text will not wrap, but instead will truncate with a text overflow ellipsis.",
        img: flouride
    },
    {
        name: "Cavity Filling",
        description: "the text will not wrap, but instead will truncate with a text overflow ellipsis.",
        img: cavity
    },
    {
        name: "Teeth Whitening",
        description: "the text will not wrap, but instead will truncate with a text overflow ellipsis.",
        img: whitening
    }
]


const Services = () => {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <Container sx={{ textAlign: 'center' }}>
                <Typography sx={{ fontWeight: 500, color: 'info.main', m: 5 }} variant="h6" component="div">
                    OUR SERVICES
                </Typography>
                <Typography sx={{ fontWeight: 'bold', m: 2 }} variant="h4" component="div">
                    Service We Provide
                </Typography>
                <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                    {
                        services.map(service => <Service
                            key={service.name}
                            service={service}

                        ></Service>)
                    }
                </Grid>
            </Container>
        </Box>
    );
};

export default Services;