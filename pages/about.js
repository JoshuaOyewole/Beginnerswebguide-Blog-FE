import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import { Typography, Box,useMediaQuery, useTheme } from '@mui/material'
import Footer from '../components/Footer'
import Header from '../components/Header'

export default function About(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Head>
                <title>Beginnerswebguide | About Us </title>
                <meta name='keyword' content='About beginnerswebguide, beginners web tips, web development guide for beginners' />

            </Head>
        <Navbar isMobile={isMobile} />
        <Header />
        <Box component='section' px={{xs:2, sm: 3, lg:'8rem', xl:'16rem'}} my={10}>
            <Typography variant='h3' textAlign='left' component='h2'  fontWeight={600}>
              About Us
            </Typography>
            <Typography component='p' pt='2rem' >
                You have a desire to become a web developer? 
            </Typography>
            <Typography component='p'>
             We'll are here to guide you towards achieving your goals and scaling through any bugs during your projects. Whether you're entering as a complete beginner or with little experience, our articles are designed to guides you.
            </Typography>
            <Typography component='p'>
                Our articles ranges from HTML, CSS, Javascript, Frameworks/libraries, Freelancing tips and lots more. 
            </Typography>
            <Typography component='p'>
                Kindly subscribe to our newsletter inorder to stay updated about any latest articles
            </Typography>


            <Typography variant='h4' textAlign='left' component='h2' mt='2rem' fontWeight={600}>
              Contact Us
            </Typography>
            <Typography component='p' >
                For Collaborations, articles writing and others, kindly contact us at
            </Typography>
            <Typography component='p'  fontWeight='600'>
                beginnerswebguide@gmail.com
            </Typography>
            
        </Box>
        <Footer />
        </>
    )
}

