import React from "react"
import { graphql, useStaticQuery } from "gatsby"

import BackgroundImage from "gatsby-background-image"
import scrollTo from "gatsby-plugin-smoothscroll"

import Socials from "../Social/Socials"

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
          MICHAEL
        </h1>
        <h1 className="title is-1" style={{ transform: "translateX(-4.5px)" }}>
          CAPECCI
        </h1>
        <p className="descriptor is-centered">Software Developer</p>
        <Socials />
        <div className="button-container">
          <button
            className="button is-danger special"
            onClick={() => scrollTo("#work")}
          >
            SEE WORK
          </button>
        </div>
      </div>
    </BackgroundImage>
  )
}

export default MainHero
