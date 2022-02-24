import styled from "styled-components";

export const Container = styled.div`

display: flex;
justify-content: center;
flex-wrap: wrap;

.div-h2 {
    width: 100%;
    text-align: center;
    padding-top: 5px;
}

ul {
    list-style: none;
}

li {
    display: flex;
    flex-direction: column;
    align-items: center;
    max-width: 150px;
    margin: 10px;
    border: 1px solid;

img {
    height: 15vh;
    max-width: 100%;
    margin-top:  10px;
    }
}

p {
    margin:  10px;
}

button {
    margin:  10px;
}

`;