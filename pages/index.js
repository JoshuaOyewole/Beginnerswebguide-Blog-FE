import BlogPost from '../components/BlogPost'
import Footer from '../components/Footer'
import NavBar from '../components/Navbar'
import SlideShow from '../components/SlideShow'
import Aside from '../components/Aside'
import PopularPost from '../components/PopularPost'
import Search from '../components/Search'
import Categories from '../components/Categories'
import Pagination from '../components/Pagination'

export default function Home() {
  return (
    <>
      {/* Main Section */}
      <NavBar />
      <SlideShow 
        title='YouthfulBusiness' 
        description='Blog Tyrant can help you start a blog and build an ethical income online through tested content, SEO and email marketing strategies. Let’s get started… '
      />
      <div className="container grid3-1 mt-m">
        <main>
          <div className='grid-2 mt-l'>
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
              <BlogPost />
          </div>
        </main>
          
          <Aside>
              <aside className='mt-l'>
                <h3 className='aside_header pb-s'>Hi, am Josh</h3>
                <p>Welcome to Youthfulbusiness.com</p>
                <p className='aside_desc' >
                  I'm an online entrepreneur, blogging strategist, and online marketing specialist, here to help you start a blog the smart way, grow your audience and blog traffic, and earn money blogging..
                </p>
                <a href="/" className='readMore'>Read More..</a>
              </aside>
              <div className="socialMedia mt-l">
                  <div className="flex">
                      <div className="icon mr-s">
                        icon
                      </div>
                      <div><a href="https://www.twitter.com/orisfina" className='share-link'>Share on twitter</a></div>
                  </div>
                  <div className="flex">
                      <div className="icon mr-s">
                        icon
                      </div>
                      <a href="https://www.facebook.com/orisfina" className='share-link'>Share on facebook</a>
                  </div>
              </div>
              <PopularPost />
              <Search classname='mt-l'/>
              <Categories />
          </Aside>
      </div>
      
      <Pagination />
      <Footer /> 
    </>
  )
}
