import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioController = () => {
  const { allWordpressWpPortfolio } = useStaticQuery(graphql`
    query {
      allWordpressWpPortfolio {
        edges {
          node {
            title
            content
            excerpt
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  return (
    <div className="portfolio-cards-container">
      {allWordpressWpPortfolio.edges.map(card => (
        <div className="card">
          <div className="card-image">
            <img src={card.node.featured_media.source_url} alt="Test" />
            <div
              className="card-content"
              dangerouslySetInnerHTML={{ __html: card.node.excerpt }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  )
}

export default PortfolioController
