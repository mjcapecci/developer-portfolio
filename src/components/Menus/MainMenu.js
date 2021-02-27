import React, { useState, useEffect } from "react"
import { Link } from "gatsby"

import lightLogo from "../../images/light-logo.png"
import darkLogo from "../../images/dark-logo.png"

import { useLocation } from "@reach/router"

import { motion, AnimatePresence } from "framer-motion"

import Search from "./Search"

const MainMenu = () => {
  const path = useLocation().pathname

  let burger = null

  if (typeof window !== "undefined") {
    burger = document.getElementsByClassName("navbar-burger")
  }

  useEffect(() => {
    if (path === "/" || path === "/success") {
      burger[0].classList.add("burger-white")
      return
    } else {
      burger[0].classList.remove("burger-white")
    }
  })

  const [isToggled, setToggle] = useState(false)

  const menuItems = ["About", "Skills", "Work", "Blog"]

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src={path === "/" || path === "/success" ? darkLogo : lightLogo}
              alt="Michael Capecci: Full-stack Web Developer"
              width="112"
              height="28"
            />
          </Link>
          <a
            role="button"
            class={isToggled ? "navbar-burger is-active" : "navbar-burger"}
            data-target="navMenu"
            aria-label="menu"
            aria-expanded="false"
            onClick={() => {
              setToggle(!isToggled)
            }}
          >
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
            <span aria-hidden="true"></span>
          </a>
        </div>

        <AnimatePresence>
          {isToggled && (
            <motion.div
              className="navbar-slider"
              initial={{ y: -100 }}
              animate={{ y: 0 }}
              exit={{ y: -500 }}
            >
              {menuItems.map(item => (
                <Link className="navbar-item" to={"/" + item}>
                  {item}
                </Link>
              ))}
              <Search></Search>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={"navbar-end"}>
          <div className="navbar-item no-hover">
            <Search></Search>
          </div>
          {menuItems.map(item => (
            <Link
              className={
                path.includes("/projects/") ||
                path.includes("/posts/") ||
                path.includes("/blog")
                  ? "navbar-item"
                  : "navbar-item item-white"
              }
              to={
                item === "Blog"
                  ? "/blog"
                  : "/#" + item.charAt(0).toLowerCase() + item.slice(1)
              }
            >
              {item}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MainMenu
