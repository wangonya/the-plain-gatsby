import React from "react"
import { graphql } from "gatsby"

import DefaultLayout from "../layouts/default"

const PostTemplate = ({ data }) => {
  const { markdownRemark } = data
  const { frontmatter, html } = markdownRemark
  return (
    <DefaultLayout>
      <article>
        <div className="center">
          <h1 className="title">{frontmatter.title}</h1>
          <span className="code">
            <small>{frontmatter.date}</small>
          </span>
        </div>
        <div className="divider" />
        <div dangerouslySetInnerHTML={{ __html: html }} />
      </article>
    </DefaultLayout>
  )
}

export default PostTemplate

export const pageQuery = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        date(formatString: "MMMM DD, YYYY")
        title
      }
    }
  }
`
