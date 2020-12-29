import React from "react";
import ReactDOM from "react-dom";
import { Router } from "react-router-dom";
import { ThemeProvider, StylesProvider } from "@material-ui/styles";
import CssBaseLine from "@material-ui/core/CssBaseline";
import App from "./App";
import history from "./libs/history";
import theme from "./styles/theme";
import "./index.css";
import reportWebVitals from "./reportWebVitals";

const Main = () => (
  <Router history={history}>
    <ThemeProvider theme={theme}>
      <StylesProvider injectFirst>
        <CssBaseLine />
        <App />
      </StylesProvider>
    </ThemeProvider>
  </Router>
);

ReactDOM.render(<Main />, document.getElementById("root"));
reportWebVitals();
