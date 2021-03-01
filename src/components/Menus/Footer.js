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
          <a href="mailto:michael@michaelcapecci.com">
            michael@michaelcapecci.com
          </a>
        </div>
        <div className="bottom-nav">
          <p className="underline">Menu</p>
          <Link to="/">Home</Link>
          <Link to="/#about">About</Link>
          <Link to="/#skills">Skills</Link>
          <Link to="/#work">Work</Link>
        </div>
      </footer>
    </>
  )
}

export default Footer
