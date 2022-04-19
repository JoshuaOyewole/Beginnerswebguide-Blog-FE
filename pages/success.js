import React from 'react'
import Link from 'next/link'
import Head from 'next/head'
import Navbar from '../components/Navbar2'
import Footer from '../components/FooterSection'
import {Box,useMediaQuery, useTheme } from '@mui/material'


export default function Success() {
  const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <div>
    <>
        <Head>
          <title>Beginnerswebguide | Success </title>
          <meta name='keyword' content='About beginnerswebguide, beginners web tips, web development guide for beginners' />
        </Head>
    </>
    <Navbar isMobile={isMobile} />
      <Box component='section' px={{xs:2, sm: 3, lg:'16rem', xl:'20rem'}} my={10}>
 
        success

        <p>Thanks for contacting us. We will get back to you as soon as possible</p>

        <Link href='/'><a>Return Home</a></Link>
      </Box>
      <Footer />
    </div>
  )
}
