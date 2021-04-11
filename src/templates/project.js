import React from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"
import { AllHtmlEntities } from "html-entities"

const Project = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={AllHtmlEntities.decode(pageContext.title)} />
      <div className="container">
        <div className="post-container">
          <div className="blog-post">
            <h1
              className="post-title-header"
              dangerouslySetInnerHTML={{ __html: pageContext.title }}
            ></h1>
            <div className="project-button-controls">
              <a
                href={pageContext.liveLink}
                target="_blank"
                rel="nofollow noopener"
              >
                <button className="project-button">Live Project</button>
              </a>
              {pageContext.sourceLink !== "" ? (
                <a
                  href={pageContext.sourceLink}
                  target="_blank"
                  rel="nofollow noopener"
                >
                  <button className="project-button">Source</button>
                </a>
              ) : (
                <button
                  className="project-button-disabled has-tooltip-bottom"
                  data-tooltip="Code available upon request"
                  disabled
                >
                  Source
                </button>
              )}
            </div>
            <div
              dangerouslySetInnerHTML={{ __html: pageContext.html }}
              className="blog-post-markup"
            />
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
