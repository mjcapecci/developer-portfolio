import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import MainMenu from "../Menus/MainMenu"

import "../styles/mystyles.scss"

const Layout = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <div className="main">
      <MainMenu></MainMenu>
      <div className="container">
        <main>{children}</main>
      </div>
    </div>
  )
}

export default Layout
