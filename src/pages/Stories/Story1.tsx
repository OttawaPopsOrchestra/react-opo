import React from "react";
import { useTranslation } from "react-i18next";
import StorySingle from "../../components/Stories/StorySingle";
import Playlist from "../../components/Playlist";

export default function Story1() {
  const { t } = useTranslation("Story1");

  const content = () => {
    return (
      <>
        <p className="preview">
          {t("preview")}
          <a href="/2019-2020/videogamesymphony">{t("vgs")}</a>
          {t("and")}
          <a href="/2019-2020/popsonbroadway">{t("broadway")}</a>
          {t("preview_2")}
        </p>
        <p className="preview">{t("preview_3")}</p>
        <p className="preview">
          {t("preview_4")}
          <b>{t("preview_4_bold")}</b>
          {t("preview_5")}
        </p>

        <div className="header">{t("what")}</div>
        <p>{t("what-p")}</p>
        <img
          src="/img/stories/story1/Photo 2- Ottawa_Gatineau.jpg"
          alt="Ottawa_Gatineau"
        />

        <div className="header">{t("how")}</div>
        <p>{t("how-1")}</p>
        <p>
          {t("how-2")}
          <b>{t("how-3")}</b>
          {t("how-4")}
        </p>
        <p>{t("how-5")}</p>

        <p>{t("playlist")}</p>
        <Playlist
          id="playlist"
          link="https://open.spotify.com/embed/playlist/6wXiN6S4626e3hdcMOb0fx"
        />
      </>
    );
  };

  const props = {
    title: t("title"),
    date: t("date"),
    author: t("author"),
    imgPath: "/img/stories/story1/Photo 1- Neon Sign.jpg",
    content,
  };

  return <StorySingle {...props} />;
}
