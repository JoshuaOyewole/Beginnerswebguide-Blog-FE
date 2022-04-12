import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../../components/Navbar2'
import SlideShow from '../../components/SlideShow'
import { useMediaQuery, useTheme } from '@mui/material'
import Footer from '../../components/Footer'

export default function JslibrariesFrameworks(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Javascript Libraries/Framworks Category| Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
           <h2>Javascript Libraries/Framworks Category</h2>  
           <Footer /> 
        </div>
    )
}

