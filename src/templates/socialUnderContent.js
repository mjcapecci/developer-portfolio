import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"
import SocialTemplate from "../components/Social/SocialTemplate"

const SocialUnderContent = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <div className="container">
        <h1
          className="page-title"
          dangerouslySetInnerHTML={{ __html: pageContext.title }}
        ></h1>
        <div
          className="page-content"
          dangerouslySetInnerHTML={{ __html: pageContext.content }}
        ></div>
        <SocialTemplate></SocialTemplate>
      </div>
    </Layout>
  )
}

export default SocialUnderContent
