import React from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"
import { AllHtmlEntities } from "html-entities"
import readingTime from "reading-time"

const Project = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={AllHtmlEntities.decode(pageContext.title)} />
      <div className="container-less-margin">
        <div className="post-container">
          <div className="blog-post">
            <h1
              className="post-title-header"
              dangerouslySetInnerHTML={{ __html: pageContext.title }}
            ></h1>
            <div
              dangerouslySetInnerHTML={{ __html: pageContext.html }}
              className="blog-post-markup"
            />
            <p className="finale">
              Questions, comments, or concerns? I'd love to hear about them.
              Please email me at{" "}
              <span className="email">michael@michaelcapecci.com</span>
            </p>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Project
