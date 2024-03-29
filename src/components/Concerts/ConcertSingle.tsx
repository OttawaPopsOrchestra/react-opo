import React from "react";
import styled from "styled-components/macro";
import {
  BREAKPOINT_MOBILE,
  FONT_SIZE_LARGE,
  FONT_SIZE_MEDIUM,
  FONT_SIZE_SMALL,
} from "../../constants/constants";
import ActionButtonMaroon from "../Buttons/ActionButtonMaroon";
import ShareButtons from "../Buttons/ShareButtons";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "./ConcertCard";
import { getDateObject, hasDatePassed } from "../../utils/dateTimeUtils";
import DateTime from "./DateTime";
import MeridianAddressInfo from "./MeridianAddressInfo";
import Playlist from "../Playlist";

const HeaderInfo = ({ header, info }: { header: string; info: any }) => {
  return (
    <>
      <div className="infoHeader">{header}</div>
      <div className="info">{info}</div>
    </>
  );
};

export default function ConcertSingle({
  imgPath,
  title,
  description,
  timeDates,
  buyTickets,
  price,
  spotify,
}: ConcertProps) {
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
            {price && <HeaderInfo header={t("price")} info={price} />}
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
      <div className="concert-description">
        <div>{description}</div>
        <div className="safety">
          <div className="safetyTitle">{t("safety")}</div>
          <div>{t("safety-val")}</div>
        </div>
        {spotify && <Playlist link={spotify} />}
      </div>
    </ConcertSingleStyles>
  );
}

const ConcertSingleStyles = styled.div`
  padding: 0 5em;

  .title {
    text-align: center;
    padding: 1em 0;
    font-weight: 900;
    font-size: 50px;
    font-family: "Quicksand";
  }

  .safety {
    padding: 1em 0;

    .safetyTitle {
      font-size: 26px;
      font-weight: bold;
      padding-bottom: 10px;
    }
  }

  .generalInfoBlock {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(40em, 1fr));

    .generalInfoGrid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(20em, 1fr));
    }

    img {
      width: 100%;
    }

    .generalInfo {
      background-color: black;
      color: white;
      padding: 2em 3em;

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

  .concert-description {
    font-family: "Quicksand";
    padding-top: 2em;
    font-size: ${FONT_SIZE_MEDIUM - 2}px;
  }

  @media (max-width: ${BREAKPOINT_MOBILE}px) {
    padding: 0 1em;

    .title {
      font-size: ${FONT_SIZE_LARGE}px;
    }

    .generalInfoBlock {
      grid-template-columns: auto;

      .generalInfoGrid {
        grid-template-columns: auto;
      }

      img {
        width: 100%;
      }

      .generalInfo:first-child {
        padding-top: 2em;
      }

      .generalInfo {
        padding: 0em 2em;

        .infoHeader {
          font-size: ${FONT_SIZE_MEDIUM - 2}px;
        }

        .info {
          font-size: ${FONT_SIZE_SMALL}px;
        }
      }
    }
  }
`;
