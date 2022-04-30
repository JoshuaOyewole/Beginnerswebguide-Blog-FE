import React from 'react'
import {Card, CardContent, Button, CardActionArea, CardActions,Typography,Grid} from '@mui/material';
import Link from 'next/link'
import  Image from 'next/image'

export default function BlogCard({isMobile,post}) {

  return (
<Grid item xs={12} sm={6}>
    <Card >
      <CardActionArea>
        <Image
          height="140"
          width="300"
          src= {`${post.attributes.imageURL}`}   //{post.attributes.imageURL}
          alt={`${post.attributes.slug}`}
        />
        <CardContent>
            <Link href={`/${post.attributes.slug}`} passHref>
                <a>   
                    <Typography gutterBottom variant="h5" color='#000' lineHeight={1.2}>
                       {post.attributes.title}
                    </Typography>
                </a>
            </Link>
          <Typography variant="body2" color="text.secondary" id ='contentDescription' display= {isMobile ? 'none': 'flex'}>
          {post.attributes.description}
          </Typography>
        </CardContent>
      </CardActionArea>
      <CardActions>
          <Link href={`/${post.attributes.slug}`} passHref>
              <a>
                <Button size="small" color="primary" >
                    Read Article
                </Button>
              </a>
          </Link>
      </CardActions>
    </Card>
</Grid>
  );
}
