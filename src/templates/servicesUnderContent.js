import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"
import ServicesController from "../components/Services/ServicesController"

const ServicesUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <div className="container">
        <SEO title={pageContext.title} />
        <h1 className="page-title">{pageContext.title}</h1>
        <ServicesController />
      </div>
    </Layout>
  )
}

export default ServicesUnderContent
