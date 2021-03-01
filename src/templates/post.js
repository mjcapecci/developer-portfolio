import React, { useEffect } from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import Prism from "prismjs"
import { AllHtmlEntities } from "html-entities"
// import readingTime from "reading-time"

const Post = ({ pageContext }) => {
  console.log(pageContext)
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
            {/* <small className="byline byline-under">
              {readingTime(pageContext.content).text}
            </small> */}
            <div
              dangerouslySetInnerHTML={{ __html: pageContext.content }}
              className="blog-post-markup"
            />
            <div className="finale">
              Questions, comments, or concerns? I'd love to hear about them.
              Please email me at{" "}
              <a href="mailto:michael@michaelcapecci.com">
                michael@michaelcapecci.com
              </a>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
