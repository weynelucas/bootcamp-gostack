import styled, { keyframes, css } from 'styled-components';

const rotate = keyframes`
  from {
    transform: rotate(0deg);
  }

  to {
    transform: rotate(360deg)
  }
`;

export const Title = styled.h1`
  font-size: 20px;
  display: flex;
  align-items: center;
  margin-bottom: 10px;

  svg {
    margin-right: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    padding: 5px 10px;
    margin-right: 10px;
    border-radius: 3px;
    border: 1px solid ${props => (props.error ? '#dc3545' : '#d1d5da')};
    font-size: 16px;
  }
`;

export const SubmitButton = styled.button.attrs(props => ({
  type: 'submit',
  disabled: props.loading,
}))`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #28a745;
  color: #fff;
  border: none;
  font-weight: bold;
  padding: 10px;
  border-radius: 3px;
  cursor: pointer;

  svg:not(:only-child) {
    margin-right: 5px;
  }

  &[disabled] {
    opacity: 0.2;
    cursor: not-allowed;
  }

  ${props =>
    props.loading &&
    css`
      svg {
        animation: ${rotate} 2s linear infinite;
      }
    `}
`;

export const List = styled.ul`
  margin-top: 30px;
  list-style: none;

  li {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 10px 0;

    & + li {
      border-top: 1px solid #e1e4e8;
    }

    svg {
      margin-right: 10px;
    }
  }
`;
