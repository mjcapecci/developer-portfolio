import React from "react"
import { Link } from "gatsby"

import { AllHtmlEntities } from "html-entities"

const SearchResultItem = ({ data }) => {
  return (
    <li className="search-result-item">
      <p>
        <Link to={"/post/" + data.node.slug}>
          {AllHtmlEntities.decode(data.node.title)}
        </Link>
      </p>
    </li>
  )
}

export default SearchResultItem
