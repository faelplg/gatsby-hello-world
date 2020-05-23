import React from "react"

import { useStaticQuery, Link, graphql } from "gatsby"

const Layout = props => {
  const data = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
          }
        }
      }
    `
  )
  return (
    <div
      style={{
        margin: "0 auto",
        maxWidth: "700px",
        padding: "2em",
        paddingTop: "1.5em",
      }}
    >
      <Link to={`/`}>
        <h3
          style={{
            marginBottom: "2em",
            display: "inline-block",
            fontStyle: "normal",
            marginTop: "0",
          }}
        >
          {data.site.siteMetadata.title}
        </h3>
      </Link>
      <Link to="/contact/" style={{ float: "right", margin: "0 0.5em" }}>
        Contact
      </Link>
      <Link to={`/about/`} style={{ float: "right", margin: "0 0.5em" }}>
        About
      </Link>
      {props.children}
    </div>
  )
}

export default Layout
