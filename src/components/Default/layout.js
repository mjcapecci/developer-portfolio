import React from "react"
import MainMenu from "../Menus/MainMenu"
import Footer from "../Menus/Footer"

import "../styles/mystyles.scss"

const Layout = ({ children }) => {
  return (
    <div className="main">
      <MainMenu></MainMenu>
      <div className="container">
        <main>{children}</main>
      </div>
      <Footer />
    </div>
  )
}

export default Layout
