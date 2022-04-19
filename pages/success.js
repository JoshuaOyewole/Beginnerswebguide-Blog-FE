import Link from 'next/link'
import { Box } from '@mui/material'
import Head from 'next/dist/shared/lib/head'
import Navbar from '../components/Navbar2'
import Footer from '../components/FooterSection'



export default function success() {
  // const theme = useTheme();
  //   const isMobile = useMediaQuery(theme.breakpoints.down("md"));


  return (
    <div>
    <>
        <Head>
          <title>Beginnerswebguide | About Us </title>
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
