import React from "react";
// import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import { primaryMaroon } from "../../constants/colors";
import { FONT_SIZE_SMALL } from "../../constants/constants";

const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    color: ${primaryMaroon};
    font-size: ${FONT_SIZE_SMALL - 2}px;
    font-weight: 700;
  }

  &&& {
    &:hover,
    &:disabled {
      background-color: ${primaryMaroon};

      a {
        color: white;
      }
    }
  }
  border: 2px ${primaryMaroon} solid !important;
`;

export default ({
  link,
  name,
  disabled = false,
}: {
  link: string;
  name: string;
  disabled?: boolean;
}) => {
  return (
    <StyledButton disabled={disabled}>
      <a href={link}>{name}</a>
    </StyledButton>
  );
};
