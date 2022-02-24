import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

* {
    margin: 0px;
    padding: 0px;
    box-sizing: border-box;
}

.app {
display: grid;
grid-template-columns: 2fr 4fr 2fr;
gap: 5px;
}

.div-1 {
    border: 1.5px solid;
}

.div-2 {
    border: 1.5px solid;
}

.div-3 {
    border: 1.5px solid;
}

@media screen and ( max-width: 500px ){
    
    .app {
        display: flex;
        flex-direction: column;
        gap: 10px;
    }

    .div-1 {
        height: 25vh;
    }

}

`;