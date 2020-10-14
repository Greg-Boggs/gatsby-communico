import React from "react"
import { graphql } from "gatsby"

export default function Home({ data }) {
  return (
  <ul>
    {data.allNodeEvent.edges.map(({ node }) => (
        <li key={node.fields.slug}>
          <a href={node.fields.slug}>{node.title}</a>
        </li>
    ))}
  </ul>
  )
}
export const pageQuery = graphql`
 {
  allNodeEvent {
    edges {
      node {
        title
        drupal_internal__nid
        created(formatString: "DD-MMM-YYYY")
      }
    }
  }
}
`