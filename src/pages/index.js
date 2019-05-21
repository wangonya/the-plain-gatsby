import React from "react"
import { Link, graphql } from "gatsby"

import DefaultLayout from "../layouts/default"
import Image from "../components/image"
import SEO from "../components/seo"

const IndexPage = ({ data }) => {
  const posts = data.allMarkdownRemark.edges
  const postsList = posts.map(post => (
    <li key={post.node.id}>
      <div className="post-date code">{post.node.frontmatter.date}</div>
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
          excerpt(pruneLength: 250)
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
