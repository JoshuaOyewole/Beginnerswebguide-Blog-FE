import React from 'react'
import {Box, Grid,Typography,Button } from '@mui/material'
import Link from 'next/link'
import PopularArticle from './PopularArticle';
import Searchbar from './Searchbar';
import Categories from './Categories';

export default function Aside({isMobile}) {
  return (
    <Grid item xs={12} lg={4} component='aside' sx={{py:'2rem',borderRadius:'1rem', boxShadow:'1px 2px 2px #f4f4f4'}}>
        <Box component='section'>
        <Box display= {isMobile ? 'none' : 'block'} component='section' >
            <Typography component='h2' variant='h6' p='0rem 0 0rem 0' color='#061942' fontWeight='600'>Hi, Welcome to BeginnersWebGuide</Typography>
            <Typography component='p'>
                BeginnersWebGuide is a personal Tech/SEO blog owned and managed by <Link href='https://www.joshuaoyewole.com.ng'><a>Joshua Oyewole</a></Link> .
            </Typography>
            <Typography component='p'>
                The major aim of BeginnersWebGuide is to bridge the gap between beginners and the ability to find simplified contents. Our contents are well researched and written by experienced writers for your understanding.
            </Typography>
            <Link href="/about" passHref>
                <Button variant="contained" sx={{mt:3, width:'100%'}}>
                    Read More..
                </Button>
            </Link>
        </Box>

            {/* <Box mt={5}>
            <Link href="/#twitter" >
                <a className={Styles.followBtn}><TwitterIcon color='primary' sx={{pr:3}} /> Follow us Twitter</a>
            </Link>
            <Link href="/#youtube" >
                <a className={Styles.followBtn}><YoutubeIcon className={Styles.shareLinks} sx={{pr:3}}color='error'/> Follow us Youtube</a>
            </Link>
            <Link href="/#facebook" >
                <a className={Styles.followBtn}><FacebookIcon sx={{pr:3}}color='primary' /> Follow us Facebook</a>
            </Link>
            </Box> */}

           
        </Box>

        {/* Popular Articles Section */}
        <PopularArticle />
        <Searchbar />

        {/* Categories Section */}
        <Categories />
    </Grid>
  )
}
