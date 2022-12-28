import styled from 'styled-components';

export const Main = styled.div`
  margin: 150px 0;
`;

export const Logo = styled.div`
  font-size: 30px;
  font-weight: bold;

  text-align: center;
  margin: 10px 0;
`;

export const Form = styled.form`
  border: 1px solid white;
  border-radius: 3px;
  margin: auto;
  text-align: center;

  width: 500px;
  height: 270px;

  label {
    display: none;
  }
`;

export const InputWrapper = styled.div`
  margin-top: 18%;

  input {
    width: 220px;
    height: 28px;
    outline: none;

    padding: 0 7px;
  }

  .userID {
    margin-bottom: 4px;
  }

  .userPW {
    margin-top: 4px;
  }
`;

export const BtnWrapper = styled.div`
  margin-top: 3%;

  button {
    cursor: pointer;

    width: 100px;
    height: 27px;

    margin: 0 4px;
    color: #fff;
    list-style: none;

    :hover {
      color: #a2a2a2;
      font-weight: bold;
    }
    :active {
      color: #fff;
      font-weight: 500;
    }
  }
`;
