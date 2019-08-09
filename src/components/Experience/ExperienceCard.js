import React from "react";
import PropTypes from "prop-types";
import styled from "styled-components";
import colors from "../../shared/colors";
import breakpoints from "../../shared/breakpoints";

const ExperienceCard = ({ experience }) => {
  return (
    <Card>
      <Role>{experience.role}</Role>
      <Company>{experience.title}</Company>
      <Date>
        {experience.from} - {!experience.current ? experience.to : "Present"}
      </Date>
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
  color: ${colors.blue};
`;

const Role = styled.h3``;

const Date = styled.h4`
  margin-bottom: 2rem;
  font-weight: 400;
`;
