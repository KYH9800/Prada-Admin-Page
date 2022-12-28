import styled from 'styled-components';

export const Navbar = styled.main`
  display: flex;
  justify-items: center;

  width: 80%;
  max-width: 1000px;
  height: 60px;
  line-height: 60px;

  margin: auto;

  div {
    background-color: gray;
    padding: 0 100px;
  }

  div:hover {
    background-color: gray;
  }
`;

export const Main = styled.main`
  margin: auto;
`;
