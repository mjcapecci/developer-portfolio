import React from "react"

import { Link } from "gatsby"

const ThankYouHero = () => {
  return (
    <section className="landing-top thanks">
      <div className="main-hero">
        <h1 className="title is-1">THANK YOU</h1>
        <p>I'm looking forward to speaking with you soon!</p>
        <Link className="return-home" to="/">
          Go Back to Home
        </Link>
      </div>
    </section>
  )
}

export default ThankYouHero
