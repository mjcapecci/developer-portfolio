import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import scrollTo from "gatsby-plugin-smoothscroll"

const MainHero = () => {
  const bgImageQuery = useStaticQuery(graphql`
    query bgImage {
      file(relativePath: { eq: "heroBG.jpg" }) {
        id
        childImageSharp {
          fluid(maxWidth: 1920, quality: 90) {
            ...GatsbyImageSharpFluid_withWebp
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
      backgroundColor={"#2D5E58"}
    >
      <div className="main-hero">
        <p className="hide-on-mobile">MICHAEL CAPECCI</p>
        <h1 className="title is-1">FREELANCE</h1>
        <h1 className="title is-1">DEVELOPER</h1>
        <div className="button-container">
          <button
            className="button is-danger special"
            onClick={() => scrollTo("#anchor")}
          >
            Get Started
          </button>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default MainHero
