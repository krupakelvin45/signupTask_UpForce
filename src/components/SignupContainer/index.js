import * as React from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import SignupForm from "../SignupForm/SignupForm";
import "./index.css";

const SignupContainer = (props) => {
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

  const [value, setValue] = React.useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <div className="box">
      <Tabs
        centered
        value={value}
        centered
        onChange={handleChange}
        aria-label="basic tabs example"
        textColor="primary"
        className="muiTab"
      >
        <Tab className="muiButton mb-2" label="Fan Signup" {...a11yProps(0)} />
        <Tab
          className="muiButton mb-2"
          label="Talent Signup"
          {...a11yProps(1)}
        />
      </Tabs>

      <TabPanel value={value} index={0}>
        <SignupForm type="Fan"></SignupForm>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <SignupForm type="Talent"></SignupForm>
      </TabPanel>
    </div>
  );
};

export default SignupContainer;
