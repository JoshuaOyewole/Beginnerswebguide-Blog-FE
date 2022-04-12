import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import SlideShow from '../components/SlideShow'
import { useMediaQuery, useTheme } from '@mui/material'
import Footer from '../components/Footer'

export default function About(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Head>
                <title>About orisfina </title>
                <meta name='keyword' content='about orisfina Bootcamp' />

            </Head>
    <Navbar isMobile={isMobile} />
        <SlideShow />  
           <h2>Welcome to About Page</h2>  
        <Footer />
        </>
    )
}

