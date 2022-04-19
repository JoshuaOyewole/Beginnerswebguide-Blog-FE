import React from 'react'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import { Typography, Box,useMediaQuery, useTheme } from '@mui/material'
import Footer from '../components/FooterSection'
// import Header from '../components/Header'

export default function Privacy(){
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

    return (
        <>
            <Head>
                <title>Beginnerswebguide | Privacy Policies </title>
                <meta name='keyword' content='privacy policies for beginnerswebguide, beginners web tips, web development guide for beginners' />

            </Head>
        <Navbar isMobile={isMobile} />
        {/* <Header /> */}
        <Box component='section' px={{xs:2, sm: 3, lg:'16rem', xl:'16rem'}} my={10}>
            <Typography variant='h2' textAlign='left' component='h1'  fontWeight={600}>
                Privacy Policies
            </Typography>
            <Typography component='p' pt='4rem' >
                BeginnersWebGuide (“us”, “we”, or “our”) operates the BeginnersWebGuide website (the “Service”).
            </Typography>
            <Typography component='p'>
                This page informs you of our policies regarding the collection, use and disclosure of Personal Information when you use our Service.
            </Typography>
            <Typography component='p'>
                We will not use or share your information with anyone except as described in this Privacy Policy.
            </Typography>
            <Typography component='p'>
                We use your Personal Information for providing and improving the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible at https://www.beginnerswebguide.com
            </Typography>
            <Typography variant='h5' textAlign='left' component='h2'  fontWeight={600} mt='3rem'>
                Information Collection And Use
            </Typography>
            <Typography component='p' pt='1rem' >
                While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you. Personally identifiable information (“Personal Information”) may include, but is not limited to:
            </Typography>
            <ol>
                <li>Name</li>
                <li>Email address</li>
            </ol>

            <Typography variant='h5' textAlign='left' component='h2' mt='3rem' fontWeight={600}>
                Log Data
            </Typography>
            <Typography component='p' pt='1rem' >
                We collect information that your browser sends whenever you visit our Service (“Log Data”). This Log Data may include information such as your computer’s Internet Protocol (“IP”) address, browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages and other statistics.
            </Typography>

            <Typography variant='h5' textAlign='left' component='h2' mt='3rem' fontWeight={600}>
                Cookies
            </Typography>
            <Typography component='p' pt='1rem' >
                Cookies are files with small amount of data, which may include an anonymous unique identifier. Cookies are sent to your browser from a web site and stored on your computer’s hard drive.

                We use “cookies” to collect information. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service.
            </Typography>

            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Service Providers
            </Typography>
            <Typography component='p' pt='1rem' >
                We may employ third party companies and individuals to facilitate our Service, to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used.

                These third parties have access to your Personal Information only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose.
            </Typography>

            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Security
            </Typography>
            <Typography component='p' pt='1rem' >
                The security of your Personal Information is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Information, we cannot guarantee its absolute security.
            </Typography>
            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Links To Other Sites
            </Typography>
            <Typography component='p' pt='1rem' >
                Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party’s site. We strongly advise you to review the Privacy Policy of every site you visit.

                We have no control over, and assume no responsibility for the content, privacy policies or practices of any third party sites or services.
            </Typography>
            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Compliance With Laws
            </Typography>
            <Typography component='p' pt='1rem' >
                We will disclose your Personal Information where required to do so by law or subpoena.
            </Typography>
            <Typography variant='h5' mt='3rem' textAlign='left' component='h2'  fontWeight={600}>
                Changes To This Privacy Policy
            </Typography>
            <Typography component='p' pt='1rem' >
                We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page.
            </Typography>
            <Typography component='p'>
                You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page.
            </Typography>
        </Box>
        <Footer />
        </>
    )
}

