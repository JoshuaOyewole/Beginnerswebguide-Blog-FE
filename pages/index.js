import React from 'react'
import {Grid,useMediaQuery, useTheme } from '@mui/material'
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Head from 'next/head'
import Footer from '../components/FooterSection'
import SlideShow from '../components/SlideShow'
import Main from '../components/Main'
import Aside from '../components/Aside'
import NavBar from '../components/Navbar2'



export default function Index({posts}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));
    const font = createTheme({
      typography: {
        fontFamily: "'Poppins', sans-serif",
        fontSize: 16
      },
    });
    
  return (
    <ThemeProvider theme={font}>
        <Head>
            <title>Beginnerswebguide</title>
            <meta name='keyword' content='web dev guide' />
            <meta name="ahrefs-site-verification" content="012cc9c677088d4b383ea6c510b2e249ee43807120e16e3736beedc5d60d367c"></meta>
        </Head>
        
        <NavBar />
        <SlideShow />  
          <Grid container px={{xs:2, sm: 3, lg:'8rem', xl:'16rem'}} columnSpacing={8} my={10}>
            <Main posts={posts} />
            <Aside isMobile={isMobile}/>
        </Grid>
       <Footer /> 
    </ThemeProvider>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Called my strapi API endpoint to get posts
  // const res = await fetch(`${process.env.API_URL}/api/articles`);
  const res = await fetch(`https://beginnerswebguide.herokuapp.com/api/articles`);

  const Blogposts = await res.json();

  // By returning { props: { posts } }, the Blog component will receive `posts` as a prop at build time
  return {
    props: {
      posts:Blogposts.data
    },
  }
}