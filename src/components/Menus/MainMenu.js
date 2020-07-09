import React, { useState, useEffect } from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import { motion, AnimatePresence } from "framer-motion"

import Search from "./Search"

const MainMenu = () => {
  const [isToggled, setToggle] = useState(false)

  const { allWordpressWpApiMenusMenusItems } = useStaticQuery(graphql`
    {
      allWordpressWpApiMenusMenusItems {
        edges {
          node {
            items {
              object_slug
              title
            }
          }
        }
      }
    }
  `)

  return (
    <>
      <nav className="navbar" role="navigation" aria-label="main navigation">
        <div className="navbar-brand">
          <Link className="navbar-item" to="/">
            <img
              src="https://versions.bulma.io/0.7.1/images/bulma-logo.png"
              alt="Bulma: a modern CSS framework based on Flexbox"
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
              {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(
                navItem => (
                  <Link className="navbar-item" to={"/" + navItem.object_slug}>
                    {navItem.title}
                  </Link>
                )
              )}
              <Search></Search>
            </motion.div>
          )}
        </AnimatePresence>
        <div className={"navbar-end"}>
          <div className="navbar-item no-hover">
            <Search></Search>
          </div>
          {allWordpressWpApiMenusMenusItems.edges[0].node.items.map(navItem => (
            <Link className="navbar-item" to={"/" + navItem.object_slug}>
              {navItem.title}
            </Link>
          ))}
        </div>
      </nav>
    </>
  )
}

export default MainMenu
