const path = require(`path`)
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const result = await graphql(`
    {
      allWordpressPage {
        edges {
          node {
            id
            path
            status
            title
            content
            template
          }
        }
      }
      allWordpressPost {
        edges {
          node {
            id
            date
            path
            slug
            status
            title
            content
            excerpt
            template
          }
        }
      }
    }
  `)

  if (result.errors) {
    throw new Error(result.errors)
  }

  // Access query results via object destructuring
  const { allWordpressPage, allWordpressPost } = result.data

  const pageTemplate = path.resolve(`./src/templates/page.js`)
  const portfolioUnderContentTemplate = path.resolve(
    `./src/templates/portfolioUnderContent.js`
  )
  const servicesUnderContentTemplate = path.resolve(
    `./src/templates/servicesUnderContent.js`
  )
  // The Page ID is prefixed with 'PAGE_'
  allWordpressPage.edges.forEach(edge => {
    function templateType(edge) {
      switch (edge.node.template) {
        case "portfolio_under_content.php":
          return portfolioUnderContentTemplate
        case "services_under_contact.php":
          return servicesUnderContentTemplate
        default:
          return pageTemplate
      }
    }

    createPage({
      path: edge.node.path,
      component: slash(templateType(edge)),
      context: {
        id: edge.node.id,
        status: edge.node.status,
        title: edge.node.title,
        content: edge.node.content,
      },
    })
  })

  const postTemplate = path.resolve(`./src/templates/post.js`)
  const blogDirectoryTemplate = path.resolve(`./src/templates/blogDirectory.js`)
  // The Post ID is prefixed with 'POST_'
  allWordpressPost.edges.forEach(edge => {
    createPage({
      path: "/post" + edge.node.path,
      component: slash(postTemplate),
      context: {
        id: edge.node.id,
        status: edge.node.status,
        title: edge.node.title,
        content: edge.node.content,
      },
    })
  })

  const postsPerPage = 2
  const numberOfPages = Math.ceil(allWordpressPost.edges.length / postsPerPage)

  Array.from({ length: numberOfPages }).forEach((page, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: slash(blogDirectoryTemplate),
      context: {
        posts: allWordpressPost.edges.slice(
          i * postsPerPage,
          i * postsPerPage + postsPerPage
        ),
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}
