import React, { useState, useEffect } from "react";
import StoryCard, { StoryCardProps } from "../../components/Stories/StoryCard";
import styled from "styled-components/macro";
import { BREAKPOINT_TABTOP } from "../../constants/constants";
import { useTranslation } from "react-i18next";
import { getDateObject } from "../../utils/dateTimeUtils";
import { TextField, IconButton } from "@mui/material";
import ClearIcon from "@material-ui/icons/Clear";

const StoryStyles = styled.div`
  .stories {
    margin: 0 auto;
    padding: 0em 10em;
    font-family: FuturaPTMedium, "Trebuchet MS", Arial, sans-serif !important;
  }

  .inputWrapper {
    padding-top: 1em;
    width: 100%;
  }

  @media (max-width: ${BREAKPOINT_TABTOP}px) {
    .stories {
      padding: 0;
      width: 90%;
    }
  }
`;

export default function Stories() {
  const { t } = useTranslation("Stories");
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchChange = (e) => {
    setSearchTerm(e.target.value);
  };
  const handleClearSearch = () => {
    setSearchTerm("");
  };

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "Escape") {
        handleClearSearch();
      }
    };
    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  const stories = [
    {
      imgPath: "/img/stories/story1/Photo 1- Neon Sign.jpg",
      title: t("story1-title"),
      preview: t("story1-preview"),
      author: t("OPO"),
      date: t("story1-date"),
      readMore: "/stories/story1",
    },
    {
      imgPath: "/img/stories/story2/Twin Flames Photo 1.JPG",
      title: t("story2-title"),
      preview: t("story2-preview"),
      author: "Carmen Harris",
      date: t("story2-date"),
      readMore: "/stories/twinflames",
    },
    {
      imgPath: "/img/stories/story3/Deonandan_by_Sarah_Mercer_ExtraLarge.jpg",
      title: t("story3-title"),
      preview: t("story3-preview"),
      author: "Raywat Deonandan",
      translate: "Alexandre Bigeau",
      date: t("story3-date"),
      readMore: "/stories/raywatdeonandan",
    },
    {
      imgPath: "/img/stories/story4/Jeff Leiper - Photo 1.jpg",
      title: t("story4-title"),
      preview: t("story4-preview"),
      author: "Jeff Leiper",
      translate: "Mathieu Roy",
      date: t("story4-date"),
      readMore: "/stories/jeffleiper",
    },
    {
      imgPath: "/img/stories/story5/Andrew Ascenzo - Bedford Headshot 003.jpg",
      title: t("story5-title"),
      preview: t("story5-preview"),
      author: "Andrew Ascenzo",
      translate: "Alexandre Bigeau",
      date: t("story5-date"),
      readMore: "/stories/bedfordtrio",
    },
  ];

  const storiesToShow = orderStories(stories).filter(
    ({ author, title }) =>
      author.toLowerCase().includes(searchTerm.toLowerCase()) ||
      title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <StoryStyles>
      <img src={t("banner")} alt={t("header")} width="100%" />
      <div className="stories">
        <div className="inputWrapper">
          <TextField
            variant="outlined"
            type="text"
            inputProps={{
              autoFocus: true,
            }}
            value={searchTerm}
            onChange={handleSearchChange}
            label={t("search")}
          />
          <IconButton disabled={searchTerm === ""} onClick={handleClearSearch}>
            <ClearIcon />
          </IconButton>
        </div>
        {storiesToShow.map((story) => (
          <StoryCard key={story.title} {...story} />
        ))}
      </div>
    </StoryStyles>
  );
}

function orderStories(stories: StoryCardProps[]): StoryCardProps[] {
  return stories.sort(
    (a, b) => getDateObject(b.date).getTime() - getDateObject(a.date).getTime()
  );
}
