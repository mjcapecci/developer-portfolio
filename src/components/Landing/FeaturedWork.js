import React, { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faChartLine,
  faTachometerAlt,
  faDonate,
  faUniversalAccess,
  faUserCheck,
  faCog,
} from "@fortawesome/free-solid-svg-icons"

import QPI from "../../images/appLogos/qpi.svg"
import Frontier from "../../images/appLogos/frontier.png"
import Learnalysis from "../../images/appLogos/learnalysis.png"
import StLuke from "../../images/appLogos/st-luke.svg"
import Contractr from "../../images/appLogos/contractr.svg"

import { motion } from "framer-motion"

const WorkItem = ({
  icon,
  image,
  width,
  stack,
  text,
  content,
  onClick,
  isOpen,
  color,
}) => {
  return (
    <>
      <motion.div animate onClick={onClick} class="benefit-card">
        {" "}
        <div className={isOpen ? "the-card-active" : "the-card"}>
          <div className={`the-card-front ${color}`}>
            <FontAwesomeIcon icon={icon} size="3x" />
            <img
              src={image}
              width={width}
              alt={text}
              style={{ margin: "0 2rem" }}
            ></img>
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
              image={item.image}
              width={item.width}
              stack={item.stack}
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
      <div className="portfolio-link">
        <a
          href="https://github.com/mjcapecci/developer-portfolio"
          target="_blank"
          rel="nofollow noopener"
        >
          <FontAwesomeIcon icon={faCog} size="1x" /> Portfolio Source
        </a>
      </div>
    </section>
  )
}

const itemCards = [
  {
    icon: null,
    image: QPI,
    type: "commercial",
    text: "Quick Product Import",
    stack: "React, Redux, Shopify Polaris, Node.js, Express, MongoDB",
    content:
      "New development methods eliminate many common security risks. <a href='post/whats-so-good-about-static-site-generators' class='light-link'>Learn More</a>",
    color: "h-blue",
  },
  {
    icon: null,
    image: StLuke,
    type: "commercial",
    text: "St. Luke Business Directory",
    stack: "React, Redux, Bootstrap, Node.js, Express, MongoDB",
    content:
      "A FAST website leads to conversions. I build fast products with state-of-the-art tech.",
    color: "h-red",
  },
  {
    icon: null,
    image: Frontier,
    type: "commercial",
    text: "Frontier Web Development",
    width: 210,
    stack: "React, Gatsby, Node.js, MongoDB, Shopify, Python",
    content: "A website must be easy to use to accomplish its goal.",
    color: "h-purple",
  },
  {
    icon: faChartLine,
    type: "personal",
    text: "[Next.js Full-stack Project]",
    stack: "Next.js, TypeScript, Serverless, Firebase",
    content:
      "Get found! Careful search engine optimization will put your name on your customers' screens.",
    color: "h-orange",
  },
  {
    icon: null,
    image: Learnalysis,
    width: 320,
    type: "personal",
    text: "Learnalysis",
    stack: "React, Redux, Materialize CSS, Node.js, Express, MongoDB",
    content:
      "Server costs should be low. In many cases, I am able to host products for FREE on Netlify.",
    color: "h-green",
  },
  {
    icon: null,
    image: Contractr,
    type: "personal",
    text: "Contractr.io",
    stack: "React, Redux, Bootstrap, Node.js, Express, MySQL",
    content: "A great product is accessible to everyone, everywhere.",
    color: "h-yellow",
  },
]

export default FeaturedWork
