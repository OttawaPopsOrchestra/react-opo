import React from "react";
import { Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import {
  ListItemText,
  Menu,
  withStyles,
  MenuProps,
  MenuItem,
} from "@material-ui/core";
import styled from "styled-components/macro";
import { navBackground } from "../../constants/colors";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

const NavItemStyles = styled.div`
  text-transform: uppercase;
  padding: 1em;
  color: white;

  a {
    color: white;
    text-decoration: none !important;
    font-size: 16px;
    font-weight: 300;
  }

  button {
    background-color: ${navBackground};
    font-size: 16px;
    transition: none !important;
    box-shadow: none !important;
  }

  .MuiPaper-root,
  .MuiButton-containedPrimary:hover {
    background-color: ${navBackground};
  }
`;

const StyledMenu = withStyles({
  paper: {
    border: "1px solid #d3d4d5",
    backgroundColor: `white`,
    width: "10em",
  },
})((props: MenuProps) => (
  <Menu
    elevation={0}
    getContentAnchorEl={null}
    anchorOrigin={{
      vertical: "bottom",
      horizontal: "center",
    }}
    transformOrigin={{
      vertical: "top",
      horizontal: "center",
    }}
    {...props}
  />
));

const StyledMenuItem = withStyles((theme) => ({
  root: {
    // "&:focus": {
    //   backgroundColor: theme.palette.primary.main,
    //   "& .MuiListItemIcon-root, & .MuiListItemText-primary": {
    //     color: theme.palette.common.white,
    //   },
    // },
    textTransform: "uppercase",
    // alignItems: "center",
    // "li > a": {
    //   color: "black",
    //   textDecoration: "none",
    // },
  },
}))(MenuItem);

export default ({ title, subMenu }: { title: string; subMenu?: string[] }) => {
  const [anchorEl, setAnchorEl] = React.useState<null | HTMLElement>(null);

  const handleClick = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <NavItemStyles>
      {subMenu && subMenu.length > 0 ? (
        <>
          <Button
            aria-controls="customized-menu"
            aria-haspopup="true"
            variant="contained"
            color="primary"
            onClick={handleClick}
          >
            {title}
            <ExpandMoreIcon />
          </Button>
          <StyledMenu
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >
            {subMenu.map((item) => {
              return (
                <StyledMenuItem className="subMenu">
                  <Link to={`/${item.replace(/ /g, "")}`}>
                    <ListItemText primary={item} />
                  </Link>
                </StyledMenuItem>
              );
            })}
          </StyledMenu>
        </>
      ) : (
        <Link to={`/${title}`}>{title}</Link>
      )}
    </NavItemStyles>
  );
};
