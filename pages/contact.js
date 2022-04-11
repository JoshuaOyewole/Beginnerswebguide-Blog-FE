import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import SlideShow from '../components/SlideShow'
import { useMediaQuery, useTheme } from '@mui/material'
import Footer from '../components/Footer'

export default function Contact(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Contact | Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@400;600;800&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
           <h2>Contact Page</h2>  
           <Footer /> 
        </div>
    )
}

