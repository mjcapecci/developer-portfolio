import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

const Page = ({ pageContext }) => {
  return (
    <Layout>
      <SEO title={pageContext.title} />
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }}></div>
    </Layout>
  )
}

export default Page
