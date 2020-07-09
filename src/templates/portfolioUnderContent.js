import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"
import PortfolioController from "../components/Portfolio/PortfolioController"

const PortfolioUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <h1 className="page-title">{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      <PortfolioController />
    </Layout>
  )
}

export default PortfolioUnderContent