import React from "react"
import { graphql, useStaticQuery, Link } from "gatsby"

import Search from "./Search"

const MainMenu = () => {
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
      </div>
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
  )
}

export default MainMenu
