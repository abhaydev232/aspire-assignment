import * as React from 'react';
import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';
import { createTheme, ThemeProvider } from "@mui/material";
import ShadowContainer from '../MainContainer/ShadowContainer';
import CardCarousel from '../CardCarousel/CardCarousel';
import './BasicTabs.css';
import CardActions from '../CardActions/CardActions';
import CardDetails from '../CardDetails/CardDetails';
import RecentTransactions from '../RecentTransactions/RecentTransactions';

// Theme customization for MUI Tabs
const theme = createTheme({
  components: {
    MuiTab: {
      styleOverrides: {
        root: {
          fontSize: "14px",
          fontWeight: 600,
          textTransform: "none",
          color: "#bcbcbc",
          "&.Mui-selected": {
            color: "black",
          },
        },
      },
    },
  },
});

// Props type for CustomTabPanel
interface CustomTabPanelProps {
  children?: React.ReactNode;
  value: number;
  index: number;
}

// TabPanel component
const CustomTabPanel: React.FC<CustomTabPanelProps> = ({ children, value, index, ...other }) => {
  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && <Box sx={{ p: 3 }}>{children}</Box>}
    </div>
  );
};

// Accessibility props helper
const a11yProps = (index: number) => ({
  id: `simple-tab-${index}`,
  'aria-controls': `simple-tabpanel-${index}`,
});

// Main BasicTabs component
const BasicTabs: React.FC = () => {
  const [value, setValue] = React.useState<number>(0);

  const handleChange = (event: React.SyntheticEvent, newValue: number) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', marginTop: '2%' }}>
      <Box sx={{ borderColor: 'divider' }}>
        <ThemeProvider theme={theme}>
          <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
            <Tab label="My Debit Card" {...a11yProps(0)} />
            <Tab label="All company cards" {...a11yProps(1)} />
          </Tabs>
        </ThemeProvider>
      </Box>

      <CustomTabPanel value={value} index={0}>
        <ShadowContainer>
          <div className='card-container'>
            <CardCarousel />
            <CardActions />
          </div>
          <div>
            <CardDetails />
            <RecentTransactions />
          </div>
        </ShadowContainer>
      </CustomTabPanel>

      <CustomTabPanel value={value} index={1}>
        {/* Add content for second tab here */}
      </CustomTabPanel>
    </Box>
  );
};

export default BasicTabs;
