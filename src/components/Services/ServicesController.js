import React from "react"
import { graphql, useStaticQuery } from "gatsby"

const ServiceCard = ({ service }) => {
  const cardList = service.acf.services_list_items
    ? service.acf.services_list_items.split(",")
    : null

  return (
    <div class="column service-card">
      {" "}
      <div className={"the-card"}>
        <div className={`the-card-front`}>
          <h2 dangerouslySetInnerHTML={{ __html: service.title }}></h2>
          <img
            src={service.featured_media.source_url}
            alt={`${service.title}`}
          />
          <p
            className="service-description"
            dangerouslySetInnerHTML={{ __html: service.content }}
          ></p>
          <div className="service-benefits">
            <ul className="service-list">
              {cardList != null &&
                cardList.map(item => (
                  <li className="service-list-item">{item}</li>
                ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  )
}

const ServicesController = () => {
  const { allWordpressWpServices } = useStaticQuery(graphql`
    query {
      allWordpressWpServices {
        edges {
          node {
            title
            content
            excerpt
            acf {
              services_list_items
            }
            featured_media {
              source_url
            }
          }
        }
      }
    }
  `)

  return (
    <section className="services">
      <div className="services-cards-container">
        <div animate class="columns">
          {allWordpressWpServices.edges.map(item => (
            <ServiceCard service={item.node} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default ServicesController