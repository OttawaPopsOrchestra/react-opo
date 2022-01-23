import { TabContext, TabList, TabPanel } from "@mui/lab";
import { Tab } from "@mui/material";
import { Box } from "@mui/system";
import { ReactNode, SyntheticEvent, useState } from "react";

export type TabType = {
  label: string;
  text: string | ReactNode;
};

export default function TabsContainer({ tabs }: { tabs: TabType[] }) {
  const [value, setValue] = useState("1");

  const handleChange = (event: SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%", typography: "body1" }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
          <TabList
            scrollButtons
            allowScrollButtonsMobile
            onChange={handleChange}
            variant="scrollable"
            aria-label="lab API tabs example"
          >
            {tabs.map(({ label }, index) => (
              <Tab key={index} label={label} value={`${index}`} />
            ))}
          </TabList>
        </Box>
        {tabs.map(({ text }, index) => (
          <TabPanel key={`panel-${index}`} value={`${index}`}>
            {text}
          </TabPanel>
        ))}
      </TabContext>
    </Box>
  );
}
