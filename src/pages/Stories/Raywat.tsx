import React from "react";
import { useTranslation } from "react-i18next";
import StorySingle from "../../components/Stories/StorySingle";
import Playlist from "../../components/Playlist";
import FastFacts from "../../components/Stories/FastFacts";
import { range } from "lodash";
import LinkIcon from "@material-ui/icons/Link";
import TwitterIcon from "@material-ui/icons/Twitter";
import SocialMedia from "../../components/Stories/SocialMedia";
import PhotoCredits from "../../components/PhotoCredits";

export default function Raywat() {
  const { t } = useTranslation("Raywat");

  const socialMediaProps = {
    share: t("socialMedia"),
    socialMedias: [
      { icon: <LinkIcon />, link: "www.deonandan.com" },
      { icon: <TwitterIcon />, link: "https://twitter.com/deonandan" },
    ],
  };

  const content = () => {
    return (
      <>
        <FastFacts
          title={t("fastFacts")}
          facts={[t("f1"), t("f2"), t("f3"), t("f4"), t("f5"), t("f6")]}
        />

        {range(6).map((val) => (
          <p key={val}>{t(`p${val + 1}`)}</p>
        ))}

        <PhotoCredits
          imgPath="/img/stories/story3/Deonandan_by_Alex_Smyth.jpg"
          credit="Alex Smyth"
        />

        {range(6).map((val) => (
          <p key={val}>{t(`p${val + 7}`)}</p>
        ))}

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
    imgPath: (
      <PhotoCredits
        imgPath="/img/stories/story3/Deonandan_by_Sarah_Mercer_ExtraLarge.jpg"
        credit="Sarah Mercer"
      />
    ),
    content,
  };

  return <StorySingle {...props} />;
}
