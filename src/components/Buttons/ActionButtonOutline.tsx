import { Button } from "@mui/material";
import React from "react";
import styled from "styled-components/macro";
import { primaryMaroon } from "../../constants/colors";
import { FONT_SIZE_SMALL } from "../../constants/constants";

export default function ActionButtonOutline({
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
const StyledButton = styled(Button)`
  a {
    text-decoration: none;
    color: ${primaryMaroon};
    font-size: ${FONT_SIZE_SMALL - 2}px;
    font-weight: 700;
  }

  &&& {
    border: 2px ${primaryMaroon} solid !important;
    background: white;
    &:hover,
    &:disabled {
      background-color: ${primaryMaroon};

      a {
        color: white;
      }
    }
  }
`;
