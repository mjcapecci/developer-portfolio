import React from "react"
import { Link } from "gatsby"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const BlogDirectory = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title="Blog" />
      {pageContext.posts.map((post, i) => (
        <div className="card" key={i}>
          <h3
            dangerouslySetInnerHTML={{ __html: post.node.title }}
            className="title"
          ></h3>
          <Link to={"/post/" + post.node.slug}>Read Article</Link>
          <p dangerouslySetInnerHTML={{ __html: post.node.excerpt }}></p>
        </div>
      ))}
      <div className="pagination" role="navigation" aria-label="pagination">
        <ul className="pagination-list">
          {Array.from({ length: pageContext.numberOfPages }).map((page, i) => (
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
          ))}
        </ul>
      </div>
    </Layout>
  )
}

export default BlogDirectory
