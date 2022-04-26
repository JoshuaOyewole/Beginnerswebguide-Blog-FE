import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../../components/Navbar2'
import { useMediaQuery, useTheme } from '@mui/material'
import Footer from '../../components/Footer'
import Header from '../../components/Header'

export default function Setups(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Setups Category | Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
            </Head>
        <Navbar isMobile={isMobile} />
        <Header />  
           <h1>Setups  Category</h1>  
           <Footer /> 
        </div>
    )
}

