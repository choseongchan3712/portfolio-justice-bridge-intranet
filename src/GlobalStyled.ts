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

  --gray-1: #F3F3F3;
  --gray-2: #DAD9DA;
  --gray-3: #A09D9F;

  --back-y: #FFFBEA;
  --back-gr: #F0FDF4;
  --back-r: #FBEDEC;

  --big-size: 60px;
  --heading-size: 32px;
  --title-size: 20px;
  --normal-size: 16px;
  --medium-size: 14px;
  --small-size: 10px;
}

`;