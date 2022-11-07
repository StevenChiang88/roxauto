import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import { Grid, ListItem } from "@mui/material";

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

export default function ProductitemTab(props) {
  const data = props.data.ProductsPage.PartsItem;

  const [value, setValue] = React.useState(0);
  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", marginTop: "2rem" }}>
      <Box
        sx={{
          borderBottom: 1,
          borderColor: "divider",
        }}
      >
        <Tabs
          value={value}
          onChange={handleChange}
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
          aria-label="scrollable force tabs example"
        >
          {data.map((item) => (
            <Tab label={item.name} key={item.id} />
          ))}
        </Tabs>
      </Box>

      {data.map((item) => (
        <TabPanel value={value} index={item.id}>
          <Grid
            container
            sx={{
              display: "flex",
              alignItems: "center",
              color: "primary.main",
            }}
          >
            {item.Parts.map((item) => (
              <Grid key={item} item xs={12} sm={6} md={4}>
                <ListItem divider={true}>{item}</ListItem>
              </Grid>
            ))}
          </Grid>
        </TabPanel>
      ))}
    </Box>
  );
}
