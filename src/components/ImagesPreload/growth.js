import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Img from "gatsby-image"

const Image = ({ width }) => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "tech-stack.png" }) {
        childImageSharp {
          fluid(maxWidth: 900, quality: 10) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <Img
      fluid={data.placeholderImage.childImageSharp.fluid}
      style={{ width: width }}
      alt="Michael Capecci's recent tech stack"
    />
  )
}

export default Image
