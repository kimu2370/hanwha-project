import React from 'react';
import ReactDOM from 'react-dom';
import {ThemeProvider} from 'styled-components';
import theme from 'theme';
import Routes from './routes';
import GlobalStyles from './style';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

ReactDOM.render(
    <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Routes />
    </ThemeProvider>,
    document.getElementById('root')
);
