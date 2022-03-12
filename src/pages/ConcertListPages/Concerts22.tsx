import React from "react";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "../../components/Concerts/ConcertCard";
import ConcertList from "../../components/Concerts/ConcertList";

export default function Concerts22() {
  const { t } = useTranslation(["Concerts22", "Concerts"]);

  const concerts = [
    {
      imgPath: "img/concerts/concerts-full/2019-2020/VGSDetail.jpeg",
      title: t("vgsTitle"),
      timeDates: [
        {
          date: t("vgsConcert1Date"),
          time: t("vgsConcert1Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0320N&linkID=centrepointe&shopperContext=&caller=&appCode=",
        },
        {
          date: t("vgsConcert2Date"),
          time: t("vgsConcert2Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0320N&linkID=centrepointe&shopperContext=&caller=&appCode=",
        },
      ],
      buyTickets:
        "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0320N&linkID=centrepointe&shopperContext=&caller=&appCode=",
      readMore: "/programming/videogamesymphony",
    },
    {
      imgPath: "img/concerts/concerts-full/2019-2020/BroadwayDetail.png",
      title: t("broadwayTitle"),
      timeDates: [
        {
          date: t("broadwayConcert1Date"),
          time: t("broadwayConcert1Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=&caller=&appCode=",
        },
        {
          date: t("broadwayConcert2Date"),
          time: t("broadwayConcert2Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=&caller=&appCode=",
        },
      ],
      buyTickets:
        "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=&caller=&appCode=",
      readMore: "/programming/popsonbroadway",
    },
  ] as ConcertProps[];

  return (
    <ConcertList
      concerts={concerts}
      imgPath="/img/concerts/concert_banner.jpg"
      title="Concerts 2022 - 2023"
    />
  );
}
