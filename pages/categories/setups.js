import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../../components/Navbar2'
import SlideShow from '../../components/SlideShow'
import { useMediaQuery, useTheme } from '@mui/material'
import Footer from '../../components/Footer'

export default function Setups(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Setups Category | Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
                <link
                rel="stylesheet"
                href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"/>

            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
           <h2>Setups  Category</h2>  
           <Footer /> 
        </div>
    )
}

