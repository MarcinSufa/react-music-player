import React from 'react';
import { GlobalStyle, StyledWrapper } from './Layout.style';
import { theme } from '../utils/theme';
import { ThemeProvider } from 'styled-components';

const Layout = ({ children }) => (
    <ThemeProvider theme={theme}>
        <>
            <GlobalStyle />
            <StyledWrapper>{children}</StyledWrapper>
        </>
    </ThemeProvider>
);

export default Layout;
