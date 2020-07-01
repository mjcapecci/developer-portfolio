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

const UnderHeroItem = ({ icon, text, content, onClick, isOpen, color }) => {
  return (
    <>
      <motion.div animate onClick={onClick} class="column benefit-card">
        {" "}
        <div className={isOpen ? "the-card-active" : "the-card"}>
          <div className={`the-card-front ${color}`}>
            <p>{text}</p>
            <FontAwesomeIcon icon={icon} size="3x" />
          </div>
          <div className="the-card-back">
            <motion.p initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
              {content}
            </motion.p>
          </div>
        </div>
      </motion.div>
    </>
  )
}

const UnderHero = () => {
  const [currentItem, setCurrentItem] = useState(null)

  return (
    <section className="under-hero">
      <h1>Our Top Priorities:</h1>
      <div className="benefit-cards-container">
        <motion.div animate class="columns">
          {itemCards.map(item => (
            <UnderHeroItem
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
        <motion.div animate class="columns">
          {itemCardsBottom.map(item => (
            <UnderHeroItem
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
    content: "The best way",
    color: "h-blue",
  },
  {
    icon: faTachometerAlt,
    text: "Speed",
    content: "This is filler content for now.",
    color: "h-red",
  },
  {
    icon: faChartLine,
    text: "SEO",
    content: "This is filler content for now.",
    color: "h-orange",
  },
]

const itemCardsBottom = [
  {
    icon: faDonate,
    text: "Cost",
    content: "This is filler content for now.",
    color: "h-green",
  },
  {
    icon: faUniversalAccess,
    text: "Accessibility",
    content: "This is filler content for now.",
    color: "h-yellow",
  },
  {
    icon: faUserCheck,
    text: "Ease of Use",
    content: "This is filler content for now.",
    color: "h-purple",
  },
]

export default UnderHero
