import styled from "styled-components";

export const Navbar = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 2rem 1rem;
  display: flex;
  justify-content: space-between;
  gap: 2rem;

  li{
    list-style: none;
    font-size: 1rem;
    font-weight: 600;
    color: #fff;
    cursor: pointer;
    transition: 0.3s;

    margin: 1rem 2rem;
  }

  li:hover{
    transform: scale(1.1);
  }
`;

export const Container = styled.div`
  max-width: 1200px;
  margin: auto;
  padding: 5rem 2rem;
  position: relative;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  align-items: center;
  gap:  5rem;
`;

export const BlurSpan = styled.span`
  position: absolute;
  box-shadow: 0 0 1000px 50px #1d4ed8;
  z-index: -100; 
`;

export const AboutContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 120%;

  h4{
    margin-bottom: 1rem;
    font-weight: 600;
    font-size: 1rem;
    color: #ccc
  }

  h1{
    color: #fff;
    margin-bottom: 1rem;
    font-weight: 700;
    font-size: 3rem;
    line-height: 4rem;

  }
  
  p{
    margin-bottom: 2rem;
    color: #ccc;
  }

  img{
    max-width: 700px;
    margin: auto;
  }
`;

export const AboutImage = styled.div`
    width: 100%;
    height: 100%;

`;

