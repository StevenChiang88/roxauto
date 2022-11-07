import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, ListItem } from "@mui/material";
import { useTranslation } from "react-i18next";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function ItemTabs() {
  const [value, setValue] = React.useState(0);
  const { t } = useTranslation();
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };
  const jsonData = require(`../../i18n/${t("Language.lng")}.json`);

  return (
    <Box sx={{ width: "100%" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          aria-label="basic tabs example"
        >
          <Tab label="SASAKI" {...a11yProps(0)} />
          <Tab label="NISHIOKA" {...a11yProps(1)} />
          <Tab label="TOKAI" {...a11yProps(2)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <Box
          sx={{
            width: { xs: "300px", sm: "380px", md: "500px" },
          }}
        >
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            alt="SASAKI"
            src={require("../../pictures/BrandsPictures/SASAKI.jpg")}
          />
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          {jsonData.BrandsPage.SASAKIItem.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <ListItem divider={true}>{item}</ListItem>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <Box
          sx={{
            width: { xs: "300px", sm: "380px", md: "500px" },
          }}
        >
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            alt="NISHIOKA"
            src={require("../../pictures/BrandsPictures/NISHIOKA.jpg")}
          />
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          {jsonData.BrandsPage.NISHIOKAItem.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <ListItem divider={true}>{item}</ListItem>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <Box
          sx={{
            width: { xs: "300px", sm: "380px", md: "500px" },
          }}
        >
          <img
            style={{ width: "100%", borderRadius: "10px" }}
            alt="TOKAI"
            src={require("../../pictures/BrandsPictures/TOKAI.jpg")}
          />
        </Box>
        <Grid
          container
          sx={{
            display: "flex",
            alignItems: "center",
            color: "primary.main",
          }}
        >
          {jsonData.BrandsPage.TOKAIItem.map((item) => (
            <Grid key={item} item xs={12} sm={6} md={4}>
              <ListItem divider={true}>{item}</ListItem>
            </Grid>
          ))}
        </Grid>
      </TabPanel>
    </Box>
  );
}
