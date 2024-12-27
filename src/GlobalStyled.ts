import { createGlobalStyle } from "styled-components";
import reset from "styled-reset";

export const GlobalStyled = createGlobalStyle`
${reset};

*{
  box-sizing: border-box;
  word-spacing: -1px;
  letter-spacing: -1px;
}

a {
  text-decoration: none;
  display: block;
}

img {
  width: 100%;
  display: block;
}

:root {
  &[data-theme='normal']{
  --main-color: #D84841;
  --point-color-y: #E2B35D;
  --point-color-br: #531310;
  --sub-color-r: #FF3527;
  --sub-color-bl: #097DF3;
  --sub-color-b: #000;
  --sub-color-wh: #fff;
  --sub-color-gr: #24D34C;
  --sub-color-gr-light: #7AE3A1;
  --sub-color-y: #FACA77;

  --snow-light: #7988A6;
  --snow-dark: #1C2F4F;
  --sunny-light: #F1C648;
  --sunny-dark: #EC7263;
  --cloud-light: #7FB8EE;
  --cloud-dark: #388DE8;
  --rain-light: #494E79;
  --rain-dark: #2A315D;

  --gray-1: #F3F3F3;
  --gray-2: #DAD9DA;
  --gray-3: #A09D9F;
  --op-gray-2: rgba(218,217,218,0.4);

  --back-y: #FFFBEA;
  --back-gr: #F0FDF4;
  --back-r: #FBEDEC;
}

  &[data-theme='dark']{
  --main-color: #A0A0A0;
  --point-color-y: #A0A0A0;
  --point-color-br: #A0A0A0;
  --sub-color-r: #A0A0A0;
  --sub-color-bl: #A0A0A0;
  --sub-color-b: #FFFFFF;
  --sub-color-wh: #121212;
  --sub-color-gr: #A0A0A0;
  --sub-color-gr-light: #A0A0A0;
  --sub-color-y: #A0A0A0;

  --snow-light: #FFFFFF;
  --snow-dark: #A0A0A0;
  --sunny-light: #FFFFFF;
  --sunny-dark: #A0A0A0;
  --cloud-light: #FFFFFF;
  --cloud-dark: #A0A0A0;
  --rain-light: #FFFFFF;
  --rain-dark: #A0A0A0;

  --gray-1: #333333;
  --gray-2: #424242;
  --gray-3: #7A7A7A;
  --op-gray-2: rgba(66, 66, 66,0.4);

  --back-y: #333333;
  --back-gr: #333333;
  --back-r: #333333;
}

  --big-size: 60px;
  --weather-icon: 45px;
  --time-size: 40px;
  --heading-size: 32px;
  --top-size: 24px;
  --title-size: 20px;
  --normal-size: 16px;
  --medium-size: 14px;
  --small-size: 10px;
  --nav-width: 300px;
  --header-height: 70px;
  --wraper-padding: 20px;
}

`;
