import React, { useState } from "react"
import { Link } from "gatsby"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faCog } from "@fortawesome/free-solid-svg-icons"

import QPI from "../../images/appLogos/qpi.svg"
import Frontier from "../../images/appLogos/frontier.png"
import Learnalysis from "../../images/appLogos/learnalysis.png"
import StLuke from "../../images/appLogos/st-luke.svg"
import Contractr from "../../images/appLogos/contractr.svg"
import ParkAve from "../../images/appLogos/park-ave.png"

import { motion } from "framer-motion"

const WorkItem = ({
  image,
  width,
  text,
  link,
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
            <div className="project-buttons">
              <Link to={`/projects/${link}`}>Learn More</Link>
            </div>
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
              image={item.image}
              width={item.width}
              stack={item.stack}
              text={item.text}
              link={item.link}
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
    image: QPI,
    text: "Quick Product Import",
    link: "quick-product-import",
    content:
      "A public Shopify application for helping merchants upload their store inventories via .csv import. Built with React, Node.js, Express, and MongoDB.",
  },
  {
    image: StLuke,
    text: "St. Luke Business Directory",
    link: "st-luke-business-directory",
    content:
      "A business directory made for connecting business owners with members of the St. Luke community in the Greater Philadelphia area. Built with React, Node.js, Express, and MongoDB.",
  },
  {
    image: Frontier,
    text: "Frontier Web Development",
    link: "frontier-web-development",
    width: 210,
    content:
      "A small group of developers from the Chicagoland area who develop Shopify applications and themes.",
  },
  {
    image: ParkAve,
    width: 300,
    text: "Park Avenue Dental Care",
    link: "park-avenue-dental-care",
    content:
      "A website developed for a local dental practice. Built purely with HTML, CSS, and vanilla JavaScript, and hosted on Netlify.",
  },
  {
    image: Contractr,
    type: "personal",
    text: "Contractr.io",
    link: "contractr",
    content:
      "An application for helping users find nearby contractors to help in completing tasks of any variety. Developed with React, Node.js, Express, and MySQL.",
    color: "h-yellow",
  },
  {
    image: Learnalysis,
    width: 320,
    type: "personal",
    text: "Learnalysis",
    link: "learnalysis",
    content:
      "An application for helping users track their progress across all of their learning endeavors. Build with React, Node.js, Express, and MongoDB.",
    color: "h-green",
  },
]

export default FeaturedWork
