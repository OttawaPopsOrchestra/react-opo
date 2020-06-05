import React from "react";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "../../components/Concerts/ConcertCard";
import ConcertList from "../../components/Concerts/ConcertList";

export default () => {
  const { t } = useTranslation(["Concerts18", "Concerts"]);

  const concerts = [
    {
      imgPath: "img/concerts-full/2018-2019/DICDetail.png",
      title: t("disneyTitle"),
      description: "",
      timeDates: [
        { date: t("disneyConcert1Date"), time: t("disneyConcert1Time") },
        { date: t("disneyconcert2Date"), time: t("disneyconcert2Time") },
      ],
    },
    {
      imgPath: "img/concerts-full/2018-2019/SATSDetail.png",
      title: t("satsTitle"),
      description: t("cancelled"),
      timeDates: [],
    },
    {
      imgPath: "img/concerts-full/2018-2019/StarWarsDetail.png",
      title: t("starWarsTitle"),
      timeDates: [
        { date: t("starWarsConcert1Date"), time: t("starWarsConcert1Time") },
        { date: t("starWarsconcert2Date"), time: t("starWarsconcert2Time") },
        { date: t("starWarsconcert3Date"), time: t("starWarsconcert3Time") },
      ],
    },
    {
      imgPath: "img/concerts-full/2018-2019/ToTDetail.png",
      title: t("totTitle"),
      timeDates: [{ date: t("totConcert1Date"), time: t("totConcert1Time") }],
    },
  ] as ConcertProps[];

  return (
    <ConcertList
      concerts={concerts}
      imgPath="/img/concert_banner_2.jpg"
      title="Concerts 2018 - 2019"
    />
  );
};
