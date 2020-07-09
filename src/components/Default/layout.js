import React from "react"
import MainMenu from "../Menus/MainMenu"
import Footer from "../Menus/Footer"

import "../../styles/mystyles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <MainMenu></MainMenu>
      <div className="main">
        <div className="container">
          <main>{children}</main>
        </div>
      </div>
      <Footer />
    </>
  )
}

export default Layout
