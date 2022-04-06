import React from 'react'
import { Box,Grid, Link as MUILink } from '@mui/material'
import Image from 'next/image'
import Link  from 'next/link'
import logo from '../public/images/logo.png'

export default function Navbar({isMobile}) {
   
  return (
    <Box 
        component='nav'
        sx={{backgroundColor:'#FFFCFC', color:'#000', py:'1rem'}}
        px={{xs:2, sm: 3, lg:'8rem'}}
    >
        <Grid container>
            <Grid item xs={6} lg={7} >
                <Image src={logo} alt='YouthfulBusiness Logo' width='100rem' height='30rem' />
            </Grid>

            {
            // Disable short description on mobile laving only the img, link and title
            !isMobile
            &&
            <Grid item xs={6} lg={5} component='ul' display='flex' justifyContent='space-between' alignItems='center'>
                <Box component='li'>
                    <Link href="/" passHref>
                         <MUILink color='#555555' underline='hover' >Home</MUILink>
                    </Link>
                </Box>
                <Box component='li'>
                    <Link href="/category" passHref>
                         <MUILink color='#555555' underline='hover'
                         >Category</MUILink>
                    </Link>
                </Box>
                <Box component='li'>    
                    <Link href="/about" passHref>
                         <MUILink  color='#555555' underline='hover'>About us</MUILink>
                    </Link>
                </Box>
                <Box component='li'>
                    <Link href="/contact" passHref>
                         <MUILink color='#555555' underline='hover' >Contact us</MUILink>
                    </Link>
                </Box>
            </Grid>}
            
        </Grid>
        
    </Box>
  )
}



