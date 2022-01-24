import React from "react";
import styled from "styled-components/macro";
import { Button } from "@mui/material";
import { useTranslation } from "react-i18next";
import { primaryMaroon } from "../../constants/colors";
import { FONT_SIZE_SMALL, BREAKPOINT_MOBILE } from "../../constants/constants";
import SendIcon from "@mui/icons-material/Send";

const SubscribeButtonStyles = styled(Button)`
  &&& {
    color: white;
    background-color: ${primaryMaroon};
    font-size: ${FONT_SIZE_SMALL}px;
    padding: 10px 15px;

    .MuiSvgIcon-root {
      padding-left: 10px;
    }

    &:hover {
      background-color: white;
      color: ${primaryMaroon};
    }

    border: 2px ${primaryMaroon} solid !important;
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

export default function SubscribeButton() {
  const { t } = useTranslation("Footer");

  return (
    <SubscribeButtonStyles>
      {t("subscribe")}
      <SendIcon />
    </SubscribeButtonStyles>
  );
}
