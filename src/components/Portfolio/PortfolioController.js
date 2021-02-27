import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const PortfolioController = () => {
  return (
    <div className="portfolio-container-container">
      <div className="portfolio-container">
        {[].map(card => (
          <div className="column">
            <div className="card">
              <div className="card-image">
                <img
                  src={card.node.featured_media.source_url}
                  alt={`Project: ` + card.node.title}
                />
              </div>
              <div
                className="card-content"
                dangerouslySetInnerHTML={{ __html: card.node.excerpt }}
              ></div>
              <a
                href={card.node.acf.portfolio_url}
                target="_blank"
                rel="noopener"
                className="website-link"
              >
                Visit Website
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default PortfolioController
