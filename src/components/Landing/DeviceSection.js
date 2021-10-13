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
          Hello!{" "}
          <strong className="attention-color">
            I'm a software developer from the Chicago area.{" "}
          </strong>
          Since mid 2019, I have had a particular focus on building applications
          with React and Node.js.
        </p>
      </div>
      <div className="devices-image reverse-flex">
        <p>
          I am a confident communicator with a knack for breaking down,
          simplifying, and implementing complex requirements. I am focused on
          writing{" "}
          <strong className="attention-color">
            well-documented and well-tested code.
          </strong>
        </p>
        <GrowthImage width={init && width / 2}></GrowthImage>
      </div>
    </section>
  )
}

export default DeviceSection
