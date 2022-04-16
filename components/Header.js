import React from 'react'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import {Box, Grid, Link as MUILink, useMediaQuery, useTheme} from '@mui/material'
import Link from 'next/link'


export default function Header2() {
    const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

const customHeaderJContent = isMobile ? 'center' : 'space-between'
const customPr = isMobile ? '0rem' : '4rem;'

  return (
    <Box component='header' display='flex' id='#category' sx={{backgroundColor:'#1976D2'}} px={{lg:'6rem'}} fontFamily='Poppins' mt={{xs:'1rem'}} py={{xs:'.7rem'}}>
    <Grid item xs={6} lg={5} component='ul' display='flex' justifyContent={customHeaderJContent} sx={{flexWrap:'wrap'}} alignItems='center'
    >
    <Box component='li' display='flex' sx={{pr:`${customPr}`, fontFamily:'Poppins', fontWeight: '600'}}>
        Quicklinks <ArrowRightIcon />
    </Box>
      <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>
        <Link href="/categories/jslibraries-frameworks" passHref>
            <MUILink color='#edecec' underline='hover' >Frameworks/Libraries</MUILink>
        </Link>
      </Box>  
            <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>
                <Link href="/categories/freelancing" passHref>
                     <MUILink color='#edecec' underline='hover'
                     >Freelancing</MUILink>
                </Link>
            </Box>
            <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>    
                <Link href="/categories/setups" passHref>
                     <MUILink  color='#edecec' underline='hover'>Setups</MUILink>
                </Link>
            </Box>
            <Box component='li' sx={{fontFamily:'Poppins'}}>
                <Link href="/categories/webdevguides" passHref>
                     <MUILink color='#edecec' underline='hover' >Web Development guides</MUILink>
                </Link>
            </Box>
        </Grid>
</Box>
  )
}
