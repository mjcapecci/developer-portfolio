import React, { useEffect, useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faTwitterSquare,
  faGithubSquare,
  faDev,
  faStackOverflow,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons"

const Socials = () => {
  const [init, setInit] = useState(false)

  useEffect(() => {
    setTimeout(() => {
      setInit(true)
    }, 500)
  }, [])

  return (
    init && (
      <div className="social-template">
        <div className="contact-social-icons">
          <a
            className="has-tooltip-bottom"
            data-tooltip="GitHub"
            href="https://github.com/mjcapecci"
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon
              icon={faGithubSquare}
              size="2x"
              style={{ color: "#fff" }}
            />
          </a>
          <a
            className="has-tooltip-bottom"
            data-tooltip="Twitter"
            href="https://twitter.com/MichaelCapecci"
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon
              icon={faTwitterSquare}
              size="2x"
              style={{ color: "#fff" }}
            />
          </a>
          <a
            className="has-tooltip-bottom"
            data-tooltip="LinkedIn"
            href="https://www.linkedin.com/in/michaelcapecci/"
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon
              icon={faLinkedin}
              size="2x"
              style={{ color: "#fff" }}
            />
          </a>

          <a
            className="has-tooltip-bottom"
            data-tooltip="Dev.to"
            href="https://dev.to/mjcapecci"
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon icon={faDev} size="2x" style={{ color: "#fff" }} />{" "}
          </a>

          <a
            className="has-tooltip-bottom last-icon"
            data-tooltip="Stack Overflow"
            href="https://stackoverflow.com/users/12276598/mjcapecci"
            target="_blank"
            rel="nofollow noopener"
          >
            <FontAwesomeIcon
              icon={faStackOverflow}
              size="2x"
              style={{ color: "#fff" }}
            />
          </a>
        </div>
      </div>
    )
  )
}

export default Socials
