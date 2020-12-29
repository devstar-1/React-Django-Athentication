import React from "react";
import PropTypes from "prop-types";
import { withRouter } from "react-router-dom";
import AppBar from "@material-ui/core/AppBar";
import Box from "@material-ui/core/Box";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";

import { signout } from "../../services/authApi";

// To do
function Header({ history }) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box flex={1}>
          <Typography variant="h6">Seller Fusion</Typography>
        </Box>
        <Box>
          <Button color="inherit" onClick={() => signout()}>
            Logout
          </Button>
        </Box>
      </Toolbar>
    </AppBar>
  );
}

Header.propTypes = {
  history: PropTypes.object,
};

export default withRouter(Header);
