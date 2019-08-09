import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Company>{experience.title}</Company>
      <Role>{experience.role}</Role>
      <p>{experience.description}</p>
    </Card>
  );
};

ExperienceCard.propTypes = {
  experience: PropTypes.object.isRequired,
};

export default ExperienceCard;

const Card = styled.article`
  background-color: ${colors.white};
  color: ${colors.black};
  position: relative;
  cursor: pointer;
  padding: 2rem;
  padding-bottom: 4rem;

  ${breakpoints.desktop} {
    padding: 0 5rem 5rem 5rem;
    padding-bottom: 30%;
  }
`;

const Company = styled.h4`
  font-weight: 500;
  color: ${colors.blue};
`;

const Role = styled.h3`
  margin-bottom: 1rem;
`;
