import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import { Typography, Box,useMediaQuery, useTheme } from '@mui/material'
import Footer from '../components/FooterSection'
// import Header from '../components/Header'

export default function Terms(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Head>
                <title>Beginnerswebguide | Terms and Conditions </title>
                <meta name='keyword' content='privacy policies for beginnerswebguide, beginners web tips, web development guide for beginners' />

            </Head>
        <Navbar isMobile={isMobile} />
        {/* <Header /> */}
        <Box component='section' px={{xs:2, sm: 3, lg:'16rem', xl:'16rem'}} my={10}>
            <Typography variant='h2' textAlign='left' component='h1'  fontWeight={600}>
            Terms and Conditions of Use
            </Typography>
            <Typography component='p' pt='4rem' >
                Please read these Terms of Use (“Terms”, “Terms of Use”) carefully before using the https://beginnerswebguide.com website (the “Service”) operated by BeginnersWebGuide (“us”, “we”, or “our”).
            </Typography>
            <Typography component='p'>
                By accessing or using the Service you agree to be bound by these Terms. If you disagree with any part of the terms then you may not access the Service.
            </Typography>
            <Typography variant='h5' textAlign='left' component='h2'  fontWeight={600} mt='3rem'>
                Intellectual Property
            </Typography>
            <Typography component='p' pt='1rem' >
             The Service and its original content, features and functionality are and will remain the exclusive property of Healthy Ranking SEO and its licensors.
            </Typography>

            <Typography variant='h5' textAlign='left' component='h2' mt='3rem' fontWeight={600}>
                Links To Other Web Sites
            </Typography>
            <Typography component='p' pt='1rem' >
                Our Service may contain links to third-party web sites or services that are not owned or controlled by BeginnersWebGuide.
            </Typography>
            <Typography component='p'>
                BeginnersWebGuide has no control over, and assumes no responsibility for, the content, privacy policies, or practices of any third party web sites or services. You further acknowledge and agree that BeginnersWebGuide shall not be responsible or liable, directly or indirectly, for any damage or loss caused or alleged to be caused by or in connection with use of or reliance on any such content, goods or services available on or through any such web sites or services.
            </Typography>
            <Typography component='p'>
                We strongly advise you to read the terms and conditions and privacy policies of any third-party web sites or services that you visit.
            </Typography>

            <Typography variant='h5' textAlign='left' component='h2' mt='3rem' fontWeight={600}>
                Termination
            </Typography>
            <Typography component='p' pt='1rem' >
                We may terminate or suspend access to our Service immediately, without prior notice or liability, for any reason whatsoever, including without limitation if you breach the Terms.

                All provisions of the Terms which by their nature should survive termination shall survive termination, including, without limitation, ownership provisions, warranty disclaimers, indemnity and limitations of liability.
            </Typography>

            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Disclaimer
            </Typography>
            <Typography component='p' pt='1rem' >
                Your use of the Service is at your sole risk. The Service is provided on an “AS IS” and “AS AVAILABLE” basis. The Service is provided without warranties of any kind, whether express or implied, including, but not limited to, implied warranties of merchantability, fitness for a particular purpose, non-infringement or course of performance.
            </Typography>

            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Governing Law
            </Typography>
            <Typography component='p' pt='1rem' >
                These Terms shall be governed and construed in accordance with the laws of Canada without regard to its conflict of law provisions.
            </Typography>
            <Typography component='p'>
                Our failure to enforce any right or provision of these Terms will not be considered a waiver of those rights. If any provision of these Terms is held to be invalid or unenforceable by a court, the remaining provisions of these Terms will remain in effect. These Terms constitute the entire agreement between us regarding our Service, and supersede and replace any prior agreements we might have between us regarding the Service.
            </Typography>
            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Changes
            </Typography>
            <Typography component='p' pt='1rem' >
                We reserve the right, at our sole discretion, to modify or replace these Terms at any time. If a revision is material we will try to provide at least 30 days notice prior to any new terms taking effect. What constitutes a material change will be determined at our sole discretion.

                
            </Typography>
            <Typography component='p' >
                By continuing to access or use our Service after those revisions become effective, you agree to be bound by the revised terms. If you do not agree to the new terms, please stop using the Service.
            </Typography>
            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Contact Us
            </Typography>
            <Typography component='p' pt='1rem' >
            If you have any questions about these Terms, please contact us.
            </Typography>
        </Box>
        <Footer />
        </>
    )
}

