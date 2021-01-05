import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChartLine,
  faTachometerAlt,
  faLock,
  faDonate,
  faUniversalAccess,
  faUserCheck,
} from "@fortawesome/free-solid-svg-icons"

import { motion } from "framer-motion"

const WorkItem = ({ icon, text, content, onClick, isOpen, color }) => {
  return (
    <>
      <motion.div animate onClick={onClick} class="benefit-card">
        {" "}
        <div className={isOpen ? "the-card-active" : "the-card"}>
          <div className={`the-card-front ${color}`}>
            <p>{text}</p>
            <FontAwesomeIcon icon={icon} size="3x" />
          </div>
          <div className="the-card-back">
            <motion.p
              className="back-content"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              dangerouslySetInnerHTML={{ __html: content }}
            ></motion.p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

const FeaturedWork = () => {
  const [currentItem, setCurrentItem] = useState(null)

  return (
    <section className="under-hero" id="work">
      <h2 className="centered-title-h2">Featured Work:</h2>
      <p className="learnMore">(Click cards to learn more)</p>
      <div className="benefit-cards-container">
        <motion.div animate class="card-grid">
          {itemCards.map(item => (
            <WorkItem
              icon={item.icon}
              text={item.text}
              content={item.content}
              isOpen={currentItem === item.text}
              color={item.color}
              onClick={() => {
                setCurrentItem(currentItem === item.text ? false : item.text)
              }}
            />
          ))}
        </motion.div>
      </div>
    </section>
  )
}

const itemCards = [
  {
    icon: faLock,
    text: "Security",
    content:
      "New development methods eliminate many common security risks. <a href='post/whats-so-good-about-static-site-generators' class='light-link'>Learn More</a>",
    color: "h-blue",
  },
  {
    icon: faTachometerAlt,
    text: "Speed",
    content:
      "A FAST website leads to conversions. I build fast products with state-of-the-art tech.",
    color: "h-red",
  },
  {
    icon: faChartLine,
    text: "SEO",
    content:
      "Get found! Careful search engine optimization will put your name on your customers' screens.",
    color: "h-orange",
  },
  {
    icon: faDonate,
    text: "Cost",
    content:
      "Server costs should be low. In many cases, I am able to host products for FREE on Netlify.",
    color: "h-green",
  },
  {
    icon: faUniversalAccess,
    text: "Accessibility",
    content: "A great product is accessible to everyone, everywhere.",
    color: "h-yellow",
  },
  {
    icon: faUserCheck,
    text: "Ease of Use",
    content: "A website must be easy to use to accomplish its goal.",
    color: "h-purple",
  },
]

export default FeaturedWork
