import styled, { createGlobalStyle } from 'styled-components';
import { theme } from '../utils/theme';

//fonts
import GirloyBold from '../utils/fonts/Gilroy-Bold.woff';
import GirloyHeavy from '../utils/fonts/Gilroy-Heavy.woff';
import GirloyLight from '../utils/fonts/Gilroy-Light.woff';
import GirloyMedium from '../utils/fonts/Gilroy-Medium.woff';
import GirloyRegular from '../utils/fonts/Gilroy-Regular.woff';

export const GlobalStyle = createGlobalStyle`

@font-face {
font-family: 'Gilroy-Bold';
font-style: normal;
font-weight: normal;
src: local('Gilroy-Bold'), url(${GirloyBold}) format('woff');
}
@font-face {
font-family: 'Gilroy-Heavy';
font-style: normal;
font-weight: normal;
src: local('Gilroy-Heavy'), url(${GirloyHeavy}) format('woff');
}


@font-face {
font-family: 'Gilroy-Light';
font-style: normal;
font-weight: normal;
src: local('Gilroy-Light'), url(${GirloyLight}) format('woff');
}


@font-face {
font-family: 'Gilroy-Medium';
font-style: normal;
font-weight: normal;
src: local('Gilroy-Medium'), url(${GirloyMedium}) format('woff');
}


@font-face {
font-family: 'Gilroy-Regular';
font-style: normal;
font-weight: normal;
src: local('Gilroy-Regular'), url(${GirloyRegular}) format('woff');
}


    body {
        padding: 0;
        margin: 0;
        width: 100vw;
        overflow-x: hidden;
        font-family: 'Gilroy-Regular';
    }

    *, *::before, *::after {
        box-sizing: border-box;
        
    }


`;

export const StyledWrapper = styled.div`
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    /* justify-content: center; */
    align-items: center;
    background-color: ${theme.colors.secondary};
`;
