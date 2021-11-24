import React from "react";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import { primaryMaroon } from "../../constants/colors";
import { FONT_SIZE_SMALL } from "../../constants/constants";

const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    color: white;
    font-size: ${FONT_SIZE_SMALL - 2}px;
    font-weight: 700;
  }

  &&& {
    border: 2px ${primaryMaroon} solid !important;
    background: ${primaryMaroon};
    &:hover,
    &:disabled {
      background-color: transparent;

      a {
        color: ${primaryMaroon};
      }
    }
  }
`;

export default function ActionButtonMaroon({
  link,
  name,
  disabled = false,
}: {
  link: string;
  name: string;
  disabled?: boolean;
}) {
  return (
    <StyledButton disabled={disabled}>
      <a href={link}>{name}</a>
    </StyledButton>
  );
}
