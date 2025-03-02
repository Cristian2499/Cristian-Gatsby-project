import React from "react";
import { Link, graphql } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";
import "./styles.css"; 

const BlogIndex = ({ data }) => {
  const posts = data.allMarkdownRemark.edges;

  return (
    <div className="container py-5">
      <h1 className="mb-4 text-center">Hola Mundo Blog</h1>
      <div className="row">
        {posts.map(({ node }) => (
          <div key={node.id} className="col-md-4 mb-4">
            <div className="card h-100 shadow-sm">
              <div className="card-body d-flex flex-column">
                <h5 className="card-title">{node.frontmatter.title}</h5>
                <p className="card-text">{node.frontmatter.date}</p>
                <p className="card-text">{node.excerpt}</p>
                <Link to={node.fields.slug} className="btn btn-primary mt-auto">
                  Leer más
                </Link>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    allMarkdownRemark(sort: { frontmatter: { date: DESC } }) {
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MMMM DD, YYYY")
          }
          excerpt
        }
      }
    }
  }
`;
