import React, { useState, useEffect } from "react";
import { Switch, Route, Redirect } from "react-router-dom";
import Box from "@material-ui/core/Box";

import { LoadingContainer } from "./components/common";
import Header from "./containers/layout/Header";
import Signin from "./pages/Signin";
import Signup from "./pages/Signup";
import Home from "./pages/Home";
import Forgotpass from "./pages/Forgotpass";

import { useGlobalState } from "./store";

function App() {
  const [loaded, setLoaded] = useState(false);
  const [loggedin] = useGlobalState("loggedin");

  useEffect(() => {
    setLoaded(true);
  }, []);

  return (
    <Box display="flex" flexDirection="column" minHeight="100vh">
      <LoadingContainer loading={!loaded}>
        {() => (
          <>
            {loggedin ? (
              <>
                <Header />
                <Switch>
                  <Route exact path="/" component={Home} />
                  <Route render={() => <Redirect to="/" />} />
                </Switch>
              </>
            ) : (
              <Switch>
                <Route exact path="/signin" component={Signin} />
                <Route exact path="/signup" component={Signup} />
                <Route exact path="/forgotpass" component={Forgotpass} />
                <Route render={() => <Redirect to="/signin" />} />
              </Switch>
            )}
          </>
        )}
      </LoadingContainer>
    </Box>
  );
}

export default App;
