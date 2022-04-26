import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Link from 'next/link'
import Navbar from '../../components/Navbar2'
import { Typography, useMediaQuery, useTheme,Box, Link as MUILink } from '@mui/material'
import Footer from '../../components/FooterSection'
// import Header from '../../components/Header'

export default function Index(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <div>
            <Head>
                <title>Categories| Beginnerswebguide </title>
                <meta name='keyword' content='about orisfina Bootcamp' />
            </Head>
        <Navbar isMobile={isMobile} />
        {/* <Header/>   */}
        <Box component='section' px={{xs:2, sm: 3, lg:'8rem', xl:'16rem'}} my={10}>
            <Typography variant='h3' textAlign='left' component='h1'  fontWeight={600}>
              Categories
            </Typography>
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

