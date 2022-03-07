import React from 'react'
import Image from 'next/image'
import blogImage from '../public/images/01-blog.jpg'
import styles from '../styles/BlogPost.module.css'

export default function BlogPost() {
  return (
    <div className='post'>
        <div className={styles.card}>
            <Image 
                src={blogImage} 
                alt='blog image for first page SEO '
                placeholder="blur"
                className={styles.blogImage}
            />
            <div className={styles.cardBody}>
              <h2 className={styles.blogTitle}>
                  <a href="/email-marketing">How to Generate Leads through Email Marketing</a>
              </h2>
              <p className={styles.blogInfo}>
                UPDATED DEC 18, 2021 | PINTEREST MARKETING
              </p>
              <p className={styles.blogPost}>
                SEO is a powerful way to generate leads and sales for your business. In this article, we've covered some ways you can use SEO to drive more leads. 
            </p>
        </div>
      </div>
    </div>
  )
}
