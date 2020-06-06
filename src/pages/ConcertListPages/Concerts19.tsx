import React from "react";
import { useTranslation } from "react-i18next";
import { ConcertProps } from "../../components/Concerts/ConcertCard";
import ConcertList from "../../components/Concerts/ConcertList";

export default () => {
  const { t } = useTranslation(["Concerts19", "Concerts"]);

  const concerts = [
    {
      imgPath: "img/concerts-full/2019-2020/VGSDetail.jpeg",
      title: t("vgsTitle"),
      timeDates: [{ date: t("vgsConcert1Date"), time: t("vgsConcert1Time") }],
    },
    {
      imgPath: "img/concerts-full/2019-2020/BroadwayDetail.png",
      title: t("vgsTitle"),
      timeDates: [{ date: t("vgsConcert1Date"), time: t("vgsConcert1Time") }],
    },
    {
      imgPath: "img/concerts-full/2019-2020/HMW2Detail.png",
      title: "Video Game Symphony3",
      description: "Blah blah description",
    },
  ] as ConcertProps[];

  return (
    <ConcertList
      concerts={concerts}
      imgPath="/img/concert_banner_2.jpg"
      title="Concerts 2019 - 2020"
    />
  );
};
