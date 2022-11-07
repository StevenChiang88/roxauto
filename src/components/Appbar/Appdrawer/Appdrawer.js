import { Drawer } from "@mui/material";
import React from "react";
import Menulist from "../../Menulist/Menulist";

const Appdrawer = (props) => {
  return (
    <Drawer
      anchor="right"
      open={props.drawerOpen}
      onClose={(e) => props.setDrawerOpen(false)}
      PaperProps={{ sx: { backgroundColor: "#292E34" } }}
    >
      <img
        style={{ width: "100px", margin: "0 auto", marginTop: "1rem" }}
        src={require("../../../pictures/roxicon.png")}
        alt="roxicon"
      />
      <Menulist />
    </Drawer>
  );
};

export default Appdrawer;
