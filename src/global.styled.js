import styled, { createGlobalStyle } from "styled-components";


export const GlobalStyled = createGlobalStyle `

#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}



/* Main.css */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

*:before,
*:after {
  box-sizing: border-box;
}

a,
a:visited {
  text-decoration: none;
  cursor: pointer;
}

button,
._btn {
  cursor: pointer;
  outline: none;
}

ul li {
  list-style: none;
}

@keyframes card-animation {
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
}
html,
body {
  width: 100%;
  height: 100%;
  font-family: "Roboto", Arial, Helvetica, sans-serif;
  color: ${({theme})=> theme.text};
  background-color: ${({theme})=> theme.body};
}


// ._hover01:hover {
//     background-color: #33399b;
// }

// ._hover02:hover, .header__user:hover {
//     color: #33399b;
// }
// ._hover02:hover::after, .header__user:hover::after {
//     border-left-color: #33399b;
//     border-bottom-color: #33399b;
// }

// ._hover03:hover {
//     background-color: #33399b;
//     color: #FFFFFF;
// }
// ._hover03:hover a {
//     color: #FFFFFF;
// }
`;

export const Wrapper = styled.div `
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${({theme})=>theme.body};
`;

// Добавление смены темы
export const Container = styled.div`
max-width: 1260px;
width: 100%;
padding: 0 16px;
background-color: ${(theme) => theme};

background-color: ${({theme})=>theme.body};

@media screen and (max-width: 495px) {
      width: 100%;
      padding: 0 16px;
}
`;


export const Hover1 = (block) => styled[block] `
    &:hover {
        background-color: #33399b;
    }
`;
export const Hover2 = (elem) => styled[elem] `
    &:hover {
        color: #33399b;
    }
`;

export const Hover3 = (elem) => styled[elem] `
    &:hover {
        background-color: #33399b;
        color: #FFFFFF;
        a {
            color: #FFFFFF;
        }
    }
`;
