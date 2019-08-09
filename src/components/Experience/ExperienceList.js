import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import { useSpring, config } from "react-spring";
import Container from "../Common/Container";

const ExperienceList = () => {
  const { allMarkdownRemark } = useStaticQuery(graphql`
    query ExperienceListQuery {
      allMarkdownRemark(
        sort: { order: ASC, fields: [frontmatter___to] }
        filter: { fileAbsolutePath: { regex: "/experience/" } }
      ) {
        edges {
          node {
            frontmatter {
              title
              to
            }
          }
        }
      }
    }
  `);

  const animation = useSpring({
    transform: "translate3d(0, 0rem, 0)",
    from: { transform: "translate3d(0, 15rem, 0)" },
    config: config.molasses,
  });

  return (
    <Container style={animation}>
      {allMarkdownRemark.edges.map(({ node }) => (
        <p key={node.frontmatter.title}>
          {node.frontmatter.title}
          {node.frontmatter.to}
        </p>
      ))}
    </Container>
  );
};

export default ExperienceList;
