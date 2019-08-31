import styled from 'styled-components';

export const Loading = styled.div`
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 30px;
  font-weight: bold;
`;

export const Owner = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  img {
    width: 120px;
    border-radius: 50%;
  }

  h1 {
    margin-top: 10px;
    font-size: 24px;
  }

  p {
    color: #666;
    margin-top: 5px;
    max-width: 400px;
    text-align: center;
    line-height: 1.5;
  }
`;
