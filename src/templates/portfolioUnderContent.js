import React from "react"

import Layout from "../components/Default/layout"
import PortfolioController from "../components/Portfolio/PortfolioController"

const PortfolioUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <h1>{pageContext.title}</h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
      <PortfolioController />
    </Layout>
  )
}

export default PortfolioUnderContent
