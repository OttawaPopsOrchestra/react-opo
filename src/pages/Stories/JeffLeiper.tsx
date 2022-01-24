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
import SocialMedia from "../../components/Stories/SocialMedia";
import PhotoCredits from "../../components/PhotoCredits";

export default function JeffLeiper() {
  const { t } = useTranslation("JeffLeiper");

  const socialMediaProps = {
    share: t("socialMedia"),
    socialMedias: [
      { icon: <LinkIcon />, link: "https://kitchissippiward.ca/" },
      {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/KitchissippiWard/",
      },
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/kitchissippiward/",
      },
      { icon: <TwitterIcon />, link: "https://twitter.com/jleiper?lang=en" },
    ],
  };

  const content = () => {
    return (
      <>
        <FastFacts
          title={t("fastFacts")}
          facts={[t("f1"), t("f2"), t("f3"), t("f4")]}
        />

        {range(4).map((val) => (
          <p key={val}>{t(`p${val + 1}`)}</p>
        ))}

        <PhotoCredits
          imgPath="/img/stories/story4/Jeff Leiper - Photo 2.jpg"
          credit="Peter Robb"
        />

        {range(5).map((val) => (
          <p key={val}>{t(`p${val + 5}`)}</p>
        ))}

        <img
          src="/img/stories/story4/Jeff Leiper - Photo 3.jpg"
          alt="Ottawa_Gatineau"
        />

        <SocialMedia {...socialMediaProps} />

        <div className="header">{t("playlist")}</div>
        <Playlist
          id="playlist"
          link="https://open.spotify.com/embed/playlist/2ylx6NE9ndXGI6M1pCA1iR"
        />
      </>
    );
  };

  const props = {
    title: t("title"),
    date: t("date"),
    author: t("author"),
    intro: t("intro"),
    imgPath: "/img/stories/story4/Jeff Leiper - Photo 1.jpg",
    content,
  };

  return <StorySingle {...props} />;
}
