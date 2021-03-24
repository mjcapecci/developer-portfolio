import React from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import {
  faDesktop,
  faCogs,
  faTools,
  faBoxes,
} from "@fortawesome/free-solid-svg-icons"

const SkillCard = ({ skill }) => {
  return (
    <div className="skill-card">
      <div className="the-card">
        <div className="the-card-front">
          <FontAwesomeIcon icon={skill.icon} size="2x" />
          <h3 className="card-title">{skill.title}</h3>
          <div className="skill-benefits">
            <div className="skill-list">
              {skill.items.map(item => (
                <li className="skill-list-item">{item}</li>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

const Skills = () => {
  const skillList = [
    {
      title: "Front End",
      items: [
        "JavaScript | TypeScript",
        "React | Redux",
        "CSS3 | SCSS",
        "Bootstrap | Materialize",
        "HTML5",
      ],
      icon: faDesktop,
    },
    {
      title: "Back End",
      items: [
        "Node.js | Express",
        "C# / ASP.NET Core",
        "PHP",
        "MySQL | PostgreSQL",
        "MongoDB | Mongoose",
      ],
      icon: faCogs,
    },
    {
      title: "Tooling",
      items: [
        "NPM | Pip",
        "Git | GitHub",
        "Enzyme | Jest | Cypress",
        "Webpack",
        "Babel",
      ],
      icon: faTools,
    },
    {
      title: "Other",
      items: [
        "Python",
        "Gatsby | Next.js",
        "WordPress | Shopify",
        "React Native",
        "Unity",
      ],
      icon: faBoxes,
    },
  ]
  return (
    <section className="skills" id="skills">
      <h2 className="centered-title-h2">Skills:</h2>
      <div className="skills-cards-container">
        {skillList.map(skill => {
          return <SkillCard skill={skill} />
        })}
      </div>
    </section>
  )
}

export default Skills
