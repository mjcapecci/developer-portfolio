const path = require("path")
const { slash } = require(`gatsby-core-utils`)

exports.createPages = async ({ actions, graphql, reporter }) => {
  const { createPage } = actions
  const projectTemplate = require.resolve(`./src/templates/project.js`)
  const postTemplate = require.resolve(`./src/templates/post.js`)
  const projects = await graphql(`
    {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___position] }
        limit: 1000
      ) {
        edges {
          node {
            html
            frontmatter {
              slug
              title
              liveLink
              sourceLink
            }
          }
        }
      }
    }
  `)

  const posts = await graphql(`
    {
      allMarkdownRemark(
        filter: { frontmatter: { slug: { regex: "/posts/" } } }
        sort: { fields: frontmatter___date, order: ASC }
      ) {
        edges {
          node {
            id
            html
            timeToRead
            frontmatter {
              slug
              date
              title
              summary
              banner {
                childImageSharp {
                  fluid(fit: COVER, quality: 70) {
                    src
                  }
                }
              }
            }
          }
        }
      }
    }
  `)
  // Handle errors
  if (projects.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  projects.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: projectTemplate,
      context: {
        slug: node.frontmatter.slug,
        title: node.frontmatter.title,
        liveLink: node.frontmatter.liveLink,
        sourceLink: node.frontmatter.sourceLink,
        html: node.html,
      },
    })
  })

  const blogDirectoryTemplate = path.resolve("./src/templates/blogDirectory.js")
  if (posts.errors) {
    reporter.panicOnBuild(`Error while running GraphQL query.`)
    return
  }
  posts.data.allMarkdownRemark.edges.forEach(({ node }) => {
    createPage({
      path: node.frontmatter.slug,
      component: postTemplate,
      context: {
        id: node.id,
        title: node.frontmatter.title,
        date: node.frontmatter.date,
        summary: node.frontmatter.summary,
        timeToRead: node.timeToRead,
        banner: node.frontmatter.banner,
        content: node.html,
      },
    })
  })
  const postsPerPage = 5
  const numberOfPages = Math.ceil(
    posts.data.allMarkdownRemark.edges.length / postsPerPage
  )

  Array.from({ length: numberOfPages }).forEach((page, i) => {
    createPage({
      path: i === 0 ? `/blog` : `/blog/${i + 1}`,
      component: slash(blogDirectoryTemplate),
      context: {
        posts: posts.data.allMarkdownRemark.edges.slice(
          i * postsPerPage,
          i * postsPerPage + postsPerPage
        ),
        numberOfPages,
        currentPage: i + 1,
      },
    })
  })
}
