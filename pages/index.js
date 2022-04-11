import React from 'react'
import {Grid,useMediaQuery, useTheme } from '@mui/material'
import Head from 'next/dist/shared/lib/head'
import Footer from '../components/Footer'
import SlideShow from '../components/SlideShow'
import Main from '../components/Main'
import Aside from '../components/Aside'
import NavBar from '../components/Navbar2'

export default function Index({posts}) {
    const theme = useTheme();
    const isMobile = useMediaQuery(theme.breakpoints.down("md"));

  return (
    <>
        <Head>
            <title>Beginnerswebguide</title>
            <meta name='keyword' content='YouthfulBusiness' />
            <link rel="preconnect" href="https://fonts.googleapis.com" />
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
            <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@400;600&family=Mulish:wght@400;700;800;900&family=Poppins:wght@400;600;800&family=Roboto:wght@400;700;900&display=swap" rel="stylesheet" />
            <link rel="stylesheet" href="https://fonts.googleapis.com/icon?family=Material+Icons" />
        </Head>
        
        <NavBar />
        <SlideShow />  
          <Grid container px={{xs:2, sm: 3, lg:'8rem'}} columnSpacing={8} my={10}>
            <Main posts={posts} />
            <Aside isMobile={isMobile}/>
        </Grid>
       <Footer /> 
    </>
  )
}

// This function gets called at build time
export async function getStaticProps() {
  // Called my strapi API endpoint to get posts
  const res = await fetch('http://localhost:1337/api/posts')
  const Blogposts = await res.json()

  // By returning { props: { posts } }, the Blog component will receive `posts` as a prop at build time
  return {
    props: {
      posts:Blogposts.data,
    },
  }
}