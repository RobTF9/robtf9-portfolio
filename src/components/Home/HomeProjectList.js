import React from "react";
import { graphql, useStaticQuery } from "gatsby";
import ProjectCard from "../Common/ProjectCard";
import styled from "styled-components";

const LISTING_QUERY = graphql`
  query ProjectListing {
    allMarkdownRemark(limit: 4) {
      edges {
        node {
          frontmatter {
            title
            client
            slug
            color
          }
        }
      }
    }
  }
`;

const ListContainer = styled.div`
  position: relative;
  grid-column: 3 / 11;
  display: grid;
`;

const HomeProjectList = () => {
  const { allMarkdownRemark } = useStaticQuery(LISTING_QUERY);
  return (
    <ListContainer>
      {allMarkdownRemark.edges.map(({ node }) => (
        <ProjectCard
          client={node.frontmatter.client}
          color={node.frontmatter.color}
          title={node.frontmatter.title}
          slug={node.frontmatter.slug}
        />
      ))}
    </ListContainer>
  );
};

export default HomeProjectList;
