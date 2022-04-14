import React from 'react'
// import Card from '@mui/material/Card';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
import {Card, CardContent, CardMedia, Button, CardActionArea, CardActions,Typography,Grid} from '@mui/material';
import Link from 'next/link'

export default function BlogCard({isMobile,post}) {

  return (
<Grid item xs={12} sm={6}>
    <Card >
      <CardActionArea>
        <CardMedia
          component="img"
          height="140"
          image= {`https://beginnerswebguide.herokuapp.com${post.attributes.imageURL}`}   //{post.attributes.imageURL}
          alt="green iguana"
        />
        <CardContent>
            <Link href={`/${post.attributes.slug}`} passHref>
                <a>   
                    <Typography gutterBottom variant="h5" color='#000' lineHeight={1.2}>
                       {post.attributes.title}
                    </Typography>
                </a>
            </Link>
          <Typography variant="body2" color="text.secondary" display= {isMobile ? 'none': 'flex'}>
          {post.attributes.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href={`/${post.attributes.slug}`} passHref>
              <a>
                <Button size="small" color="primary" >
                    Read More
                </Button>
              </a>
          </Link>
      </CardActions>
    </Card>
</Grid>
  );
}
