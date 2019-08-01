import React from "react";
import { graphql } from "gatsby";
import Layout from "../Layout/Layout";
import styled from "styled-components";
import Img from "gatsby-image";
// import ProjectCard from "../Common/ProjectCard";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { edges } = data.allMarkdownRemark;
  const projects = edges.filter(edge => {
    return edge.node.frontmatter.slug !== `${frontmatter.slug}`;
  });
  console.log(projects);

  return (
    <Layout>
      <Hero color={frontmatter.color}>
        <Copy>
          <h4>{frontmatter.client}</h4>
          <h1>{frontmatter.title}</h1>
        </Copy>
        <Img fluid={frontmatter.featuredimage.childImageSharp.fluid} />
      </Hero>
      <Body dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
      {projects.map(({ node }) => {
        return <p key={node.frontmatter.slug}>{node.frontmatter.client}</p>;
      })}
    </Layout>
  );
};

export const query = graphql`
  query ProjectQuery($slug: String!) {
    markdownRemark(frontmatter: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        client
        slug
        color
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1300) {
              ...GatsbyImageSharpFluid_tracedSVG
            }
          }
        }
      }
    }
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            client
            slug
            color
            featuredimage {
              childImageSharp {
                fluid(maxWidth: 1300) {
                  ...GatsbyImageSharpFluid_tracedSVG
                }
              }
            }
          }
        }
      }
    }
  }
`;

export default postLayout;

const Hero = styled.header`
  position: relative;
  grid-column: 1 / -1;
  background-color: ${({ color }) => color};
  display: grid;
  grid-template-columns: repeat(12, 1fr);
  overflow: hidden;

  .gatsby-image-wrapper {
    position: absolute !important;
    bottom: 0;
    right: 0;
    width: 50%;
    height: auto;
  }
`;

const Copy = styled.div`
  grid-column: 3 / 11;
  margin: 15rem 0;
`;

const Body = styled.article`
  grid-column: 3 / 11;
  margin: 15rem 0;

  p {
    margin-bottom: 5rem;
  }

  .image-grid {
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-column-gap: 1rem;
  }
`;
