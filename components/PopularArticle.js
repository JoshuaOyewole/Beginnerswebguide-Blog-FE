import React from 'react'
import { Box,Typography, Link as MUILink } from '@mui/material'
import Link from 'next/link'


export default function PopularArticle() {
  return (
    <Box component='section' mt={6}>
        <Typography component='h2' variant='h6' p='0rem 0 .5rem 0' color='#061942' fontWeight='bold'>
            Popular Articles
        </Typography>
        <Box component='ul' pl={0}  > 
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins'}}>
                    7 Things You MUST Do Before You Launch Your Blog
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins'}}>
                    10+ Best WordPress Plugins for Blogs in 2022 (All FREE)
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins'}}>
                    100+ Profitable Blog Niche Ideas That Make Money in 2022
                    </MUILink>
                </Link>
            </Box>
            <Box component='li'>
                <Link href='#'>
                    <MUILink passRef underline='hover' sx={{fontFamily: 'Poppins'}}>
                    How to Start a WordPress Blog on Bluehost in 2022: Step-by-Step Tutorial

                    </MUILink>
                </Link>
            </Box>
        </Box>
    </Box>
  )
}
