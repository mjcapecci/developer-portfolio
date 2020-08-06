import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const MainHero = () => {
  const bgImageQuery = useStaticQuery(graphql`
    query bgImage {
      file(relativePath: { eq: "heroBG.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 1920, quality: 100) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)

  const bgImage = bgImageQuery.file.childImageSharp.fluid

  return (
    <BackgroundImage
      Tag="section"
      className="landing-top"
      fluid={bgImage}
      backgroundColor={"#92C7C3"}
    >
      <div className="main-hero">
        <h1 className="title is-1" style={{ transform: "translateX(-4.5px)" }}>
          FREELANCE
        </h1>
        <h1 className="title is-1" style={{ transform: "translateX(-4.5px)" }}>
          DEVELOPER
        </h1>
        <p className="descriptor">Small Business & E-Commerce Solutions</p>
        <div className="button-container">
          <button
            className="button is-danger special"
            onClick={() => scrollTo("#anchor")}
          >
            GET STARTED
          </button>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default MainHero
