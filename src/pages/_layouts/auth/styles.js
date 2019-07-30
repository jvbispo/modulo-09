import styled from 'styled-components';
import { darken } from 'polished';

export const Wrapper = styled.div`
  height: 100%;
  background: linear-gradient(-90deg, #7159c1, #ab59c1);
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Content = styled.div`
  width: 100%;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  text-align: center;

  img {
    margin-bottom: 30px;
  }

  form {
    display: flex;
    flex-direction: column;

    input {
      background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      margin-bottom: 10px;
      height: 40px;
      color: #fff;
      padding: 0 10px;
      &::placeholder {
        color: rgba(255, 255, 255, 0.8);
      }
    }

    button {
      height: 40px;
      border-radius: 4px;
      background: #3b9eff;
      border: 0;
      font-size: 16px;
      color: rgba(255, 255, 255, 0.8);
      margin-bottom: 15px;
      transition: background 0.2s;

      &:hover {
        background: ${darken(0.03, '#3b9eff')};
      }
    }

    span {
      margin-bottom: 10px;
      color: rgb(250, 120, 120);
      border-radius: 4px;
    }

    a {
      color: #fff;
      font-size: 16px;

      &:hover {
        opacity: 0.8;
      }
    }
  }
`;
