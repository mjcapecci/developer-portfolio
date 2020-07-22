import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitter,
  faYoutube,
  faGithub,
  faDev,
  faMediumM,
  faStackOverflow,
} from "@fortawesome/free-brands-svg-icons"

const SocialTemplate = () => {
  return (
    <div className="social-template">
      <h3>Find me on the following social media platforms:</h3>
      <div className="contact-social-icons">
        <a href="https://twitter.com/MichaelCapecci">
          <FontAwesomeIcon
            icon={faTwitter}
            size="3x"
            style={{ color: "#1DA1F2" }}
          />
        </a>
        {/* <a>
        <FontAwesomeIcon
          icon={faYoutube}
          size="3x"
          style={{ color: "#c4302b" }}
        />
        </a> */}
        <a href="https://github.com/mjcapecci">
          <FontAwesomeIcon
            icon={faGithub}
            size="3x"
            style={{ color: "#6e5494" }}
          />
        </a>
        <a href="https://dev.to/mjcapecci">
          <FontAwesomeIcon icon={faDev} size="3x" style={{ color: "black" }} />{" "}
        </a>
        <a href="https://medium.com/@mjcapecci">
          <FontAwesomeIcon
            icon={faMediumM}
            size="3x"
            style={{ color: "#00ab6c" }}
          />
        </a>
        <a href="https://stackoverflow.com/users/12276598/mjcapecci">
          <FontAwesomeIcon
            icon={faStackOverflow}
            size="3x"
            style={{ color: "#ef8236" }}
          />
        </a>
      </div>
    </div>
  )
}

export default SocialTemplate
