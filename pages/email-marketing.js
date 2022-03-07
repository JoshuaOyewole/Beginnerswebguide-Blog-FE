import React from 'react'
import Image from 'next/image'
import NavBar from '../components/Navbar'
import SlideShow from '../components/SlideShow'
import blogImage from '../public/images/Google-search-results-for-Pinterest-SEO.png'
import Footer from '../components/Footer'

export default function emailMarketing() {
  return (
    <div className='blogContainer'>
        <NavBar />
        <SlideShow 
        title='How to Generate Leads through Email Marketing' 
        description='By Mike | Updated Oct 31, 2021 | 2 Comments'/>
        <main className='blogContent'>
          <p>Are you wondering why your blog isn’t making any money yet?</p>
          <p>
          You are working hard to create content and drive traffic to your blog, but you’re just not seeing the results you expected?
          </p>
          <p>
            If you are looking for real, actionable tips to grow your earnings, look no further. Whether you are new to blogging or you’ve been doing it for a while, you are in the right place. I’ve grown two of my blogs into a full-time income source since I started this journey in late 2016. It took a lot of work, and I made a ton of mistakes along the way. Since then, I’ve helped hundreds of bloggers just like you leverage their content to earn a nice side income. I’ve helped my readers avoid the mistakes I made so that they can see results faster than I ever did. And I love hearing how easily my techniques can make a difference. So yes, blogging and making money from it can be learned and perfected without turning it into rocket science. In this guide, I’ll walk you through 15 common problems most bloggers struggle with, and give you an actionable solution to all of them. If you’re serious about starting a profitable blog this year, keep reading!
          </p>
          <Image 
                src={blogImage} 
                alt='blog image for first page SEO '
                placeholder="blur"
            />
          <p>
          You don’t own your traffic:
When you start a free WordPress blog, your blog URL will be something like myawesomeblog
.wordpress.com. You don’t own the domain name, and you’re simply boosting the platform
itself by producing content and driving traffic to their domain.
Limited customization options:
If you are serious about making money with your blog, you want to create 
a brand that people recognize easily. Thus, you need to be able to customize
 the look and feel of your blog, right? The customization options on free
 blogging platforms are slim to none.
          </p>
          <h2>How Do You Make Money with Your Blog?</h2>
          <p>
          You can make money blogging in a variety of ways, but the bulk of our income comes
from two sources:
          </p>
          <p>
          Other significant expenses include team management. We have a core team of 5 
people that includes the two co-founders (Lauren and Alex) as well as a content manager, 
SEO and YouTube manager, and a customer service manager. You can meet the team here.
          </p>
          <h2>
          The Blog
          </h2>
          <h4>You can read our latest blog posts here:</h4>
          <p>
          The 6 Best SEO Tools for Driving More Blog Traffic
8 Great Travel Blogs from Around the World to Inspire You
Top 6 Ad Networks for Bloggers to Earn More Money
3 Best Headline Analyzer Tools for Bloggers [2022]
10 Best Food Blogs of 2022 (+How They Make Money)
          </p>
          <h3>Our browse through the archives within our individual blog categories:</h3>
          <ul>
            <li>Blogging Basics</li>
            <li>Blog Design</li>
            <li>Grow Your Blog</li>
            <li>Make Money</li>
            <li>Blogging Tools</li>
          </ul>
          <h3>
          New to blogging? Get FIRED UP with these awesome resources!
          </h3>
          <ul>
            <li>How to Start a Successful Blog – Step by Step Beginners Guide
</li>
            <li>How Much Does it Really Cost to Start a Blog?
</li>
            <li>Blog Niche Ideas – 3 Steps to Find a Fun and Profitable Blog Niche
</li>
            <li>How Much Do Bloggers Make? Like, Really?
</li>
            <li>How to Make Money Blogging (We Make Over $100,000/Month)
</li>
          </ul>
          <p className='pt-l'>If you have any questions about our blog income reports or about blogging 
in general, please feel free to leave them in the comment section below!</p>
        </main>
        <Footer />
    </div>
  )
}
