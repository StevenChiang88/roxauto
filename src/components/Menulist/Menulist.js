import { List, ListItem, Switch, ThemeProvider } from "@mui/material";
import { Brightness4 } from "@mui/icons-material";
import React from "react";
import { NavLink } from "react-router-dom";
import { useContext } from "react";
import ThemeContext from "../../store/ThemeContex";
import "./Navlink.css";
import { useTranslation } from "react-i18next";

const Menulist = () => {
  const ThemeCtx = useContext(ThemeContext);
  const { t } = useTranslation();
  return (
    <ThemeProvider theme={ThemeCtx.muiTheme}>
      <List
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <ListItem>
          <NavLink
            to="/"
            end
            className="NavLink"
            style={({ isActive }) => {
              return isActive ? { color: "#3671E9" } : { color: "white" };
            }}
          >
            {t("appBar.Home")}
          </NavLink>
        </ListItem>

        <ListItem>
          <NavLink
            to="/Brands"
            className="NavLink"
            style={({ isActive }) => {
              return isActive ? { color: "#3671E9" } : { color: "white" };
            }}
          >
            {t("appBar.Brands")}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            to="/Products"
            className="NavLink"
            style={({ isActive }) => {
              return isActive ? { color: "#3671E9" } : { color: "white" };
            }}
          >
            {t("appBar.Products")}
          </NavLink>
        </ListItem>
        <ListItem>
          <NavLink
            className="NavLink"
            to="/Contact"
            style={({ isActive }) => {
              return isActive ? { color: " #3671E9" } : { color: "white" };
            }}
          >
            {t("appBar.Contact")}
          </NavLink>
        </ListItem>

        <ListItem>
          <Brightness4 sx={{ color: "white" }} />
          <Switch
            onClick={() => {
              ThemeCtx.ThemeHandler();
            }}
          />
        </ListItem>
      </List>
    </ThemeProvider>
  );
};

export default Menulist;
