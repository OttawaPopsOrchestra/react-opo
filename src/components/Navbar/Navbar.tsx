import React from "react";
import { useTranslation } from "react-i18next";
import styled from "styled-components/macro";
import NavItem from "./NavItem";
import { navBackground } from "../../constants/colors";
import { Link } from "react-router-dom";

type MenuItem = {
  title: string;
  subMenu: string[];
};

const NavBarStyles = styled.div`
  display: flex;
  background-color: ${navBackground};
  align-items: center;

  #logo {
    height: 100px;
    padding: 1em;
  }
`;

export default () => {
  const { t } = useTranslation("Navbar");

  const menuItems = [
    {
      title: t("about"),
    },
    {
      title: t("concerts"),
      subMenu: ["2019 - 2020", t("seasonTickets")],
    },
    {
      title: t("orchestra"),
      subMenu: [t("auditions"), t("conductors")],
    },
    {
      title: t("community"),
    },
    {
      title: t("contact"),
    },
    {
      title: t("covid"),
    },
  ] as MenuItem[];

  return (
    <NavBarStyles>
      <Link to="/">
        <img
          id="logo"
          src="/img/OPO-Logo-Primary.png"
          alt="Ottawa Pops Orchestra"
        />
      </Link>
      {menuItems.map((menuItem) => {
        return <NavItem key={menuItem.title} {...menuItem} />;
      })}
    </NavBarStyles>
  );
};
