import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  // all posts without dates are assumed to be drafts or pages
  // not to be added to postsList
  const posts = data.allMarkdownRemark.edges.filter(
    p => p.node.frontmatter.date !== null
  )
  const postsList = posts.map(post => (
    <li key={post.node.id}>
      <div className="post-date code">
        <small>{post.node.frontmatter.date}</small>
      </div>
      <div className="title">
        <Link to={post.node.fields.slug}>{post.node.frontmatter.title}</Link>
      </div>
    </li>
  ))
  return (
    <DefaultLayout>
      <SEO title="Home" />
      <section>
        <ul>{postsList}</ul>
      </section>
    </DefaultLayout>
  )
}

export default IndexPage

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { order: DESC, fields: [frontmatter___date] }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
          }
        }
      }
    }
  }
`
