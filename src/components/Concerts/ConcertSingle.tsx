import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE } from "../../constants/constants";
import { Typography } from "@material-ui/core";
import { FONT_SIZE_LARGE } from "../../constants/constants";

const ConcertSingleStyles = styled.div`
  h2 {
    text-align: center;
    padding: 1em 0;
    font-weight: 900;
    margin-bottom: 0;
  }

  .generalInfo {
    padding: 0 2em;
    display: grid;
    grid-template-columns: auto auto;

    img {
      width: 100%;
      max-width: 1000px;
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    h2 {
      font-size: ${FONT_SIZE_LARGE}px;
    }

    .generalInfo {
      grid-template-columns: auto;
    }
  }
`;

export default () => {
  return (
    <ConcertSingleStyles>
      <Typography variant="h2" gutterBottom>
        Video Game Symphony
      </Typography>
      <div className="generalInfo">
        <img
          src="/img/concerts/concerts-single/2019-2020/VGSHero.jpg"
          alt="VGS"
          title="VGS"
        />
        <div>blach blach</div>
      </div>
    </ConcertSingleStyles>
  );
};
