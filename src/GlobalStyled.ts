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
  color: black;
  display: block;
}

img {
  width: 100%;
  display: block;
}

:root {
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

  --back-y: #FFFBEA;
  --back-gr: #F0FDF4;
  --back-r: #FBEDEC;

  --big-size: 60px;
  --heading-size: 32px;
  --weather-icon: 45px;
  --time-size: 40px;
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