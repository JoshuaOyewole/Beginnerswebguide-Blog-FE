import React from 'react'
import {Box, Typography,Link as MUILink } from '@mui/material/';
import Link from 'next/link'

export default function Categories() {
  return (
    <Box component='section' mt={6}>
            <Typography component='h2' variant='h6' p='0rem 0 .5rem 0' color='#061942'fontWeight='bold'>Categories</Typography>
            <Box component='ul' pl={0}  > 
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins', color:'primary'}}>
                    Web Development Guides
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins', color:'primary'}}>
                        Javascript libraries / Frameworks
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins', color:'primary'}}>
                    Freelancing
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins', color:'primary'}}>
                        Setups
                    </MUILink>
                </Link>
            </Box>
        </Box>
        </Box>
  )
}

