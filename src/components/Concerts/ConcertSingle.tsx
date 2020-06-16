import React from "react";
import styled from "styled-components/macro";
import { BREAKPOINT_MOBILE, FONT_SIZE_MEDIUM } from "../../constants/constants";
import { FONT_SIZE_LARGE } from "../../constants/constants";
import ActionButtonMaroon from "../Buttons/ActionButtonMaroon";
import ShareButtons from "../Buttons/ShareButtons";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "./ConcertCard";
import { getDateObject, hasDatePassed } from "../../utils/dateTimeUtils";
import DateTime from "./DateTime";
import MeridianAddressInfo from "./MeridianAddressInfo";
// import { primaryMaroon } from "../../constants/colors";

const ConcertSingleStyles = styled.div`
  .title {
    text-align: center;
    padding: 1em 0;
    font-weight: 900;
    font-size: 50px;
  }

  .generalInfoBlock {
    display: flex;
    padding: 0 5em;

    .generalInfoGrid {
      display: grid;
      grid-template-columns: 50% 50%;
      width: 50%;
    }

    img {
      max-width: 50%;
      width: 100%;
    }

    .generalInfo {
      background-color: black;
      color: white;
      padding: 3em;

      .buyTicketsButton {
        button {
          width: 100%;
        }
      }

      .infoHeader {
        font-weight: 900;
        font-size: ${FONT_SIZE_LARGE - 2}px;
        padding-bottom: 5px;
      }

      .info {
        padding-bottom: 1em;
        font-size: ${FONT_SIZE_MEDIUM - 4}px;

        a {
          color: white;
          text-decoration: none;
        }

        /* Override DateTime styles */
        div[class^="DateTime"] {
          justify-content: left !important;

          a {
            color: white !important;
          }
        }
      }
    }
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    .title {
      font-size: ${FONT_SIZE_LARGE}px;
    }

    .generalInfoBlock {
      padding: 0 1em;
      flex-direction: column;

      img,
      .generalInfo {
        width: 100%;
        max-width: 100%;
      }
    }
  }
`;

const HeaderInfo = ({ header, info }: { header: string; info: any }) => {
  return (
    <>
      <div className="infoHeader">{header}</div>
      <div className="info">{info}</div>
    </>
  );
};

export default ({
  imgPath,
  title,
  description,
  timeDates,
  buyTickets,
}: ConcertProps) => {
  const { t } = useTranslation("Concerts");
  const cancelled = description?.includes(t("cancelled"));
  let hasEventPassed = false;
  if (!cancelled) {
    const lastConcertDateString = timeDates[timeDates.length - 1]?.date || "";
    const lastConcertDate = getDateObject(lastConcertDateString);
    hasEventPassed = hasDatePassed(lastConcertDate);
  }

  const disabled = hasEventPassed || cancelled;
  const actionButtonTitle = cancelled
    ? t("cancelledShort")
    : hasEventPassed
    ? t("eventPassed")
    : t("buyTickets");

  return (
    <ConcertSingleStyles>
      <div className="title">{title}</div>
      <div className="generalInfoBlock">
        <img src={imgPath} alt={title} title={title} />
        <div className="generalInfoGrid">
          <div className="generalInfo">
            <HeaderInfo
              header="When"
              info={timeDates?.map((dateTime) => (
                <DateTime key={dateTime.date} {...dateTime} />
              ))}
            />
            <HeaderInfo header={t("where")} info={<MeridianAddressInfo />} />
            <HeaderInfo header={t("language")} info={t("lang-val")} />
            <HeaderInfo header={t("age")} info={t("age-val")} />
          </div>
          <div className="generalInfo">
            <HeaderInfo header={t("price")} info="datetime" />
            <div className="buyTicketsButton info">
              <ActionButtonMaroon
                link={buyTickets || ""}
                name={actionButtonTitle}
                disabled={disabled}
              />
            </div>
            <HeaderInfo
              header="Share"
              info={<ShareButtons url={window.location.href} size={50} />}
            />
          </div>
        </div>
      </div>
    </ConcertSingleStyles>
  );
};
