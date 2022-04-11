import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar2'
import SlideShow from '../../components/SlideShow'
import { useMediaQuery, useTheme,Box, Link as MUILink } from '@mui/material'
import Footer from '../../components/Footer'

export default function Index(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Categories| Beginnerwebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
                <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Poppins:wght@400;600;800&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />

            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
        <Box container sx={{px:'8rem'}}>
        <h2>Welcome to Categories Section</h2>  
           <Box>
           <Link href="/categories/freelancing" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Freelancing</MUILink>
            </Link>
            <Link href="/categories/jslibraries-frameworks" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Js Libraries / Frameworks</MUILink>
            </Link>
            <Link href="/categories/setups" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Setups</MUILink>
            </Link>
            <Link href="/categories/webdevguides" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Web Dev Guides</MUILink>
            </Link>
           </Box>
        </Box>
        
        <Footer /> 
        </div>
    )
}

