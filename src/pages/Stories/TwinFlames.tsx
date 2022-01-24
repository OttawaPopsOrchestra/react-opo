import React from "react";
import { useTranslation } from "react-i18next";
import StorySingle from "../../components/Stories/StorySingle";
import Playlist from "../../components/Playlist";
import FastFacts from "../../components/Stories/FastFacts";
import { range } from "lodash";
import LinkIcon from "@mui/icons-material/Link";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import TwitterIcon from "@mui/icons-material/Twitter";
import YouTubeIcon from "@mui/icons-material/YouTube";
import SocialMedia from "../../components/Stories/SocialMedia";

export default function TwinFlames() {
  const { t } = useTranslation("TwinFlames");

  const socialMediaProps = {
    share: t("socialMedia"),
    socialMedias: [
      { icon: <LinkIcon />, link: "https://twinflamesmusic.com/home" },
      {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/twinflamesmusic/",
      },
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/twinflamesband/",
      },
      { icon: <TwitterIcon />, link: "https://twitter.com/twinflamesband/" },
      {
        icon: <YouTubeIcon />,
        link: "https://www.youtube.com/channel/UCgV-QmC3cRxTWlUJHPqU6oQ",
      },
      {
        icon: (
          <span
            className="iconify"
            data-icon="mdi-soundcloud"
            data-inline="false"
          ></span>
        ),
        link: "https://soundcloud.com/twinflames-aarjuuk",
      },
    ],
  };

  const content = () => {
    return (
      <>
        <FastFacts
          title={t("fastFacts")}
          facts={[
            t("f1"),
            t("f2"),
            t("f3"),
            t("f4"),
            t("f5"),
            t("f6"),
            t("f7"),
          ]}
        />

        <div className="header">{t("q1")}</div>
        <p>{t("a_1")}</p>
        <p>{t("a_2")}</p>

        <img
          src="/img/stories/story2/Twin Flames Photo 2.JPG"
          alt="Ottawa_Gatineau"
        />

        <div className="header">{t("q2")}</div>
        {range(11).map((val) => (
          <p>{t(`a2_${val + 1}`)}</p>
        ))}

        <img
          src="/img/stories/story2/Twin Flames Photo 3.JPG"
          alt="Ottawa_Gatineau"
        />

        <div className="header">{t("q3")}</div>
        {range(3).map((val) => (
          <p>{t(`a3_${val + 1}`)}</p>
        ))}

        <div className="header">{t("q4")}</div>
        {range(3).map((val) => (
          <p>{t(`a3_${val + 1}`)}</p>
        ))}

        <img
          src="/img/stories/story2/Twin Flames Photo 4.JPG"
          alt="Ottawa_Gatineau"
        />

        <SocialMedia {...socialMediaProps} />

        <div className="header">{t("playlist")}</div>
        <Playlist
          id="playlist"
          link="https://open.spotify.com/embed/playlist/5AAbA13C1KMIVXuiJW0JNH"
        />
      </>
    );
  };

  const props = {
    title: t("title"),
    date: t("date"),
    author: t("author"),
    intro: t("intro"),
    imgPath: "/img/stories/story2/Twin Flames Photo 1.JPG",
    content,
  };

  return <StorySingle {...props} />;
}
