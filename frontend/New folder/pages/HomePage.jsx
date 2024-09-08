import React from 'react';
import { Link } from 'react-router-dom';
import { AppBar, Toolbar, Grid, Typography, Button, IconButton, Box, Container } from '@mui/material';
import { Brightness4 } from '@mui/icons-material';

const HomePage = () => {
    return (
        <>
            {/* Header */}
            <AppBar position="static">
                <Toolbar>
                    <Typography variant="h6" component={Link} to="/" style={{ textDecoration: 'none', color: 'white' }}>
                        Digital Yatris
                    </Typography>

                    <Box sx={{ flexGrow: 1 }} />

                    <Box sx={{ display: { xs: 'none', md: 'flex' }, alignItems: 'center' }}>
                        <Button color="inherit" component={Link} to="/guide">Guide Services</Button>
                        <Button color="inherit" component={Link} to="/discover">Destinations</Button>
                    </Box>

                    <IconButton edge="end" color="inherit" aria-label="mode">
                        <Brightness4 />
                    </IconButton>
                </Toolbar>
            </AppBar>

            <main>
                {/* Home Section */}
                <Box
                    sx={{
                        height: '100vh',
                        backgroundImage: 'url(/assets/img/home1.jpg)',
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                        color: '#fff',
                        textAlign: 'center',
                    }}
                >
                    <Container>
                        <Typography variant="h3" component="h1" gutterBottom>
                            Explore The <br /> Best <b>Beautiful</b> <br /> Places of <b>Nepal</b>
                        </Typography>
                        <Button
                            variant="contained"
                            color="primary"
                            size="large"
                            component={Link}
                            to="/explore"
                        >
                            Explore
                        </Button>
                    </Container>
                </Box>

                {/* Guide Section */}
                <Box sx={{ py: 8 }}>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={6}>
                                <Typography variant="h4" component="h2">
                                    <b>HIRE</b> LOCAL GUIDES
                                </Typography>
                                <Typography variant="body1" sx={{ mt: 2 }}>
                                    Embark on an unforgettable adventure with our local guides, discovering hidden gems and navigating with ease.
                                    Let us handle the details – hire your expert guide today.
                                </Typography>
                                <Button
                                    variant="outlined"
                                    size="large"
                                    sx={{ mt: 3 }}
                                    component={Link}
                                    to="/hire"
                                >
                                    Hire Now
                                </Button>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Box
                                    sx={{
                                        display: 'flex',
                                        justifyContent: 'space-around',
                                        flexWrap: 'wrap',
                                    }}
                                >
                                    <img src="assets/img/about1.jpg" alt="Guide" style={{ width: '45%' }} />
                                    <img src="assets/img/about2.jpg" alt="Guide" style={{ width: '45%' }} />
                                </Box>
                            </Grid>
                        </Grid>
                    </Container>
                </Box>

                {/* Discover Section */}
                <Box sx={{ py: 8, backgroundColor: '#f5f5f5' }}>
                    <Container>
                        <Typography variant="h4" component="h2" align="center" gutterBottom>
                            Discover the most attractive places
                        </Typography>

                        <Grid container spacing={4}>
                            {[
                                { img: 'discover1.jpg', title: 'Annapurna Region', tours: 'Tours Available' },
                                { img: 'discover2.jpg', title: 'Terai Region', tours: 'Tours Available' },
                                { img: 'discover3.jpg', title: 'Hvar', tours: '18 tours available' },
                                { img: 'discover4.jpg', title: 'Mt. Everest Region', tours: '32 tours available' },
                            ].map((place, index) => (
                                <Grid item xs={12} sm={6} md={3} key={index}>
                                    <Box
                                        sx={{
                                            backgroundImage: `url(/assets/img/${place.img})`,
                                            backgroundSize: 'cover',
                                            height: '300px',
                                            display: 'flex',
                                            flexDirection: 'column',
                                            justifyContent: 'flex-end',
                                            p: 2,
                                            color: '#fff',
                                            borderRadius: '10px',
                                            transition: 'transform 0.3s',
                                            '&:hover': { transform: 'scale(1.05)' },
                                        }}
                                    >
                                        <Typography variant="h5">{place.title}</Typography>
                                        <Typography variant="body2">{place.tours}</Typography>
                                    </Box>
                                </Grid>
                            ))}
                        </Grid>
                    </Container>
                </Box>

                {/* Footer */}
                <Box component="footer" sx={{ py: 6, backgroundColor: '#212121', color: '#fff' }}>
                    <Container>
                        <Grid container spacing={4}>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6">Digital Yatris</Typography>
                                <Typography variant="body2">
                                    Travel you choose the destination, we offer you the experience.
                                </Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6">Coordination</Typography>
                                <Typography variant="body2">Team Yatris: Sandesh, Umanga, Aakash, Bishal</Typography>
                            </Grid>
                            <Grid item xs={12} md={4}>
                                <Typography variant="h6">Support</Typography>
                                <Typography variant="body2">teamyeatris001@gmail.com</Typography>
                                <Typography variant="body2">Mid Banaswor, Kathmandu</Typography>
                                <Typography variant="body2">+977 9800000000</Typography>
                            </Grid>
                        </Grid>
                        <Typography variant="body2" align="center" sx={{ mt: 4 }}>
                            &#169; 2024 Digital Yatris. All rights reserved.
                        </Typography>
                    </Container>
                </Box>
            </main>
        </>
    );
};

export default HomePage;
