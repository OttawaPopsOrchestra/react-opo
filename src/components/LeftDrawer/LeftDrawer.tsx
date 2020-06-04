import React, { Dispatch, SetStateAction } from "react";
import SwipeableDrawer from "@material-ui/core/SwipeableDrawer";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import MusicNoteIcon from "@material-ui/icons/MusicNote";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { navBackground } from "../../constants/colors";
import { ListItemText, Divider } from "@material-ui/core";

const WIDTH = 280;

const LeftDrawerStyles = styled(List)`
  width: ${WIDTH}px;
  display: flex;
  flex-direction: column;
  align-items: center !important;

  /* background-color: ${navBackground}; */

  #logo {
    padding: 1em;
  }

  a,
  .principleMenu,
  .MuiListItemText-primary {
    color: black;
    text-decoration: none !important;
    /* text-transform: uppercase; */
    font-size: 18px;
    font-weight: 300 !important;
  }

  .principleMenu {
    padding-left: 16px !important;
    align-self: flex-start;
  }
`;

type DrawerItem = {
  title: string;
  link?: string;
  subMenu?: DrawerItem[];
};

type LeftDrawerProps = {
  open: boolean;
  setIsLeftDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isFiltersDrawer?: boolean | null;
};

export default ({ open, setIsLeftDrawerOpen }: LeftDrawerProps) => {
  const { t } = useTranslation("LeftDrawer");
  const closeDrawer = () => setIsLeftDrawerOpen(false);
  const openDrawer = () => setIsLeftDrawerOpen(true);

  const drawerItems = [
    {
      title: t("about"),
      link: "about",
    },
    {
      title: t("concerts"),
      subMenu: [
        { title: "2019 - 2020", link: "2019-2020" },
        { title: t("seasonTickets"), link: "seasonTickets" },
      ],
    },
    {
      title: t("orchestra"),
      subMenu: [
        { title: t("auditions"), link: "auditions" },
        { title: t("conductors"), link: "conductors" },
      ],
    },
    {
      title: t("community"),
      link: "community",
    },
    {
      title: t("contact"),
      link: "contact",
    },
    {
      title: t("covid"),
      link: "covid",
    },
  ] as DrawerItem[];

  return (
    <SwipeableDrawer
      anchor="left"
      disableDiscovery={true}
      disableSwipeToOpen={true}
      open={open}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <LeftDrawerStyles>
        <Link to="/">
          <img
            id="logo"
            src="/img/OPO-Logo-Primary.png"
            alt="Ottawa Pops Orchestra"
            height="100px"
          />
        </Link>
        {drawerItems.map(({ title, link, subMenu }) =>
          subMenu ? (
            <React.Fragment key={title}>
              <ListItemText primary={title} className="principleMenu" />
              {subMenu.map(({ title: subTitle, link: subLink }) => (
                <ListItem button key={subTitle}>
                  <ListItemIcon>
                    <MusicNoteIcon />
                  </ListItemIcon>
                  <Link to={`/${subLink}`}>{subTitle}</Link>
                </ListItem>
              ))}
            </React.Fragment>
          ) : (
            <ListItem button key={title}>
              <Link to={`/${link}`}>{title}</Link>
            </ListItem>
          )
        )}
        <Divider />
      </LeftDrawerStyles>
    </SwipeableDrawer>
  );
};
