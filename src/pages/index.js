import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import MainHero from "../components/Landing/MainHero"
import UnderHero from "../components/Landing/UnderHero"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainHero />
      <UnderHero />
    </Layout>
  )
}

export default IndexPage
