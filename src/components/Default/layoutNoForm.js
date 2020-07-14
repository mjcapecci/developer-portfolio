import React from "react"
import MainMenu from "../Menus/MainMenu"

import "../../styles/mystyles.scss"

const LayoutNoForm = ({ children }) => {
  return (
    <>
      <MainMenu></MainMenu>
      <div className="main">
        <main>{children}</main>
      </div>
    </>
  )
}

export default LayoutNoForm
