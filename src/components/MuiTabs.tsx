import { Box, Tab } from "@mui/material";
import { TabContext, TabList, TabPanel } from "@mui/lab";
import { useState } from "react";
import PhoneIcon from "@mui/icons-material/Phone";
import FavoriteIcon from "@mui/icons-material/Favorite";
import PersonPinIcon from "@mui/icons-material/PersonPin";
export const MuiTabs = () => {
  const [value, setValue] = useState("1");
  const handleChange = (_event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };
  return (
    <Box>
      <TabContext value={value}>
        <Box sx={{ borderBottom: "1", borderColor: "divider", width: '300px' }}>
          <TabList
            aria-label="tabs examples"
            onChange={handleChange}
            textColor="secondary"
            indicatorColor="secondary"
            variant="scrollable"
            scrollButtons='auto'  //centered can't be use at the same time 
          >
            <Tab
              label="tab one"
              value="1"
              icon={<FavoriteIcon />}
              iconPosition="bottom"
            ></Tab>
            <Tab
              label="tab two"
              value="2"
              icon={<FavoriteIcon />}
              iconPosition="start"
            ></Tab>
            <Tab
              label="tab three"
              value="3"
              icon={<PhoneIcon />}
              iconPosition="top"
            ></Tab>
            <Tab
              label="tab four"
              value="4"
              icon={<PersonPinIcon />}
              iconPosition="end"
              disabled
            ></Tab>
            <Tab
              label="tab four"
              value="5"
              icon={<PersonPinIcon />}
              iconPosition="end"
            ></Tab>
            <Tab
              label="tab four"
              value="6"
              icon={<PersonPinIcon />}
            ></Tab>
            <Tab
              label="tab four"
              value="7"
              icon={<PersonPinIcon />}
              iconPosition="end"
            ></Tab>
            <Tab
              label="tab four"
              value="8"
              icon={<PersonPinIcon />}
              iconPosition="end"
            ></Tab>
          </TabList>
        </Box>
        <TabPanel value="1">Panel One</TabPanel>
        <TabPanel value="2">Panel Two</TabPanel>
        <TabPanel value="3">Panel Three</TabPanel>
        <TabPanel value="4">Panel Four</TabPanel>
        <TabPanel value="5">Panel Four</TabPanel>
        <TabPanel value="6">Panel Four</TabPanel>
        <TabPanel value="7">Panel Four</TabPanel>
        <TabPanel value="8">Panel Four</TabPanel>
      </TabContext>
    </Box>
  );
};
