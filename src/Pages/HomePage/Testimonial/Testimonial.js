import { Container, Grid, Paper, Typography } from '@mui/material';
import { Box } from '@mui/system';
import React from 'react';
import people1 from '../../../images/people-1.png'
import people2 from '../../../images/people-2.png'
import people3 from '../../../images/people-3.png'

const Testimonial = () => {
    return (
        <Box>
            <Container sx={{ mt: 5 }}>
                <Typography variant="h6" style={{ color: "#10F1F1" }}>
                    Testimonial
                </Typography>
                <Typography variant="h4" sx={{ py: 2, pb: 5 }}>
                    What's Our Patients <br />
                    Says
                </Typography>
                <Grid container spacing={2}>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus iure provident temporibus nemo nobis esse perferendis unde ratione magnam! Esse nemo ab sit non iure sequi iusto nam delectus.

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                textAlign: 'left',
                                mt: 5
                            }}>
                                <img style={{ width: '50px' }} src={people1} alt="" />
                                <Box sx={{}}>
                                    <Typography style={{ color: "#10F1F1" }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography>
                                        Califonia
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>


                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus iure provident temporibus nemo nobis esse perferendis unde ratione magnam! Esse nemo ab sit non iure sequi iusto nam delectus.

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-evenly',
                                alignItems: 'center',
                                textAlign: 'left',
                                mt: 5
                            }}>
                                <img style={{ width: '50px' }} src={people2} alt="" />
                                <Box sx={{}}>
                                    <Typography style={{ color: "#10F1F1" }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography>
                                        Califonia
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>


                    </Grid>
                    <Grid item xs={4} sm={4} md={4}>
                        <Paper sx={{ p: 3 }}>
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio doloribus iure provident temporibus nemo nobis esse perferendis unde ratione magnam! Esse nemo ab sit non iure sequi iusto nam delectus.

                            <Box sx={{
                                display: 'flex',
                                justifyContent: 'space-around',
                                alignItems: 'center',
                                textAlign: 'left',
                                mt: 5
                            }}>
                                <img style={{ width: '50px' }} src={people3} alt="" />
                                <Box sx={{}}>
                                    <Typography style={{ color: "#10F1F1" }}>
                                        Winson Herry
                                    </Typography>
                                    <Typography>
                                        Califonia
                                    </Typography>
                                </Box>
                            </Box>
                        </Paper>


                    </Grid>

                </Grid>
            </Container>
        </Box >
    );
};

export default Testimonial;