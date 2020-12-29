import React from "react";
import { withStyles } from "@material-ui/core/styles";
import MenuItem from "@material-ui/core/MenuItem";
import Select from "@material-ui/core/Select";
import InputBase from "@material-ui/core/InputBase";

const BootstrapInput = withStyles((theme) => ({
  root: {
    "label + &": {
      marginTop: theme.spacing(3),
    },
  },
  input: {
    borderRadius: 10,
    position: "relative",
    backgroundColor: "rgba(245, 245, 250, 0.1)",
    color: "#FFFFFF",
    width: 100,
    height: 30,
    fontFamily: "DM Sans",
    fontSize: 14,
    fontWeight: "bold",
    textAlign: "center",
    textAlignLast: "center",
    padding: "10px 12px 0px 12px",
    transition: theme.transitions.create(["border-color", "box-shadow"]),
    "&:focus": {
      borderRadius: 4,
      borderColor: "#80bdff",
      boxShadow: "0 0 0 0.2rem rgba(0,123,255,.25)",
    },
  },
}))(InputBase);

// Dropdown menu for lang select on login page
function LangSelect() {
  const [age, setAge] = React.useState("10");
  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <Select
      labelId="demo-customized-select-label"
      id="demo-customized-select"
      value={age}
      onChange={handleChange}
      input={<BootstrapInput />}
    >
      <MenuItem value={10}>English(US)</MenuItem>
      <MenuItem value={20}>France</MenuItem>
      <MenuItem value={30}>Deutch</MenuItem>
      <MenuItem value={40}>Spanish</MenuItem>
    </Select>
  );
}

export default LangSelect;
