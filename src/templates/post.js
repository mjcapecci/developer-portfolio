import React, { useEffect } from "react"
import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import Prism from "prismjs"
import { AllHtmlEntities } from "html-entities"
import { MDXRenderer } from "gatsby-plugin-mdx"

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
            <small className="byline byline-under">
              {pageContext.timeToRead}-minute read
            </small>
            <MDXRenderer className="blog-post-markup">
              {pageContext.content}
            </MDXRenderer>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default Post
