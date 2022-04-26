import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import { Typography, Box,useMediaQuery, useTheme } from '@mui/material'
import Link from 'next/link'
import Footer from '../components/FooterSection'
// import Header from '../components/Header'

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
        {/* <Header /> */}
        <Box component='section' px={{xs:2, sm: 3, lg:'16rem', xl:'20rem'}} my={10}>
            <Typography variant='h3' textAlign='left' component='h1'  fontWeight={600}>
              About Us
            </Typography>
            <Typography component='p' pt='2rem' >
              BeginnersWebGuide is a personal Tech/SEO blog owned and managed by <Link href='https://www.joshuaoyewole.com.ng'><a>Joshua Oyewole</a></Link> .
            </Typography>
            <Typography component='p'>
                I am a freelancer web developer / Content Creator from the ancient city of Edo state, Nigeria. I have a Higher National Diploma (HND) in Computer Science and I have been a web developer for over 3 years plus with dozens of successfully completed projects. 
            </Typography>
            <Typography component='p'>
                Having thought several students at <Link href='https://www.oci.com.ng'><a>Orisfina Computer Institute (Bootcamp)</a></Link> for years, I have been able to understand the chanlleges faced by beginners who are in their early stage of career.
            </Typography>
            <Typography component='p'>
                Experiences gained at <Link href='https://www.oci.com.ng'><a>Orisfina Computer Institute (Bootcamp)</a></Link>  prompted my desire into starting BeginnersWebGuide with the sole aim of sharing contents on chanlleges beginners developers are facing and also explore intermediate / advanced topics. 
            </Typography>
            <Typography component='p'>
                The major aim of BeginnersWebGuide is to bridge the gap between beginners and the ability to find simplified contents. Our contents are well researched and written by experienced writers for your understanding.
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

