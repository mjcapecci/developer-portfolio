import React from "react"
import { Link } from "gatsby"

const Footer = () => {
  return (
    <footer className="footer">
      <div className="content has-text-centered">
        <p>©{new Date().getFullYear()} by ABC Studios - All Rights Reserved</p>
      </div>
      <div className="bottom-nav">
        <Link to="/services">Services</Link>
        <Link to="/work">Work</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/blog">Blog</Link>
      </div>
    </footer>
  )
}

export default Footer
