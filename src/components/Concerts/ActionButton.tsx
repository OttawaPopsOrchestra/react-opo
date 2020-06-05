import React from "react";
import { Link } from "react-router-dom";
import { Button } from "@material-ui/core";
import styled from "styled-components/macro";
import { maroon } from "../../constants/colors";
import { FONT_SIZE_SMALL } from "../../constants/constants";

const ReadMoreStyledButton = styled(Button)`
  a {
    text-decoration: none;
    color: ${maroon};
    font-size: ${FONT_SIZE_SMALL - 2}px;
    font-weight: 700;
  }

  &&& {
    &:hover,
    &:disabled {
      background-color: ${maroon};

      a {
        color: white;
      }
    }
  }
  border: 2px ${maroon} solid !important;
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
    <ReadMoreStyledButton disabled={disabled}>
      <Link to={`/${link}`}>{name}</Link>
    </ReadMoreStyledButton>
  );
};
