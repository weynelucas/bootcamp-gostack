import styled from 'styled-components';

export const Container = styled.div`
  width: 700px;
  background-color: #fff;
  border: 1px solid #d1d5da;
  border-radius: 3px;
  padding: 30px;
  margin: 80px auto;

  h1 {
    font-size: 20px;
    display: flex;
    align-items: center;
    margin-bottom: 10px;

    svg {
      margin-right: 10px;
    }
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: row;

  input {
    flex: 1;
    padding: 10px 15px;
    margin-right: 10px;
    border-radius: 3px;
    border: 1px solid #d1d5da;
    font-size: 16px;
  }
`;
export const SubmitButton = styled.button.attrs({
  type: 'submit',
})`
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

  svg {
    margin-right: 5px;
  }
`;
