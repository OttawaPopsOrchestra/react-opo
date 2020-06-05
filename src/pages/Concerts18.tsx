import React from "react";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "../components/Concerts/ConcertCard";
import ConcertList from "../components/Concerts/ConcertList";

export default () => {
  const { t } = useTranslation("Concerts18");

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
      title: "Video Game Symphony2",
      description: "Blah blah description",
      timeDates: [],
    },
    {
      imgPath: "img/concerts-full/2018-2019/StarWarsDetail.png",
      title: "Video Game Symphony3",
      description: "Blah blah description",
      timeDates: [],
    },
    {
      imgPath: "img/concerts-full/2018-2019/ToTDetail.png",
      title: "Video Game Symphony3",
      description: "Blah blah description",
      timeDates: [],
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
