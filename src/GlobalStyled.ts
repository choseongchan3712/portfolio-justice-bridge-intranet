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

div {
  &[data-theme='edge'] {
    cursor: none !important;
  }
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
  --sub-color-wh: #1A1A1A;
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
&[data-theme='edge'] {
  --main-color: #325935;
  --point-color-y: #325935;
  --point-color-br: #325935;
  --sub-color-r: #325935;
  --sub-color-bl: #325935;
  --sub-color-b: #022601;
  --sub-color-wh: #EDFDE8;
  --sub-color-gr: #325935;
  --sub-color-gr-light: #325935;
  --sub-color-y: #325935;

  --snow-light: #A0DF92;
  --snow-dark: #27381F;
  --sunny-light: #A0DF92;
  --sunny-dark: #27381F;
  --cloud-light: #A0DF92;
  --cloud-dark: #27381F;
  --rain-light: #A0DF92;
  --rain-dark: #27381F;

  --gray-1: #909C6A;
  --gray-2: #4A5A3C;
  --gray-3: #27381F;
  --op-gray-2: rgba(218,217,218,0.4);

  --back-y: #A0DF92;
  --back-gr: #A0DF92;
  --back-r: #A0DF92;
}

&[data-theme='dreamy']{
  --main-color: #572CA1;
  --point-color-y: #572CA1;
  --point-color-br: #572CA1;
  --sub-color-r: #572CA1;
  --sub-color-bl: #572CA1;
  --sub-color-b: #201224;
  --sub-color-wh: #F1E5F5;
  --sub-color-gr: #572CA1;
  --sub-color-gr-light: #572CA1;
  --sub-color-y: #572CA1;

  --snow-light: #8577AC;
  --snow-dark: #572CA1;
  --sunny-light: #8577AC;
  --sunny-dark: #572CA1;
  --cloud-light: #8577AC;
  --cloud-dark: #572CA1;
  --rain-light: #8577AC;
  --rain-dark: #572CA1;

  --gray-1: #C8C4E5;
  --gray-2: #957DC1;
  --gray-3: #8577AC;
  --op-gray-2: rgba(149,125,193,0.4);

  --back-y: #DEC9F2;
  --back-gr: #DEC9F2;
  --back-r: #DEC9F2;
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
@media screen and (max-width: 1400px){
  --big-size: 60px;
  --weather-icon: 45px;
  --time-size: 40px;
  --heading-size: 32px;
  --top-size: 24px;
  --title-size: 20px;
  --normal-size: 16px;
  --medium-size: 14px;
  --small-size: 10px;
  --nav-width: 220px;
  --header-height: 70px;
  --wraper-padding: 20px;
}
@media screen and (max-width: 1200px){
  --big-size: 60px;
  --weather-icon: 45px;
  --time-size: 40px;
  --heading-size: 25px;
  --top-size: 22px;
  --title-size: 18px;
  --normal-size: 16px;
  --medium-size: 14px;
  --small-size: 10px;
  --nav-width: 200px;
  --header-height: 50px;
  --wraper-padding: 20px;
}


}

`;
