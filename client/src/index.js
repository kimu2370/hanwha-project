import React from "react";
import ReactDOM from "react-dom";
import {ThemeProvider} from "styled-components";
import theme from "theme";

import App from "./App";
import GlobalStyles from "./style";

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <App />
    </ThemeProvider>,
    document.getElementById("root")
);
