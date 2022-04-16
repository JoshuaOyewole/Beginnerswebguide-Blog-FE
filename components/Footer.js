import React from 'react'
import { Grid, Typography } from '@mui/material'
import { Box } from '@mui/system'
import Link from 'next/link'
import {Link as MUILink } from '@mui/material';
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
      sx={{ py: "1rem", backgroundColor: "#333", color: "#f4f4f4",}}
      px={{ xs: 3, sm: 4, md: "6rem" }}
      fontSize={{xs:'.8rem'}}>
        <Grid container  justifyContent='space-between' alignItems={'center'} px={{xs:2, sm: 3, lg:'8rem', xl:'16rem'}}>
          <Grid item xs={9} lg={6} fontSize={{sx:'.8rem'}}> All Rights Reserved Copyright &copy; 2022.</Grid>
          <Grid item xs={4} lg={3} >
              <FacebookIcon />
              <TwitterIcon />
              <LinkedInIcon />
          </Grid>
          <Grid item xs={4} lg={3} >
            <Link href="/" passHref>
              <MUILink color='#000' underline='hover' sx={{fontFamily:'Montserrat', textTransform:'uppercase', display:'inline-block', 
                         pr:'2rem', fontWeight:'600'}}>Home</MUILink>
            </Link>
          </Grid>
        </Grid>
                {/* <Grid item xs={12}>  BeginnersWebGuide.com</Grid>  */}
    </Box>
  )
}