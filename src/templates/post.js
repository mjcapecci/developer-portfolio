import React, { useEffect } from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import Prism from "prismjs"
import { AllHtmlEntities } from "html-entities"

const Post = ({ pageContext }) => {
  useEffect(() => {
    Prism.plugins.customClass.map({
      number: "prism-number",
    })
    Prism.highlightAll()
  })

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
            <small className="byline">By: Michael Capecci</small>
            <div
              dangerouslySetInnerHTML={{ __html: pageContext.content }}
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

export default Post
