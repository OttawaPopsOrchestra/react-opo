import React from "react";
import { useTranslation } from "react-i18next";
import StorySingle from "../../components/Stories/StorySingle";
import Playlist from "../../components/Playlist";
import FastFacts from "../../components/Stories/FastFacts";
import { range } from "lodash";
import LinkIcon from "@material-ui/icons/Link";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import TwitterIcon from "@material-ui/icons/Twitter";
import YouTubeIcon from "@material-ui/icons/YouTube";
import SocialMedia from "../../components/Stories/SocialMedia";
import PhotoCredits from "../../components/PhotoCredits";

export default function BedfordTrio() {
  const { t } = useTranslation("BedfordTrio");

  const socialMediaProps = {
    share: t("socialMedia"),
    socialMedias: [
      { icon: <LinkIcon />, link: "http://www.bedfordtrio.com/" },
      {
        icon: <FacebookIcon />,
        link: "https://www.facebook.com/bedfordtrio",
      },
      {
        icon: <InstagramIcon />,
        link: "https://www.instagram.com/bedford_trio/",
      },
      { icon: <TwitterIcon />, link: "https://twitter.com/bedford_trio" },
      {
        icon: <YouTubeIcon />,
        link: "https://www.youtube.com/channel/UClVtukRz4ZMFvpLcYrcWlPg",
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
            t("f4", { postProcess: "markdown-jsx" }),
          ]}
        />

        {range(3).map((val) => (
          <p key={val}>{t(`p${val + 1}`, { postProcess: "markdown-jsx" })}</p>
        ))}

        <img
          src="/img/stories/story5/Andrew Ascenzo - Bedford Headshot 001.jpg"
          alt="Bedford Trio"
        />

        {range(6).map((val) => (
          <p key={val}>{t(`p${val + 4}`)}</p>
        ))}

        <div className="header">{t("alessia-title")}</div>
        <PhotoCredits
          imgPath="/img/stories/story5/alessia_1_orig.jpg"
          credit="Alice H. Photography"
        />
        {range(5).map((val) => (
          <p>{t(`alessia-p${val + 1}`)}</p>
        ))}
        <div className="sub-header">{t("alessia-playlist")}</div>
        {range(6).map((val) => (
          <p>
            {t(`alessia-playlist-p${val + 1}`, { postProcess: "markdown-jsx" })}
          </p>
        ))}

        <div className="header">{t("jialiang-title")}</div>
        <img src="/img/stories/story5/Jialiang.jpg" alt="Bedford Trio" />
        {range(2).map((val) => (
          <p>{t(`jialiang-p${val + 1}`)}</p>
        ))}
        <div className="sub-header">{t("jialiang-playlist")}</div>
        {range(6).map((val) => (
          <p>
            {t(`jialiang-playlist-p${val + 1}`, {
              postProcess: "markdown-jsx",
            })}
          </p>
        ))}

        <div className="header">{t("andrew-title")}</div>
        <PhotoCredits
          imgPath="/img/stories/story5/Andrew.jpg"
          credit="Alice H. Photography"
        />
        {range(2).map((val) => (
          <p>{t(`andrew-p${val + 1}`)}</p>
        ))}
        <div className="sub-header">{t("andrew-playlist")}</div>
        {range(6).map((val) => (
          <p>
            {t(`andrew-playlist-p${val + 1}`, { postProcess: "markdown-jsx" })}
          </p>
        ))}

        <div className="header">{t("playlist")}</div>
        {range(6).map((val) => (
          <p>{t(`playlist-p${val + 1}`, { postProcess: "markdown-jsx" })}</p>
        ))}
        <Playlist
          id="playlist"
          link="https://open.spotify.com/embed/playlist/2ylx6NE9ndXGI6M1pCA1iR"
        />

        <div style={{ paddingBottom: "2em" }}>
          <SocialMedia {...socialMediaProps} />
        </div>
      </>
    );
  };

  const props = {
    title: t("title"),
    date: t("date"),
    author: t("author"),
    intro: t("intro"),
    imgPath: "/img/stories/story5/Andrew Ascenzo - Bedford Headshot 003.jpg",
    content,
  };

  return <StorySingle {...props} />;
}
