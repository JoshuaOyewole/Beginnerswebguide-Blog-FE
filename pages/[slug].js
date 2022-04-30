import React from 'react'
import {Box, Grid, Link as MUILink, Typography, Button} from '@mui/material'
import Link from 'next/link'
import Head from 'next/dist/shared/lib/head'
import Image from 'next/image'
import NavBar from '../components/Navbar2'
import MarkdownIt from 'markdown-it';
import promoImg from '../public/images/complete-freelancing-bundle-overview.png'
import FooterSection from '../components/FooterSection'
import BlogPost from '../components/Card'
// import Header from '../components/Header'

export default function Post({post}) {
const md = new MarkdownIt();
const htmlContent = md.render(post.attributes.content);

  return (
    <>
    <Head>
                <title>{post.attributes.metaTitle} | beginnerswebguide.com</title>
                <meta name="description" content={post.attributes.metaDescription}/>
                <meta name='keyword' content={post.attributes.keyword} />
            </Head>
      <NavBar />
      {/* <Header /> */}
          <Box component='article' px={{xs:1, sm: 3, lg:'8rem'}} width={{xs:'97%', sm:'95%', lg:'70%', xl:'70%'}}  m={{lg:'4rem auto', xs:'4rem auto'}} fontFamily='Poppins' lineHeight={1.8}>
            <Typography variant='h4' textAlign='left' component='h1' fontFamily='Poppins' fontWeight={700}>
              {post.attributes.title}
            </Typography>
            {/* bg=D33A2C */}
            <Box backgroundColor='#f6f6f6' color='#333' p={{xs:1, lg:'.6rem 1rem '}} mt={{xs:1, lg:2}} mb={{xs:5, md:6}} display={{xs:'block', lg:'inline-block'}}>
              <span>July 9, 2021</span>
              <span> by Joshua Oyewole</span> 
            </Box>
            <Box 
              fontSize={{lg:'1.125rem'}}
              color='#222222'
              component='section'  
              dangerouslySetInnerHTML={{__html: htmlContent}} 
            />
          </Box>
        <Grid container p={{xs: '2rem 1rem', lg:'4rem 10rem'}} mt={{lg:10}} backgroundColor='#D33A2C' color='#f3f3f3'>
            <Grid item lg={6} xs={12}>
                <Image
                  src={promoImg}
                  alt='Free ebook guide on how to start web development career from scratch'
                  />
            </Grid>
            <Grid item lg={6} xs={12} fontFamily='Poppins' textAlign='center'>
                <Typography variant='h4'   component='h2'  fontWeight='600'>Everything You Need To Master Freelancing</Typography>
                <Typography fontFamily='Poppins' pt={{xs:'1rem', lg:2}}>
                Use coupon STARTFREELANCING for 20% off The Complete Freelancing Bundle
                </Typography>
                <Link href='/' passHref>
                <Button variant='contained' size='large' sx={{fontFamily:'Poppins', marginTop:2}}>
                    Join 500+ students FREE
                </Button>
                </Link>
                
            </Grid>
        </Grid>
        <Box component='section' backgroundColor='f3f3f3' color='#333' p={{xs:'1rem', sm: '1.5rem 4rem', lg:'4rem 10rem'}} fontFamily='Poppins'>
        <Typography variant='h6' textAlign='center' textTransform='uppercase' component='h4'  fontWeight='600' mb={2}>Checkout :</Typography>
        <Grid item xs={6} lg={5} component='ul' display='flex' justifyContent='space-between' flexDirection='column' alignItems='center'>
                <Box component='li' sx={{pb:'1rem'}}>
                    <Link href="/" passHref>
                         <MUILink color='#555555' underline='hover'
                          >Best Web Development Courses 2022</MUILink>
                    </Link>
                </Box>
                <Box component='li'  sx={{pb:'1rem'}}>
                    <Link href="/category" passHref>
                         <MUILink color='#555555' underline='hover'
                         >Best Coding Bootcamps in 2022</MUILink>
                    </Link>
                </Box>
                <Box component='li'  sx={{pb:'1rem'}}>    
                    <Link href="/about" passHref>
                         <MUILink  color='#555555' underline='hover'>The Freelancer Podcast</MUILink>
                    </Link>
                </Box>
            </Grid>
        </Box>
        <Grid item xs={12} lg={8} component='main' sx={{py:'0rem'}}  m={{xs:'3rem auto 5rem auto', lg:'2rem 0 8rem 0'}} >
      <Typography component='h2' variant='h4' mb='2rem' color='#061942' fontWeight='bold' textAlign='center'>Trending Topics</Typography>
      <Grid container columnSpacing={6} px={{xs: '1rem', lg:'18rem'}} rowSpacing={5}>
        {<>
          <BlogPost post={post} key={post.id} isMobile={true} />
          <BlogPost post={post} key={5} isMobile={true} />
        </>
        }
    </Grid>
    </Grid>
       
        
        <FooterSection />
    </>
    
  )
}


export async function getStaticProps({params}) {
  // Called my strapi API endpoint to get posts
  const res = await fetch(`https://beginnerswebguide.herokuapp.com/api/slugify/slugs/article/${params.slug}`);

  const Blogposts = await res.json();
  // By returning { props: { posts } }, the Blog component will receive `posts` as a prop at build time
  return {
    props: {
      post:Blogposts.data
    }
  }
}


export async function getStaticPaths(){
  const res = await fetch(`https://beginnerswebguide.herokuapp.com/api/articles`)
  const Blogposts = await res.json()

    const paths = Blogposts.data.map((post) =>{
      return {params:{slug: post.attributes.slug}}
    });
  return{
    paths,
    fallback:false
  }
}
