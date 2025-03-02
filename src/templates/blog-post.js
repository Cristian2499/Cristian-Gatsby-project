import React from "react";
import { graphql, Link } from "gatsby";
import "bootstrap/dist/css/bootstrap.min.css";

const BlogPostTemplate = ({ data }) => {
  const post = data.markdownRemark;

  return (
    <div className="container py-5">
      <article className="mx-auto" style={{ maxWidth: "800px" }}>
        <h1 className="display-4">{post.frontmatter.title}</h1>
        <p className="text-muted">{post.frontmatter.date}</p>
        <div
          className="content"
          dangerouslySetInnerHTML={{ __html: post.html }}
        />
        <Link to="/" className="btn btn-secondary mt-4">
          Volver al blog
        </Link>
      </article>
    </div>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`;

export default BlogPostTemplate;

