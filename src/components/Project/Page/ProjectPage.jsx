import React from "react";
import { graphql } from "gatsby";
import SEO from "../../Layout/SEO";
import ProjectHero from "./ProjectHero";
import ProjectIntro from "./ProjectIntro";
import ProjectContent from "./ProjectContent";
import ContactForm from "../../Contact/ContactForm";
import ContactCard from "../../Contact/ContactCard";
import { ContactContainer } from "../../Common/Container";

const postLayout = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const {
    client,
    title,
    color,
    outline,
    link,
    content,
    featuredimage,
  } = frontmatter;

  return (
    <>
      <SEO title={client} />
      <ProjectHero
        title={title}
        client={client}
        color={color}
        image={featuredimage.childImageSharp.fluid}
      />
      <ProjectIntro copy={outline} />
      <ProjectContent client={client} content={content} color={color} />
      <ContactContainer color={color} client={client}>
        <ContactCard
          link={link}
          title="Want to know more?"
          copy="Take a look at the project or get say hello!"
        />
        <ContactForm cname="Contact Form" />
      </ContactContainer>
    </>
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
        outline
        link
        featuredimage {
          childImageSharp {
            fluid(maxWidth: 1920, quality: 80) {
              ...GatsbyImageSharpFluid
            }
          }
        }
        content {
          video
          title
          copy
          layout
          image {
            childImageSharp {
              fluid(maxWidth: 1920, quality: 80) {
                ...GatsbyImageSharpFluid
              }
            }
          }
        }
      }
    }
  }
`;

export default postLayout;
