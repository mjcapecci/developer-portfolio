import React, { useState } from "react"
// import { graphql, useStaticQuery } from "gatsby"
import SearchResultItem from "./SearchResultItem"

const Search = () => {
  const emptyQuery = ""
  const [state, setState] = useState({
    filteredData: [],
    query: emptyQuery,
  })

  const handleSearch = e => {
    const query = e.target.value
    const posts = [] // TODO: This must be updated later
    const filteredData = posts.filter(post => {
      const { title, content, categories } = post.node
      return (
        title.toLowerCase().includes(query.toLowerCase()) ||
        content.toLowerCase().includes(query.toLowerCase()) ||
        categories[0].name.toLowerCase().includes(query.toLowerCase())
      )
    })
    query.length > 0
      ? setState({
          query,
          filteredData,
        })
      : setState({
          query: emptyQuery,
          filteredData: [],
        })
  }

  if (state.query.length > 0) {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search posts..."
          onChange={e => {
            handleSearch(e)
          }}
        ></input>
        <ul className="search-results">
          {state.filteredData.map(result => (
            <SearchResultItem data={result} />
          ))}
        </ul>
      </div>
    )
  } else {
    return (
      <div className="search">
        <input
          type="text"
          placeholder="Search posts..."
          onChange={e => {
            handleSearch(e)
          }}
        ></input>
      </div>
    )
  }
}

export default Search
