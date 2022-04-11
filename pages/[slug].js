import React from 'react'
import {Box, Grid, Link as MUILink, Typography, Button, useMediaQuery, useTheme} from '@mui/material'
import Link from 'next/link'
import Image from 'next/image'
import NavBar from '../components/Navbar2'
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import MarkdownIt from 'markdown-it';
import promoImg from '../public/images/freelance-bundle-podcast.jpg'
import FooterSection from '../components/FooterSection'
import BlogPost from '../components/Card'

export default function Post({post}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

const md = new MarkdownIt();
const htmlContent = md.render(post.attributes.content);

const customHeaderJContent = isMobile ? 'center' : 'space-between'
const customPr = isMobile ? '0rem' : '4rem;'

/*GLOBAL STYLES TO OVERRIDE UL/OL
ol,ul{
  margin-left: 2rem;
}
*/


  return (
    <>
      <NavBar />
    <Box component='header' display='flex' id='#category' sx={{backgroundColor:'#1976D2', height: '10vh'}} px={{lg:'6rem'}} fontFamily='Poppins' mt={{xs:'1rem'}}>
        <Grid item xs={6} lg={5} component='ul' display='flex' justifyContent={customHeaderJContent} sx={{flexWrap:'wrap'}} alignItems='center'
        >
        <Box component='li' display='flex' sx={{pr:`${customPr}`, fontFamily:'Poppins', fontWeight: '600'}}>
            Quicklinks <ArrowRightIcon />
        </Box>
          <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>
            <Link href="/javascript" passHref>
                <MUILink color='#edecec' underline='hover' >Javascript</MUILink>
            </Link>
          </Box>
                <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>
                    <Link href="/freelancing" passHref>
                         <MUILink color='#edecec' underline='hover'
                         >Freelancing</MUILink>
                    </Link>
                </Box>
                <Box component='li' sx={{pr:6, fontFamily:'Poppins'}}>    
                    <Link href="/frameworks" passHref>
                         <MUILink  color='#edecec' underline='hover'>Frameworks/Libraries</MUILink>
                    </Link>
                </Box>
                <Box component='li' sx={{fontFamily:'Poppins'}}>
                    <Link href="/contact" passHref>
                         <MUILink color='#edecec' underline='hover' >Css</MUILink>
                    </Link>
                </Box>
            </Grid>
    </Box>
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
  const res = await fetch(`http://localhost:1337/api/slugify/slugs/post/${params.slug}`);

  const Blogposts = await res.json();
  // By returning { props: { posts } }, the Blog component will receive `posts` as a prop at build time
  return {
    props: {
      post:Blogposts.data
    },
  }
}


export async function getStaticPaths(){
  const res = await fetch('http://localhost:1337/api/posts')
  const Blogposts = await res.json()

    const paths = Blogposts.data.map((post) =>{
      return {params:{slug: post.attributes.slug}}
    });
  return{
    paths,
    fallback:false
  }
}
