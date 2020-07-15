import React from "react"

import { Link } from "gatsby"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const NotFoundPage = () => (
  <Layout>
    <SEO title="404: Not found" />
    <section className="landing-top thanks">
      <div className="main-hero">
        <div className="darker">
          <h1 className="title is-1">404</h1>
          <p>Oops... that page doesn't exist!</p>
        </div>
        <Link className="return-home" to="/">
          Go Back to Home
        </Link>
      </div>
    </section>
  </Layout>
)

export default NotFoundPage
