import React from "react";
import styled from "styled-components/macro";
import { Button } from "@material-ui/core";
import { useTranslation } from "react-i18next";
import { maroon } from "../../constants/colors";
import { FONT_SIZE_SMALL, BREAKPOINT_MOBILE } from "../../constants/constants";
import SendIcon from "@material-ui/icons/Send";

const SubscribeButtonStyles = styled(Button)`
  &&& {
    color: white;
    background-color: ${maroon};
    font-size: ${FONT_SIZE_SMALL}px;
    padding: 10px 15px;

    .MuiSvgIcon-root {
      padding-left: 10px;
    }

    &:hover {
      background-color: white;
      color: ${maroon};
    }

    border: 2px ${maroon} solid !important;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    &&& {
      font-size: ${FONT_SIZE_SMALL - 2}px;
      padding: 5px;

      .MuiSvgIcon-root {
        padding-left: 6px;
      }
    }
  }
`;

export default () => {
  const { t } = useTranslation("Footer");

  return (
    <SubscribeButtonStyles>
      {t("subscribe")}
      <SendIcon />
    </SubscribeButtonStyles>
  );
};
