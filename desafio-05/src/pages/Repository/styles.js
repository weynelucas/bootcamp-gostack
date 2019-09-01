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
    margin-top: 20px;
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

export const IssueContainer = styled.div`
  margin-top: 30px;
  padding-top: 30px;
  border-top: 1px solid #d1d5da;
  list-style: none;
  transition: opacity 0.1s linear;

  ${props =>
    props.loading &&
    css`
      opacity: 0.2;
      pointer-events: none;
    `}
`;

export const IssueHeader = styled.div`
  border: 1px solid #d1d5da;
  border-radius: 3px 3px 0 0;
  border-bottom: none;
  padding: 20px 15px;
  font-size: 16px;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #f6f8fa;

  h1 {
    display: flex;
    align-items: center;
    font-size: 18px;
    font-weight: normal;

    span {
      margin-left: 5px;
      background-color: rgba(27, 31, 35, 0.08);
      font-size: 16px;
      padding: 2px 4px;
      text-align: center;
      border-radius: 20px;
    }

    svg {
      margin-right: 10px;
    }
  }

  select {
    background-color: transparent;
    border: none;
  }
`;

export const IssueList = styled.ul`
  li {
    display: flex;
    flex-direction: row;
    align-items: flex-start;
    padding: 10px 15px;
    border-color: #d1d5da;
    border-style: solid;
    border-width: 1px;

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

      strong {
        line-height: 1.9;
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
`;

export const Empty = styled.p`
  text-align: center;
  color: #666;
`;
