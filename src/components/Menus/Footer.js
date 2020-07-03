import React, { useEffect, useState } from "react"
import { Link } from "gatsby"

import AboveFooterContact from "./AboveFooterContact"

const Footer = () => {
  return (
    <>
      <AboveFooterContact />
      <footer className="footer">
        <div>
          <p>©{new Date().getFullYear()} by Michael Capecci</p>
        </div>
        <div>
          <p>michael@michaelcapecci.com</p>
        </div>
        <div className="bottom-nav">
          <Link to="/services">Services</Link>
          <Link to="/work">Work</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/blog">Blog</Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
