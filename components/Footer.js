import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import { Link } from '@mui/material';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import LinkedInIcon from '@mui/icons-material/LinkedIn';

export default function FooterSection() {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.up('lg'));
    let order = isMobile ? "5" : "1";
  return (
    <Box container
      component="footer"
      sx={{ py: "4rem", backgroundColor: "#333", color: "#f4f4f4" }}
      px={{ xs: 3, sm: 4, md: "6rem" }}>

        <Grid container SpacingColumn= {6} SpacingRow= {5}>
            <Grid item xs={6} lg={2.5} >
             <Typography display="block" variant="h6" component="h6" color='#fff' pb='1rem'>
                 Products
             </Typography>
             <Link href="/Apis" underline="none" color="#bbb8b8">
                 <Typography display="block">AI APIs</Typography>
             </Link>
             <Link href="/Detect" underline="none" color="#d7d5d5">
                <Typography display="block">Emotion Detection</Typography> 
             </Link>
             <Link href="/drows" underline="none" color="#bbb8b8">
                 <Typography display="block">Drowsiness Detection</Typography>
             </Link>
             <Link href="/chat" underline="none" color="#bbb8b8">
                 <Typography display="block">Chat bots</Typography>
             </Link>
             <Link href="/Face" underline="none" color="#bbb8b8">
             <Typography display="block">Face recognition</Typography>
             </Link>
             <Link href="/sentiment" underline="none" color="#bbb8b8">
             <Typography display="block">Sentiment analysis</Typography>
             </Link>
            </Grid>
            <Grid item xs={6} lg={2} pl={{ xs: '2rem', sm: 4, md: 1 }}>
             <Typography variant="h6" component="h6" color='#fff' pb='1rem'>
                 Company
             </Typography>
             <Link href="/About" underline="none" color="#bbb8b8">
                 <Typography display="block">About</Typography>
             </Link>
             <Link href="/Service" underline="none" color="#bbb8b8">
                <Typography display="block">Services</Typography> 
             </Link>
             <Link href="/Internship" underline="none" color="#bbb8b8">
                 <Typography display="block">Internship</Typography>
             </Link>
             <Link href="/Contact" underline="none" color="#bbb8b8">
                 <Typography display="block">Contact</Typography>
             </Link>
            </Grid>
            <Grid item xs={6} lg={2} mt={{xs:6, lg:0}}>
            <Typography variant="h6" component="h6" color='#fff' pb='1rem'>
                Resources
            </Typography>
            <Link href="/Blog" underline="none" color="#bbb8b8">
                 <Typography display="block">Blog</Typography>
             </Link>
             <Link href="/Customer" underline="none" color="#bbb8b8">
                <Typography display="block">Customers</Typography> 
             </Link>
            </Grid>
            <Grid item xs={6} lg={2} mt={{xs:6, lg:0}} pl={{ xs: '2rem', sm: 4, md: 1 }}>
             <Typography variant="h6" component="h6" color='#fff' pb='1rem'>
                 Legal
             </Typography>
             <Link href="/Terms" underline="none" color="#bbb8b8">
                 <Typography display="block">Terms</Typography>
             </Link>
             <Link href="/Privacy" underline="none" color="#bbb8b8">
                <Typography display="block">Privacy</Typography> 
             </Link>
            </Grid>
            <Grid item xs={12} lg={3.5} mt={{xs:6, lg:0}}>
        <Typography display="block">256 Chapman Road STE, TOJA Southern View Estate,
        105-4, Newark. Newcastle Delaware, USA.</Typography>
        <Typography display="block">Lekki - Lagos, Nigeria.</Typography>
        <Typography display="block">contact@zummitafrica.com</Typography>
         <Typography>+234 816 3816 789</Typography>
        </Grid>
        </Grid>

        <Grid container mt={{ xs: '2rem', sm: 4, md: 6, lg: 4}} >
                <Grid item xs={12} lg={6}  >
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />

                </Grid>
                <Grid item xs={12} lg={6} display='flex' justifyContent='flex-end'>
                    2022, Zummit Africa
                </Grid>

            </Grid>
    </Box>
  )
}