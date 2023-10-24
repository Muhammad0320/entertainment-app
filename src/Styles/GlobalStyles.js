import { createGlobalStyle } from "styled-components";

const GlobalStyles = createGlobalStyle`

:root {

    --color-red: #fc4747;
    --color-red-light: #e56b6b;
    --color-primary: #10141e;
    --color-blue-grey: #5a698f;
    --color-white: #fff;
    --color-blue-dark: #161d2f;

}


*,
*::before,
*::after {
  box-sizing: border-box;
  padding: 0;
  margin: 0;


}

html {
  font-size: 62.5%;
}

body {
    font-family: 'Outfit', sans-serif;

  color: var(--color-white);
  background-color: var(--color-primary);


  
  min-height: 100vh;
  line-height: 1.5;
  font-size: 1.4rem;
}

::-webkit-scrollbar-track {

  background-color: var(--color-blue-dark);

  margin-block:1rem;


  
}

::-webkit-scrollbar-thumb{

  
  
  background-color: var(--color-red);
  border-radius: 2rem;
  

  &:hover{


    background-color: var(--color-red-light);
} 
}

::-webkit-scrollbar{

  height: 1.8rem;
  width: 2rem;


}

input,
button{
  font: inherit;
  color: inherit;
}

button {
  cursor: pointer;
}

*:disabled {
  cursor: not-allowed;
}


input:disabled {
  background-color: var(--color-blue-dark);
  color: var(--color-white);
}





a {
  color: inherit;
  text-decoration: none;
}

ul {
  list-style: none;
}

p,
h1,
h2,
h3,
h4,
h5,
h6 {
  overflow-wrap: break-word;

  hyphens: auto;

  -webkit-hyphens: auto;



}



`;

export default GlobalStyles;
