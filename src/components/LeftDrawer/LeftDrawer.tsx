import React, { Dispatch, SetStateAction } from "react";
import styled from "styled-components/macro";
import { useTranslation } from "react-i18next";
import { Link } from "react-router-dom";
import { Divider, List, ListItem, SwipeableDrawer } from "@mui/material";
import { primaryMaroon } from "../../constants/colors";
import LeftDrawerWithSubItem from "./LeftDrawerWithSubItem";

const WIDTH = 280;

const LeftDrawerStyles = styled(List)`
  width: ${WIDTH}px;
  display: flex;
  flex-direction: column;
  align-items: center !important;

  #logo {
    padding: 1em;
  }

  .item {
    height: 3em !important;
  }

  a,
  .principleMenu > .MuiTypography-body1,
  .subMenu {
    color: black;
    text-decoration: none !important;
    font-size: 18px !important;
    font-family: "Quicksand", sans-serif !important;
  }

  .subMenu {
    font-weight: 400 !important;
  }

  .active,
  .active:disabled {
    background-color: ${primaryMaroon};
    opacity: 1 !important;

    a,
    .MuiListItemIcon-root {
      color: white;
    }
  }
`;

export const isCurrentPage = (link?: string) => {
  return link && window.location.pathname === `/${link}`;
};

export type DrawerItem = {
  title: string;
  link?: string;
  subMenu?: DrawerItem[];
};

type LeftDrawerProps = {
  open: boolean;
  setIsLeftDrawerOpen: Dispatch<SetStateAction<boolean>>;
  isFiltersDrawer?: boolean | null;
};

export default function LeftDrawer({
  open,
  setIsLeftDrawerOpen,
}: LeftDrawerProps) {
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
        // ARCHIVED { title: "2018 - 2019", link: "2018-2019" },
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
      subMenu: [
        { title: t("studentMatinees"), link: "student-matinees" },
        { title: t("stories"), link: "stories" },
      ],
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
      open={open}
      onClose={closeDrawer}
      onOpen={openDrawer}
    >
      <LeftDrawerStyles tabIndex={0} role="button">
        <Link to="/">
          <img
            id="logo"
            src="/img/logos/OPO-Logo-Primary.png"
            alt="Ottawa Pops Orchestra"
            height="100px"
          />
        </Link>
        {drawerItems.map(({ title, link, subMenu }) => {
          const initialExpanded =
            (subMenu?.filter(({ link }) => isCurrentPage(link)).length || -1) >
            0;

          return subMenu ? (
            <LeftDrawerWithSubItem
              key={title}
              title={title}
              subMenu={subMenu}
              closeDrawer={closeDrawer}
              initialExpanded={initialExpanded}
            />
          ) : (
            <ListItem
              button
              key={title}
              onClick={closeDrawer}
              className={isCurrentPage(link) ? "active item" : "item"}
              disabled={isCurrentPage(link) || false}
            >
              <Link style={{ paddingLeft: "1em" }} to={`/${link}`}>
                {title}
              </Link>
            </ListItem>
          );
        })}
        <Divider />
      </LeftDrawerStyles>
    </SwipeableDrawer>
  );
}
