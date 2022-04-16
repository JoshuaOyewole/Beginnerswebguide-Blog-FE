import React, {useEffect,useState} from 'react'
import {Grid, Typography,useMediaQuery, useTheme } from '@mui/material'
import BlogPost from './Card'

export default function Main({posts}) {
  const theme = useTheme();
  const isMobile = useMediaQuery(theme.breakpoints.down("md"));

 const [latestPosts, setLatestPosts] = useState([]);

    useEffect(() => {
      setLatestPosts(posts.slice(0,20));
    }, [posts])
    
  return (
    <Grid item xs={12} lg={8} component='main' sx={{py:'0rem'}}>
      <Typography component='h2' variant='h6' mb='2rem' color='#061942' fontWeight='600'>Latest Articles</Typography>
      <Grid container columnSpacing={6} rowSpacing={5}>
        {
          latestPosts.map((post) => {
            return <BlogPost post={post} key={post.id} isMobile={isMobile} />
          }
            )
        }
    </Grid>
    </Grid>
  )
}
