import styled from 'styled-components';

export const Container = styled.div`
  button {
    border: 1px solid #d1d5da;
    background-color: #fff;
    cursor: pointer;
    padding: 7px 12px;
    color: #0366d6;
    font-weight: 500;

    &[disabled] {
      opacity: 0.2;
      cursor: not-allowed;
    }

    & + button {
      border-left: none;
    }

    &:first-child {
      border-top-left-radius: 3px;
      border-bottom-left-radius: 3px;
    }

    &:last-child {
      border-top-right-radius: 3px;
      border-bottom-right-radius: 3px;
    }
  }
`;
