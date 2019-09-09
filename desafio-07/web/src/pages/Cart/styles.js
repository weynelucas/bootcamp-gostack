import styled from 'styled-components';
import { darken } from 'polished';

export const Container = styled.div`
  background-color: #fff;
  border-radius: 4px;
  padding: 30px;

  footer {
    display: flex;
    justify-content: space-between;
    margin-top: 30px;

    button {
      border: none;
      background: #7159c1;
      border-radius: 4px;
      color: #fff;
      font-weight: bold;
      padding: 12px 20px;
      cursor: pointer;
      transition: background 0.2s;
      text-transform: uppercase;

      &:hover {
        background: ${darken(0.03, '#7159c1')};
      }
    }
  }
`;

export const ProductTable = styled.table`
  width: 100%;

  thead th {
    color: #999;
    text-align: left;
    padding: 12px;
  }

  tbody td {
    padding: 12px;
    vertical-align: middle;
    border-bottom: 1px solid #ddd;
  }

  tbody td img {
    width: 120px;
  }

  strong {
    color: #333;
    display: block;
  }

  span {
    display: block;
    margin-top: 5px;
    font-size: 18px;
    font-weight: bold;
  }

  tbody td {
    button {
      background: none;
      border: none;
      cursor: pointer;
    }
  }

  tbody td div {
    display: flex;
    align-items: center;

    input {
      padding: 6px;
      margin: 0 5px;
      width: 50px;
      border: 1px solid #ddd;
      border-radius: 4px;
      color: #666;
    }
  }
`;

export const Total = styled.div`
  display: flex;
  align-items: baseline;

  span {
    color: #999;
  }

  strong {
    font-size: 28px;
    margin-left: 5px;
  }
`;
