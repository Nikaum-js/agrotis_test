import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`
  :root {
    --color_brand_primary_darkest: #00796B;
    --color_brand_primary_medium: #00A98E;

    --color_white: #ffffff;
    --color_background: #F3F2F1;

    --color_neutral_medium_light: #9E9E9E;
    --color_neutral_dark: #333D47;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Roboto', sans-serif;
  }
  
  body { 
    background-color: var(--color_background);
  }

  button {
    cursor: pointer;
    background-color: transparent;
    border: none;
  }

  a, u {
    text-decoration: none;
  }

  ul {
    list-style: none;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%; //15px
    }
    
    @media (max-width: 720px) {
      font-size: 87.5%; //14px
    }
  }
`;
