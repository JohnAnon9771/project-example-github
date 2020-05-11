import styled, { createGlobalStyle } from 'styled-components';

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    outline: 0;
  }

  html,
  body {
    height: 100%;
  }

  body {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
   }
`;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  form {
    padding: 50px 0;

    input {
      width: 325px;
      height: 40px;
      padding: 10px;
      border: 0;
      border-radius: 5px;
      margin-right: 20px;
      box-shadow: 0px 4px 8px rgba(0, 0, 0, 0.25);
    }

    button {
      background: #000;
      width: 40px;
      height: 40px;
      border: 0;
      border-radius: 50%;
      box-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
    }
  }
`;
