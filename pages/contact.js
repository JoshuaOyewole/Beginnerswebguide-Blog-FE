import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import {Box, useMediaQuery, useTheme,Typography } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function Contact(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Contact | Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
            </Head>
        <Navbar isMobile={isMobile} />
        <Header />  
        <Box component='section' px={{xs:2, sm: 3, lg:'8rem', xl:'16rem'}} my={10}>
            <Typography variant='h3' textAlign='left' component='h2'  fontWeight={600}>
              Contact us
            </Typography>
        </Box> 
           <Footer /> 
        </div>
    )
}

