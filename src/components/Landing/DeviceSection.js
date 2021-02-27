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
            I'm a software developer from the Chicago area
          </strong>
          . Since mid 2019, I have had a particular focus on building
          applications with React and Node.js.
        </p>
      </div>
      <div className="devices-image reverse-flex">
        <p>
          <strong className="attention-color">
            I am ready and able to dig into the details of a new project
          </strong>
          , utilize effective communication with the team, bring ideas to the
          table based on past problems solved and new understandings, and write
          clean, well-documented code.
        </p>
        <GrowthImage width={init && width / 2}></GrowthImage>
      </div>
    </section>
  )
}

export default DeviceSection
