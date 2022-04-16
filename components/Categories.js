import React from 'react'
import {Box, Typography,Link as MUILink } from '@mui/material/';
import Link from 'next/link'

export default function Categories() {
  return (
    <Box component='section' mt={6}>
            <Typography component='h2' variant='h6' p='0rem 0 .5rem 0' color='#061942'fontWeight='600'>Categories</Typography>
            <Box component='ul' pl={0}  > 
            <Box component='li' sx={{my:'0.5rem'}}>
                <Link href='/categories/webdevguides' passHref>
                    <MUILink underline='hover' sx={{fontFamily: 'Poppins', color:'#333'}}>
                    &gt; Web Development Guides
                    </MUILink>
                </Link>
            </Box>
            <Box component='li' sx={{my:'0.5rem'}} >
                <Link href='/categories/jslibraries-frameworks' passHref>
                    <MUILink underline='hover' sx={{fontFamily: 'Poppins', color:'#333'}}>
                    &gt; Javascript libraries / Frameworks
                    </MUILink>
                </Link>
            </Box>
            <Box component='li' sx={{my:'0.5rem'}}>
                <Link href='/categories/freelancing' passHref>
                    <MUILink underline='hover' sx={{fontFamily: 'Poppins', color:'#333'}}>
                    &gt; Freelancing
                    </MUILink>
                </Link>
            </Box>
            <Box component='li' sx={{my:'0.5rem'}} >
                <Link href='/categories/setups' passHref>
                    <MUILink underline='hover' sx={{fontFamily: 'Poppins', color:'#333'}}>
                    &gt; Setups
                    </MUILink>
                </Link>
            </Box>
        </Box>
        </Box>
  )
}

