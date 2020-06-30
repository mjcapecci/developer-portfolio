import React from "react"
import { Link } from "gatsby"

const SearchResultItem = ({ data }) => {
  return (
    <li className="search-result-item">
      <p>
        <Link to={"/post/" + data.node.slug}>{data.node.title}</Link>
      </p>
    </li>
  )
}

export default SearchResultItem
