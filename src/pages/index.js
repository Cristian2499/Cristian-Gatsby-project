import React from "react";
import { Link, graphql } from "gatsby";

const IndexPage = ({ data }) => {
  return (
    <main>
      <h1>Mi Blog</h1>
      <ul>
        {data.allMarkdownRemark.edges.map(({ node }) => (
          <li key={node.id}>
            <Link to={node.fields.slug}>
              {node.frontmatter.title} ({node.frontmatter.date})
            </Link>
          </li>
        ))}
      </ul>
    </main>
  );
};

export const query = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;

export default IndexPage;
