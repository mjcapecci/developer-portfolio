import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import MainHero from "../components/Landing/MainHero"
import UnderHero from "../components/Landing/UnderHero"
import DeviceSection from "../components/Landing/DeviceSection"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Home" />
      <MainHero />
      <div className="container">
        <DeviceSection />
        <UnderHero />
      </div>
    </Layout>
  )
}

export default IndexPage
