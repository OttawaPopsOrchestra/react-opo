import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import { secondaryPurple } from "../../constants/colors";
import { FONT_SIZE_EXTRA_SMALL } from "../../constants/constants";

const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    font-family: "Helvetica", Helvetica, Arial, sans-serif;
    letter-spacing: 1.8px;
  }

  &&& {
    background-color: white;
    border: 2px solid ${secondaryPurple} !important;
    color: ${secondaryPurple} !important;

    font-size: ${FONT_SIZE_EXTRA_SMALL + 2}px;
    font-weight: 700;
    padding: 0.7rem 2.14rem;

    border-radius: 10px !important;
    box-shadow: 0 2px 5px 0 rgba(0, 0, 0, 0.16),
      0 2px 10px 0 rgba(0, 0, 0, 0.12);

    &:hover,
    &:disabled {
      background: ${secondaryPurple};
      border: 2px solid ${secondaryPurple} !important;
      background-color: ${secondaryPurple} !important;
      color: white !important;
      opacity: 1;

      a {
        color: white;
      }
    }
  }
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
