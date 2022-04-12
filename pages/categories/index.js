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
            </Head>
        <Navbar isMobile={isMobile} />
        <SlideShow />  
        <Box container sx={{px:'8rem'}}>
        <h2>Welcome to Categories Section</h2>  
           <Box>
           <Link href="/categories/freelancing" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Freelancing</MUILink>
            </Link>
            <Link href="/categories/jslibraries-frameworks" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Js Libraries / Frameworks</MUILink>
            </Link>
            <Link href="/categories/setups" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Setups</MUILink>
            </Link>
            <Link href="/categories/webdevguides" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', display:'block', py:'.5rem', fontWeight:'600'}}>Web Dev Guides</MUILink>
            </Link>
           </Box>
        </Box>
        
        <Footer /> 
        </div>
    )
}

