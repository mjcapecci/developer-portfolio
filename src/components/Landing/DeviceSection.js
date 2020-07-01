import React from "react"
import Image from "../Default/image"

const DeviceSection = () => {
  return (
    <section className="device-section container">
      <div className="devices-image">
        <Image width={800}></Image>
        <p>
          Our goal is to make products that are accessible to everyone,
          everywhere. Using <strong className="gatsby-color">GatsbyJS</strong>,
          we are able to deliver products that are fast, secure, and will{" "}
          <strong className="attention-color">
            turn your newest visitors into your biggest fans.
          </strong>
        </p>
      </div>
    </section>
  )
}

export default DeviceSection
