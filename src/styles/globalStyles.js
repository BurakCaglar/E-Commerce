import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/************** VARIABLES **************/

:root {
  --black: #1b1b1b;
  --grey: rgb(97, 97, 97);
  --light-grey: #d1cdcd;
  --white: #fff;
  --button-color: #FBB03B;
  --transition: all 0.3s linear;
  --spacing: 0.12rem;
  --radius: 0.3rem;
  --max-width: 1280px;
  --fixed-width: 700px;
}
/*********  GLOBAL STYLES ********/

*,
::after,
::before {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}
*:focus {
    outline: none;
}

html {
  font-size: 10px;
}
body {
  font-family: 'Poppins', sans-serif;
  line-height: 1.5;
  font-size: 1rem;
}
ul {
  list-style-type: none;
}
a {
  text-decoration: none;
}
hr {

  opacity: 0.4;
}


h1 {
    font-size: 6.6rem;
  }
  h2 {
    font-size: 3rem;
  }
  h3 {
    font-size: 2.9rem;
  }
  h4 {
    font-size: 2rem;
  }
  h5 {
    font-size: 1.3rem;
    font-weight: 400;
    
  }
  h6 {
    font-size: 1.3rem;
  }

  p {
    font-size: 1.3rem;
    color: #808080;
  }

/***********  GLOBAL CLASSNAMES ************/

.container {
  padding: 5rem 0;
}
.container-center {
  width: 90vw;
  margin: 0 auto;
  max-width: var(--max-width);
}

@media screen and (min-width: 992px) {
  .container-center {
    width: 95vw;
  }
}

.page-100 {
  min-height: calc(100vh - 10rem);
  padding: 5rem 0;
}
.page {
  min-height: calc(100vh - (20vh + 10rem));
}


`;

export default GlobalStyle;
