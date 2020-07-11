import React from "react";
import ConcertSingle from "../../../components/Concerts/ConcertSingle";
import { useTranslation } from "react-i18next";

export default () => {
  const { t } = useTranslation(["Concerts", "POB"]);

  const pobProps = {
    imgPath: "/img/concerts/concerts-single/2019-2020/POBHero.jpg",
    title: t("title"),
    timeDates: [
      {
        date: t("concert1Date"),
        time: t("concert1Time"),
        ticketLink:
          "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=undefined&caller=&appCode=",
      },
    ],
    price: "$25.75 - $50.75",
    buyTickets:
      "https://meridianshenkman.evenue.net/cgi-bin/ncommerce3/SEGetEventList?groupCode=CT0516N&linkID=centrepointe&shopperContext=undefined&caller=&appCode=",
    description: t("description"),
    spotify: "https://open.spotify.com/embed/playlist/4EBL0jzb36rCwR1EFXT7kq",
  };
  return <ConcertSingle {...pobProps} />;
};
