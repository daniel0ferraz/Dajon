import styled, { css } from 'styled-components';

export const Container = styled.div`
  height: 100vh;
  position: relative;
  display: flex;
  flex-direction: column;
  -webkit-box-align: center;
  align-items: center;
  -webkit-box-pack: center;
  place-content: center;
  background: rgb(229, 229, 229);
`;

export const Form = styled.form`
  ${({ theme }) => css`
    width: 38.6rem;
    background: ${theme.colors.white};
    margin: 0px auto;
    padding: 5.6rem 2.4rem;
    text-align: center;
    border-radius: 0.8rem;
    background: rgb(255, 255, 255);
  `}
`;

export const FormGroup = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  margin-bottom: 20px;
  width: 100%;

  label {
    margin-bottom: 5px;
    font-size: 14px;
    font-weight: 500;
    color: #555555;
  }
  input,
  select {
    border: 1px solid #ddd;
    border-radius: 6px;
    background-color: #fff;
    height: 47px;
    padding: 0 10px;
  }
`;

export const Button = styled.button`
  ${({ theme }) => css`
    background: ${theme.colors.blue};
    color: ${theme.colors.white};
    border: none;
    height: 48px;
    width: 100%;
    font-size: 15px;
    font-family: 'Roboto';
    font-weight: 500;
    border-radius: 8px;
    cursor: pointer;
  `}
`;
