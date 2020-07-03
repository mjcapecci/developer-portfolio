import React, { useState, useEffect } from "react"

const AboveFooterContact = () => {
  const [pathname, setPathName] = useState("")

  useEffect(() => {
    setPathName(typeof window !== "undefined" ? window.location.pathname : "")
  })

  return (
    <div
      className={
        pathname === "/contact" ? "container full-height" : "container"
      }
    >
      <h3 className="attention-color text-center">Let's Get Started.</h3>
      <p>
        Leave me a message, and I'll be in touch ASAP (
        <strong className="attention-color">within 24 hours</strong>) to start
        discussing your project.
      </p>
      <div class="field columns">
        <div class="control column">
          <label htmlFor="name">Name:</label>
          <input
            class="input is-primary"
            name="name"
            type="text"
            required
            placeholder="Your name..."
          />
        </div>
        <div class="control column">
          <label htmlFor="name">Email:</label>
          <input
            class="input is-primary"
            name="email"
            type="email"
            required
            placeholder="Your email..."
          />
        </div>
        <div class="control column">
          <label htmlFor="phone">Phone #:</label>
          <input
            name="phone"
            class="input is-primary"
            type="phone"
            placeholder="Your phone # (optional)..."
          />
        </div>
      </div>

      <div class="control">
        <label htmlFor="message">Message:</label>
        <textarea
          name="message"
          class="textarea has-fixed-size is-primary"
          placeholder="Fixed size textarea"
        ></textarea>
        <p class="control submit-button">
          <a class="button is-primary">Submit</a>
        </p>
      </div>
    </div>
  )
}

export default AboveFooterContact
