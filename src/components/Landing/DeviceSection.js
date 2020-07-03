import React from "react"
import DeviceImage from "../ImagesPreload/devices"
import GrowthImage from "../ImagesPreload/growth"

const DeviceSection = () => {
  return (
    <section className="device-section container">
      <div className="devices-image">
        <DeviceImage width={800}></DeviceImage>
        <p>
          My goal is to make products that are accessible to everyone,
          everywhere. Using{" "}
          <strong className="gatsby-color">the newest web technology</strong>, I
          am able to deliver products that are fast, secure, and will{" "}
          <strong className="attention-color">
            turn your new visitors into your biggest fans.
          </strong>
        </p>
      </div>
      <div className="devices-image">
        <p>
          <strong className="attention-color">
            Your growth is my mission.
          </strong>{" "}
          And I won't stop until the mission is complete. My products are
          developed with an SEO-first, conversion-driven mentality.
        </p>
        <GrowthImage width={800}></GrowthImage>
      </div>
    </section>
  )
}

export default DeviceSection
