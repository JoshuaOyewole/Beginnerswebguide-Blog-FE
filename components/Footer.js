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
      sx={{ py: "1rem", backgroundColor: "#333", color: "#f4f4f4", fontFamily:'montserrat' }}
      px={{ xs: 3, sm: 4, md: "6rem" }}>
        <Grid container >
                <Grid item xs={12} lg={6}  >
                    <FacebookIcon />
                    <TwitterIcon />
                    <LinkedInIcon />
                </Grid>
                <Grid item xs={12} lg={6} display='flex' justifyContent='flex-end'>
                    All Rights Reserved &copy; 2022.  BeginnersWebGuide.com
                </Grid>

            </Grid>
    </Box>
  )
}