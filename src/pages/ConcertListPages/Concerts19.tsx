import React from "react";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "../../components/Concerts/ConcertCard";
import ConcertList from "../../components/Concerts/ConcertList";

export default () => {
  const { t } = useTranslation(["Concerts19", "Concerts"]);

  const concerts = [
    {
      imgPath: "img/concerts/concerts-full/2019-2020/VGSDetail.jpeg",
      title: t("vgsTitle"),
      timeDates: [
        {
          date: t("vgsConcert1Date"),
          time: t("vgsConcert1Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext",
        },
      ],
      buyTickets:
        "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext",
      readMore: "/2019-2020/videogamesymphony",
    },
    {
      imgPath: "img/concerts/concerts-full/2019-2020/BroadwayDetail.png",
      title: t("broadwayTitle"),
      timeDates: [
        {
          date: t("broadwayConcert1Date"),
          time: t("broadwayConcert1Time"),
          ticketLink:
            "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=undefined&caller=&appCode=",
        },
      ],
      buyTickets:
        "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=undefined&caller=&appCode=",
      readMore: "/2019-2020/popsonbroadway",
    },
    {
      imgPath: "img/concerts/concerts-full/2019-2020/HMW2Detail.png",
      title: t("hmwTitle"),
      timeDates: [
        { date: t("hmwConcert1Date"), time: t("hmwConcert1Time") },
        { date: t("hmwConcert2Date"), time: t("hmwConcert2Time") },
      ],
      readMore: "/2019-2020/hmw",
    },
  ] as ConcertProps[];

  return (
    <ConcertList
      concerts={concerts}
      imgPath="/img/concerts/concert_banner.jpg"
      title="Concerts 2019 - 2020"
    />
  );
};
