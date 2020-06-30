import React from "react"
import Layout from "../components/Default/layout"

const Post = ({ pageContext }) => {
  return (
    <Layout>
      <h1 dangerouslySetInnerHTML={{ __html: pageContext.title }}></h1>
      <div dangerouslySetInnerHTML={{ __html: pageContext.content }} />
    </Layout>
  )
}

export default Post
