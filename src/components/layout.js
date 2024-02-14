import React from "react"
import { Link } from "gatsby"
import { useLocation } from '@reach/router';

const Layout = props => {
  const data = useLocation()
  const { title, children, social } = props
  // const path = props&&props.location&&props.location

  const [toggleNav, setToggleNav] = React.useState(false)
  return (
    <div className={`site-wrapper ${toggleNav ? `site-head-open` : ``}`}>
      <header className="site-head">
        <div className="site-head-container">
          <a
            className="nav-burger"
            href={`#`}
            onClick={() => setToggleNav(!toggleNav)}
          >
            <div
              className="hamburger hamburger--collapse"
              aria-label="Menu"
              role="button"
              aria-controls="navigation"
            >
              <div className="hamburger-box">
                <div className="hamburger-inner" />
              </div>
            </div>
          </a>
          <nav id="swup" className="site-head-left">
            <ul className="nav" role="menu">
              <li className={`nav-home  ${data.pathname === '/' ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/`}>Home</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes('/bio') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/bio`}>Bio</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes('/work') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/work`}>Work</Link>
              </li>
              <li className={`nav-home  ${data.pathname.includes('/contact') ? 'nav-current' : ""} `} role="menuitem">
                <Link to={`/contact`}>Contact</Link>
              </li>
            </ul>
          </nav>
          <div className="site-head-center">
            <Link className="site-head-logo" to={`/`}>
              {title}
            </Link>
          </div>
          <div className="site-head-right">
            <div className="social-links">
              <Link
                to={`https://www.behance.net/${social.behance}`}
                title="Behance"
                target="_blank"
                rel="noopener noreferrer"
              >
                Behance
              </Link>
              <Link
                to={`https://instagram.com/${social.instagram}`}
                title="Instagram"
                target="_blank"
                rel="noopener noreferrer"
              >
                Instagram
              </Link>
              
            </div>
          </div>
        </div>
      </header>
      <main id="site-main" className="site-main">
        <div id="swup" className="transition-fade">
          {children}
        </div>
      </main>
      <footer className="site-foot">
        &copy; {new Date().getFullYear()} <Link to={`/`}>{title}</Link> &mdash;
      </footer>
    </div>
  )
}

export default Layout
