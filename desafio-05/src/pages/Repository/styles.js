import styled, { css } from 'styled-components';

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

export const IssueList = styled.ul`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #d1d5da;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 15px;
    border-color: #d1d5da;
    border-style: solid;
    border-width: 1px;

    &:first-child {
      border-radius: 3px 3px 0 0;
    }

    &:last-child {
      border-radius: 0 0 3px 3px;
    }

    & + li {
      border-top: none;
    }

    img {
      width: 34px;
      border-radius: 50%;
    }

    div {
      display: flex;
      flex-direction: column;
      margin-left: 10px;

      a {
        color: #333;
        text-decoration: none;
        font-size: 16px;

        &:hover {
          color: #0366d6;
          text-decoration: underline;
        }
      }

      span {
        border-radius: 2px;
        font-size: 12px;
        background-color: #d1d5da;
        padding: 3px;
        margin-left: 10px;
        color: #333;
      }

      p {
        color: #666;
      }
    }
  }

  ${props =>
    props.loading &&
    css`
      opacity: 0.2;
    `}
`;
