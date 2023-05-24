import { injectGlobal } from "@emotion/css";

injectGlobal`
 html {
  box-sizing: border-box;
}

*,
*::before,
*::after {
  box-sizing: inherit;
}

body {
  margin: 0;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

code {
  font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
}

h1,
h2,
h3,
p,
ul,
li {
  margin: 0;
}

ul {
  list-style: none;
  padding-left: 0;
}

img {
  display: block;
  width: 100%;
}

a {
  text-decoration: none;
}

button {
  transform: scale(1);
  transition: transform 200ms linear;
  &:active {
  transform: scale(0.95);
}
}
`;
