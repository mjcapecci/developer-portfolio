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

import { motion, AnimatePresence, AnimateSharedLayout } from "framer-motion"

function Content({ content }) {
  return (
    <motion.div animate>
      <motion.span
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        {content}
      </motion.span>
    </motion.div>
  )
}

const UnderHeroItem = ({ icon, text, content, onClick, isOpen, color }) => {
  return (
    <>
      <motion.div animate onClick={onClick} class="column benefit-card">
        {" "}
        <p className="card-text">{text}</p>
        <FontAwesomeIcon icon={icon} size="3x" />
      </motion.div>
      <motion.div className="card-content">
        <AnimatePresence>
          {isOpen && <Content content={content} />}
        </AnimatePresence>
      </motion.div>
    </>
  )
}

const UnderHero = () => {
  const [currentItem, setCurrentItem] = useState(null)

  return (
    <section className="under-hero">
      <h1>Our Top Priorities:</h1>
      <div className="benefot-cards-container-container">
        <div className="benefit-cards-container">
          <AnimateSharedLayout>
            <motion.div animate class="columns">
              {itemCards.map(item => (
                <UnderHeroItem
                  icon={item.icon}
                  text={item.text}
                  content={item.content}
                  isOpen={currentItem === item.text}
                  onClick={() => {
                    setCurrentItem(
                      currentItem === item.text ? false : item.text
                    )
                  }}
                />
              ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
        <div className="benefit-cards-container">
          <AnimateSharedLayout>
            <motion.div animate class="columns">
              {itemCardsBottom.map(item => (
                <UnderHeroItem
                  icon={item.icon}
                  text={item.text}
                  content={item.content}
                  isOpen={currentItem === item.text}
                  onClick={() => {
                    setCurrentItem(
                      currentItem === item.text ? false : item.text
                    )
                  }}
                />
              ))}
            </motion.div>
          </AnimateSharedLayout>
        </div>
      </div>
    </section>
  )
}

const itemCards = [
  {
    icon: faLock,
    text: "Security",
    content: "This is filler content for now.",
  },
  {
    icon: faTachometerAlt,
    text: "Speed",
    content: "This is filler content for now.",
  },
  {
    icon: faUserCheck,
    text: "SEO",
    content: "This is filler content for now.",
  },
]

const itemCardsBottom = [
  {
    icon: faDonate,
    text: "Cost",
    content: "This is filler content for now.",
  },
  {
    icon: faUniversalAccess,
    text: "Accessibility",
    content: "This is filler content for now.",
  },
  {
    icon: faChartLine,
    text: "Ease of Use",
    content: "This is filler content for now.",
  },
]

export default UnderHero
