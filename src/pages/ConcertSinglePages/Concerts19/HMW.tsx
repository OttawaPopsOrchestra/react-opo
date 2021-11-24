import React from "react";
import ConcertSingle from "../../../components/Concerts/ConcertSingle";
import { useTranslation } from "react-i18next";

export default function HMW() {
  const { t } = useTranslation(["Concerts", "HMW"]);

  const hmwProps = {
    imgPath: "/img/concerts/concerts-single/2019-2020/HMWHero.jpg",
    title: t("title"),
    timeDates: [
      {
        date: t("concert1Date"),
        time: t("concert1Time"),
      },
      {
        date: t("concert2Date"),
        time: t("concert2Time"),
      },
    ],
    description: t("description"),
    spotify: "https://open.spotify.com/embed/playlist/1F7ddq9YrPRv71Znwovcdk",
  };
  return <ConcertSingle {...hmwProps} />;
}
