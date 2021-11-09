import React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import dental from '../../../images/treatment.png'
import { Button, Container, Typography } from '@mui/material';

const DentalCare = () => {
    return (
        <Container sx={{ mt: "2rem" }}>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container spacing={2}>
                    <Grid item xs={12} md={6}>
                        <img style={{ width: '500px', height: '600px' }} xs={{}} src={dental} alt="" />
                    </Grid>
                    <Grid item xs={12} md={6}
                        sx={{
                            display: 'flex',
                            justifyContent: 'flex-start',
                            alignItems: 'center',
                            textAlign: 'left'
                        }}
                    >
                        <Box>
                            <Typography variant="h3">
                                Exceptional Dental <br />
                                Care,on Your Terms
                            </Typography>
                            <Typography sx={{ mx: "auto", my: 5 }}>
                                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Earum reprehenderit minus fuga facere itaque maxime iusto eaque voluptate vero nostrum laboriosam aspernatur cupiditate, a officia dolore vitae velit totam exercitationem illo quibusdam aut consequuntur? Laudantium provident repellat voluptates consectetur nesciunt, rem quod esse dignissimos error eius veniam itaque accusantium voluptatem vero id perspiciatis libero nobis voluptate possimus excepturi ad magnam?
                            </Typography>
                            <Button variant="contained" style={{ marginTop: '25%', backgroundColor: '#5CE7ED' }}>Learn More</Button>
                        </Box>
                    </Grid>

                </Grid>
            </Box>
        </Container >
    );
};

export default DentalCare;