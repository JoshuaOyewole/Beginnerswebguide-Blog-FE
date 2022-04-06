import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar'
import SlideShow from '../components/SlideShow'
import { useMediaQuery, useTheme } from '@mui/material'

const contact = () => {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>About orisfina </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
           <h2>Welcome to About Page</h2>   
        </div>
    )
}

export default contact
