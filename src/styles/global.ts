import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  form {
    padding: 50px 0;

    input {
      width: 325px;
      height: 40px;
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
