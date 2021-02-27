import React, { useState, useEffect } from "react"
import moment from "moment"
import { Link } from "gatsby"

import { AllHtmlEntities } from "html-entities"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const BlogDirectory = ({ pageContext }) => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 100)
  }, [])

  console.log(pageContext)
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container">
        <div className="directory">
          <h1>Coming Soon!</h1>
        </div>
      </div>

      {/* <div className="container">
        <div className="directory">
          {pageContext.posts.map((post, i) => (
            <div className="card blog-post-header" key={i}>
              <div className="post-banner-container">
                <Link to={post.node.frontmatter.slug}>
                  <img
                    src={
                      post?.node?.featured_media
                        ? post?.node?.featured_media?.source_url
                        : ""
                    }
                    alt={AllHtmlEntities.decode(
                      post?.node?.featured_media?.alt_text
                    )}
                  ></img>
                </Link>
                <Link to={"/post?/" + post?.node?.slug}>
                  <h3
                    dangerouslySetInnerHTML={{ __html: post?.node?.title }}
                    className="title"
                  ></h3>
                </Link>
                <div className="tags">
                  <small
                    className="publish-date"
                    dangerouslySetInnerHTML={{
                      __html: moment(post?.node?.date).format("MMMM Do YYYY"),
                    }}
                  ></small>
                </div>
              </div>
              <p
                dangerouslySetInnerHTML={
                  init ? { __html: post?.node?.excerpt } : { __html: "" }
                }
              ></p>
              <Link to={"/post/" + post?.node?.slug}>Read More</Link>
            </div>
          ))}
          <div className="pagination" role="navigation" aria-label="pagination">
            <ul className="pagination-list">
              {Array.from({ length: pageContext.numberOfPages }).map(
                (page, i) => (
                  <li key={i}>
                    <Link
                      to={i === 0 ? `/blog` : `/blog/${i + 1}`}
                      className={
                        i + 1 === pageContext.currentPage
                          ? "pagination-link is-current"
                          : "pagination-link"
                      }
                    >
                      {i + 1}
                    </Link>
                  </li>
                )
              )}
            </ul>
          </div>
        </div>
      </div> */}
    </Layout>
  )
}

export default BlogDirectory
