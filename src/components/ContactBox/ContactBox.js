import { Box, Typography } from "@mui/material";
import React from "react";
import { useTranslation } from "react-i18next";
import { NavLink } from "react-router-dom";
import Custombutton from "../Custombutton/Custombutton";

const ContactBox = () => {
  const { t } = useTranslation();
  return (
    <Box
      sx={{
        backgroundColor: "#3671E9",
        width: "75%",
        display: "flex",
        flexDirection: { xs: "column", md: "row" },
        margin: "5rem",
        padding: "2rem",

        borderRadius: "10px",
      }}
    >
      <div style={{ flex: 2, margin: "2rem" }}>
        <Typography
          variant="h1"
          sx={{
            fontSize: { xs: "18px", sm: "20px", md: "25px" },
            color: "white",
            fontWeight: "Medium",
          }}
        >
          {t("ContactBox.Title")}
        </Typography>
        <Typography
          variant="h5"
          sx={{
            fontSize: { xs: "15px", sm: "18px", md: "20px" },
            color: "white",
            marginTop: "1rem",
          }}
        >
          {t("ContactBox.Text")}
        </Typography>
      </div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          flex: 1,
          margin: "2rem",
        }}
      >
        <NavLink className="NavLink" to="/Contact">
          <Custombutton color="#E99736" content={`${t("ContactBox.Button")}`} />
        </NavLink>
      </div>
    </Box>
  );
};

export default ContactBox;
