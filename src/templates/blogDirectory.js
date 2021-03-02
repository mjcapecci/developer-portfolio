import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const BlogDirectory = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      <div className="container">
        <div className="directory">
          <strong>New Articles Coming Soon!</strong>
          {pageContext.posts.map((post, i) => {
            console.log(post)
            return (
              <div className="card blog-post-header" key={i}>
                <div className="post-banner-container">
                  <Link to={post.node.frontmatter.slug}>
                    <img
                      src={
                        post?.node?.frontmatter.banner
                          ? post.node.frontmatter.banner.childImageSharp.fluid
                              .src
                          : ""
                      }
                      alt={post.node.frontmatter.title}
                      width={"100%"}
                    ></img>
                  </Link>
                  <Link to={"/post?/" + post.node.frontmatter.slug}>
                    <h3
                      dangerouslySetInnerHTML={{
                        __html: post.node.frontmatter.title,
                      }}
                      className="title"
                    ></h3>
                  </Link>
                  <div className="tags">
                    <small
                      className="publish-date"
                      dangerouslySetInnerHTML={{
                        __html: post.node.frontmatter.date,
                      }}
                    ></small>
                  </div>
                </div>
                <p
                  dangerouslySetInnerHTML={{
                    __html: post.node.frontmatter.summary,
                  }}
                ></p>
                <Link to={post.node.frontmatter.slug}>Read More</Link>
              </div>
            )
          })}
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
      </div>
    </Layout>
  )
}

export default BlogDirectory
