import React, { useEffect, useState } from "react"
import DeviceImage from "../ImagesPreload/devices"
import GrowthImage from "../ImagesPreload/growth"

import useWindowSize from "../../utils/useWindowSize"

const DeviceSection = () => {
  const width = useWindowSize().width

  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 400)
  }, [])

  return (
    <section className="device-section container">
      <h2 className="centered-title-h2">About Me</h2>
      <div className="devices-image">
        <DeviceImage width={init && width / 2}></DeviceImage>
        <p>
          I'm a software developer with a particular focus on building
          full-stack applications with React and Node.js. Using{" "}
          <strong className="gatsby-color">the newest web technology</strong>, I
          am able to deliver products that are fast, secure, and will{" "}
          <strong className="attention-color">
            turn your new visitors into your biggest fans.
          </strong>
        </p>
      </div>
      <div className="devices-image reverse-flex">
        <p>
          <strong className="attention-color">
            Your growth is my mission.
          </strong>{" "}
          And I won't stop until the mission is complete. My products are
          developed with an SEO-first, conversion-driven mentality.
        </p>
        <GrowthImage width={init && width / 2}></GrowthImage>
      </div>
    </section>
  )
}

export default DeviceSection
