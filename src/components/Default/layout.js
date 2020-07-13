import React from "react"
import MainMenu from "../Menus/MainMenu"
import Footer from "../Menus/Footer"

import "../../styles/mystyles.scss"

const Layout = ({ children }) => {
  return (
    <>
      <MainMenu></MainMenu>
      <div className="main">
        <main>{children}</main>
      </div>
      <Footer />
    </>
  )
}

export default Layout
