import React from "react";
import Header from "../components/header";
import Layout from "../components/layout";
import { graphql } from "gatsby";

export default function Home(props) {
  console.log("props", props);
  return (
    <Layout>
      <Header headerText="Amazing Pandas Eating Things" />
      <h4>{props.data.allMarkdownRemark.totalCount} Post(s)</h4>
      <img src="https://source.unsplash.com/random/400x200" alt="Random img." />
      {props.data.allMarkdownRemark.edges.map(({ node }) => (
        <div key={node.id}>
          <h3>
            {node.frontmatter.title} <span>— {node.frontmatter.date}</span>
          </h3>
          <p>{node.excerpt}</p>
        </div>
      ))}
    </Layout>
  );
}

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date
          }
          excerpt
        }
      }
    }
  }
`;
