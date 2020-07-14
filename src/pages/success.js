import React from "react"

import LayoutNoForm from "../components/Default/layoutNoForm"
import SEO from "../components/Default/seo"
import ThankYouHero from "../components/Landing/ThankYouHero"

const IndexPage = () => {
  return (
    <LayoutNoForm>
      <SEO title="Thank you!" />
      <ThankYouHero></ThankYouHero>
    </LayoutNoForm>
  )
}

export default IndexPage
