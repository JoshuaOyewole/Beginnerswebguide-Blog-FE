import React from 'react'
import {Box, Grid,Typography,Button } from '@mui/material'
import Styles from '../styles/Aside.module.css'
import Link from 'next/link'
import FacebookIcon from '@mui/icons-material/Facebook';
import TwitterIcon from '@mui/icons-material/Twitter';
import YoutubeIcon from '@mui/icons-material/Youtube';

import PopularArticle from './PopularArticle';
import Searchbar from './Searchbar';
import Categories from './Categories';

export default function Aside({post,isMobile}) {
  return (
    <Grid item xs={12} lg={4} component='aside' sx={{py:'2rem',borderRadius:'1rem', boxShadow:'1px 2px 2px #f4f4f4'}}>
        <Box component='section'>
        <Box display= {isMobile ? 'none' : 'block'} component='section' >
            <Typography component='h2' variant='h6' p='0rem 0 1rem 0' color='#061942' fontWeight='600'>Hi, Welcome to BeginnersWebGuide</Typography>
            <Typography component='p'>
                I'm an online entrepreneur, blogging strategist, and online marketing specialist, here to help you start a blog the smart way, grow your audience and blog traffic, and earn money blogging.
            </Typography>
            <Link href="/about">
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
