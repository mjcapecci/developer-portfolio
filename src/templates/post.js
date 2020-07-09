import React from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const Post = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="post-container">
        <div className="blog-post">
          <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
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
    </Layout>
  )
}

export default Post