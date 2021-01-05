import React from "react"

import Layout from "../components/Default/layout"
import SEO from "../components/Default/seo"

import MainHero from "../components/Landing/MainHero"
import DeviceSection from "../components/Landing/DeviceSection"
import Skills from "../components/Landing/Skills"
import FeaturedWork from "../components/Landing/FeaturedWork"

const IndexPage = () => {
  return (
    <Layout>
      <SEO title="Freelance Web Developer" />
      <MainHero />
      <div className="container">
        <DeviceSection />
        <Skills />
        <FeaturedWork />
      </div>
    </Layout>
  )
}

export default IndexPage
