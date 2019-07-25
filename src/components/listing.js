import React from "react";
// import Image from "./image";
import { graphql, useStaticQuery, Link } from "gatsby";

const LISTING_QUERY = graphql`
  query ProjectListing {
    allMarkdownRemark(
      limit: 4
      sort: { order: DESC, fields: [frontmatter___date] }
    ) {
      edges {
        node {
          excerpt
          frontmatter {
            date(formatString: "MMMM DD, YYYY")
            title
            slug
          }
        }
      }
    }
  }
`;

const Listings = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
  return allMarkdownRemark.edges.map(({ node }) => (
    <article key={node.frontmatter.slug}>
      <Link to={`/projects${node.frontmatter.slug}`}>
        <h2>{node.frontmatter.title}</h2>
      </Link>
      <p>{node.frontmatter.date}</p>
      <p>{node.excerpt}</p>
      <Link to={`/projects${node.frontmatter.slug}`}>Read more</Link>
    </article>
  ));
};

export default Listings;
