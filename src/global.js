import { createGlobalStyle } from "styled-components";

export default createGlobalStyle`
*{
font-family: Poppins;
margin: 0px;
padding: 0px;
outline: none;
border: none;
border-sizing: border-box;
}

body{
    background-color: #18181b;
    color: #fff;
}

img{
    width: 100%;
    display: flex;    
}

li{
    list-style: none;

}

ul{
display: inline-flex;
}
`;
