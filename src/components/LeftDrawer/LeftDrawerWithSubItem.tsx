import React, { useState } from "react";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import { ListItemText, Collapse, ListItem, ListItemIcon } from "@mui/material";
import { Link } from "react-router-dom";
import { isCurrentPage, DrawerItem } from "./LeftDrawer";
import styled from "styled-components/macro";

const StyledDrawerItem = styled.div`
  width: 100%;
  padding-top: 0px !important;
  padding-bottom: 0px !important;

  .principleMenu {
    padding-left: 1em;
  }
`;

export default function LeftDrawerWithSubItem({
  title,
  subMenu,
  closeDrawer,
  initialExpanded,
}: {
  title: string;
  subMenu: DrawerItem[];
  closeDrawer: () => void;
  initialExpanded: boolean;
}) {
  const [expanded, setExpanded] = useState(initialExpanded);
  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  return (
    <StyledDrawerItem>
      <ListItem button onClick={handleExpandClick}>
        <ListItemText primary={title} className="principleMenu" />
        {expanded ? <ExpandLess /> : <ExpandMore />}
      </ListItem>
      <Collapse in={expanded} timeout="auto" unmountOnExit>
        {subMenu.map(({ title: subTitle, link: subLink }) => (
          <ListItem
            button
            onClick={closeDrawer}
            key={subTitle}
            className={isCurrentPage(subLink) ? "active subMenu" : "subMenu"}
            disabled={isCurrentPage(subLink) || false}
          >
            <ListItemIcon>
              <MusicNoteIcon />
            </ListItemIcon>
            <Link to={`/${subLink}`}>{subTitle}</Link>
          </ListItem>
        ))}
      </Collapse>
    </StyledDrawerItem>
  );
}
