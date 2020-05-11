import styled from 'styled-components';

export const Content = styled.li`
  display: flex;
  flex-wrap: wrap;
  padding: 10px;
  margin-bottom: 31px;
  margin-left: 20px;
  div {
    margin-top: 5px;
    strong {
      display: block;
      font-style: normal;
      font-weight: 600;
      font-size: 17px;
      line-height: 22px;
    }
    h3 {
      display: block;
      margin-top: 2px;
      font-size: 15px;
      line-height: 20px;
      color: #151522;
    }
  }

  img {
    width: 70px;
    height: 70px;
    margin: 10px;
    box-shadow: 8px 4px 49px rgba(50, 50, 71, 0.08),
      0px 4px 4px rgba(0, 0, 0, 0.25);
    border-radius: 4px;
  }
`;
