import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import {Box, useMediaQuery, useTheme,Typography } from '@mui/material'
import Footer from '../components/FooterSection'
import ContactForm from '../components/ContactForm'
// import Header from '../components/Header'

export default function Contact(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Contact | Beginnerwebguide </title>
                <meta name='keyword' content='Joshua Oyewole, contact beginnerswebguide' />
            </Head>
        <Navbar isMobile={isMobile} />
        {/* <Header />   */}
        <Box component='section' px={{xs:2, sm: 3, lg:'16rem', xl:'20rem'}} my={10}>
            <Typography variant='h3' textAlign='left' component='h2'  fontWeight={600}>
              Contact us
            </Typography>
            <Typography component='p' pt='3rem' >
                To get in touch with me about beginnerswebguide.com regarding concerns, complaints, suggestions, or opportunities, please fill out the contact form below.
            </Typography>
            <ContactForm />
            <Typography component='p'>
                I will reply to you as quickly as possible.
            </Typography>
            <Typography component='p'>
                 Thank you,
            </Typography>
            <Typography component='p' fontWeight={600}>
                 Joshua Oyewole 
            </Typography>
            (Lead Content Creator @ BeginnersWebGuide)
           
        </Box> 
        
           <Footer /> 
        </div>
    )
}

