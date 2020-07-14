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
      <h3 className="attention-color text-center">Let's Get Started.</h3>
      <p>
        Leave me a message, and I'll be in touch ASAP (
        <strong className="attention-color">within 24 hours</strong>) to start
        discussing your project.
      </p>
      <form
        name="contact"
        method="post"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        action="/success"
      >
        <input type="hidden" name="bot-field" />
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
              placeholder="Your name..."
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
              placeholder="Your email..."
            />
          </div>
          <div className="control column">
            <label htmlFor="phone">Phone #:</label>
            <input
              name="phone"
              id="phone"
              className="input is-primary"
              type="phone"
              placeholder="Your phone # (optional)..."
            />
          </div>
        </div>

        <div className="control">
          <label htmlFor="message">Message:</label>
          <textarea
            name="message"
            id="message"
            className="textarea has-fixed-size is-primary"
            placeholder="Your message..."
          ></textarea>
          <p className="control submit-button">
            <input
              className="button is-primary special"
              type="submit"
              value="Submit"
            />
          </p>
        </div>
      </form>
    </div>
  )
}

export default AboveFooterContact
