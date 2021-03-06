import React, { useState, useEffect } from "react"

const AboveFooterContact = () => {
  const [pathname, setPathName] = useState("")

  useEffect(() => {
    setPathName(typeof window !== "undefined" ? window.location.pathname : "")
  })

  return (
    <div
      className={
        pathname === "/contact"
          ? "container full-height above-footer"
          : "container above-footer"
      }
    >
      <h3 id="anchor" className="attention-color text-center">
        Get In Touch.
      </h3>
      <p>
        I'd love to hear from you! Leave me a message, and I'll be in touch ASAP
        (<strong className="attention-color">within 24 hours</strong>).
      </p>
      <form name="contact" method="POST" data-netlify="true" action="/success">
        <input type="hidden" name="contact" value="contact" />
        <div className="field columns">
          <div className="control column">
            <label htmlFor="name">Name:</label>
            <input
              className="input is-primary"
              name="name"
              id="name"
              type="text"
              required
              placeholder="Name"
            />
          </div>
          <div className="control column">
            <label htmlFor="name">Email:</label>
            <input
              className="input is-primary"
              name="email"
              id="email"
              type="email"
              required
              placeholder="Email"
            />
          </div>
          <div className="control column">
            <label htmlFor="phone">Phone #:</label>
            <input
              name="phone"
              id="phone"
              className="input is-primary"
              type="phone"
              placeholder="Phone # (optional)"
            />
          </div>
        </div>

        <div className="control">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="textarea has-fixed-size is-primary"
            placeholder="Message"
          ></textarea>
          <p className="control submit-button">
            <button
              className="button is-primary special"
              type="submit"
              value="Submit"
            >
              Submit
            </button>
          </p>
        </div>
      </form>
    </div>
  )
}

export default AboveFooterContact
