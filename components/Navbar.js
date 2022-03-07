import Image from 'next/image'
import navbar from '../styles/Navbar.module.css'
import logo from '../public/images/logo.png';

function NavBar() {
     
     return (
      <nav className={navbar.nav}>
            <div className="logo-section">
                  <Image src={logo} alt='youthfulBusiness Logo'
                  placeholder="blur"
            />
            </div>
            <ul className={navbar.navmenuSection}>
                  <li className={navbar.navList}><a href="/" className={navbar.navLink}>Home</a>
                  </li>
                  <li className="nav-list"><a href="webDevTips" className={navbar.navLink}>Web Dev Tips</a>
                  </li>
                  <li className="nav-list"><a href="/freelancing" className={navbar.navLink}>Freelancing</a>
                  </li>
                  <li className="nav-list"><a href="webDevProjects" className={navbar.navLink}>Web Dev Projects</a>
                  </li>
                  <li className="nav-list"><a href="about" className={navbar.navLink}>About us</a>
                  </li>
            </ul>
      </nav>
     )
}

export default NavBar