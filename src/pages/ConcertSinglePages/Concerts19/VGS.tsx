import React from "react";
import ConcertSingle from "../../../components/Concerts/ConcertSingle";
import { useTranslation } from "react-i18next";

export default function VGS() {
  const { t } = useTranslation(["Concerts", "VGS"]);

  const vgsProps = {
    imgPath: "/img/concerts/concerts-single/2019-2020/VGSHero.jpg",
    title: t("title"),
    timeDates: [
      {
        date: t("concert1Date"),
        time: t("concert1Time"),
        ticketLink:
          "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext",
      },
      {
        date: t("concert2Date"),
        time: t("concert2Time"),
        ticketLink:
          "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext",
      },
    ],
    price: "$34.00 - $50.75",
    buyTickets:
      "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventInfo?ticketCode=GS%3ACP%3AC1920%3ACT0320N%3A&linkID=centrepointe&shopperContext",
    description: t("description"),
    spotify: "https://open.spotify.com/embed/playlist/1xlIORmvzJLwbRRgsm46gv",
  };
  return <ConcertSingle {...vgsProps} />;
}
