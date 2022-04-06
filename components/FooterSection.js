import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import React from 'react'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down('lg'));


    return (
        <Box container
            component="section"
            sx={{ py: "1rem", backgroundColor:'#1565C0', color: "#f4f4f4" }}
            px={{ xs: 3, sm: 4, md: "9rem" }}>
                <Typography fontFamily='Poppins' color='#f4f4f4' display='block' textAlign='center' py={{lg:2}}>
                Developed from Scratch using NextJs, and Strapi CMS by  <Link style={{color:'#f4f4f4'}} href='https://www.joshuaoyewole.com.ng'>  Joshua Oyewole</Link>
                </Typography>
            <Grid container mt={{ xs: '2rem', sm: 4, md: 6, lg: 0}} alignItems='center'>
                <Grid item xs={12} lg={6} display='flex' justifyContent= {isMobile ? "center":"start"} alignItems='center'>
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />

                </Grid>
                <Grid item xs={12} lg={6} display='flex' justifyContent= {isMobile ? "center":"flex-end"} alignItems='center'>
                    
                    <Typography fontFamily='Poppins'>
                    Copyright &copy; 2022, YouthfulBusiness.
                    </Typography>
                </Grid>

            </Grid>    
        </Box>
    )
}