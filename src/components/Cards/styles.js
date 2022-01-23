import styled from 'styled-components';

export const Contaner_Card = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 15px;
  text-align: center;
  /* margin: 2rem 0 2rem 0; */

  @media (max-width: 900px) {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    gap: 15px;
  }
`;

export const Card = styled.div`
  max-width: 230px;
  background: #fff;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  border-radius: 6px;
  margin: 0 auto;
`;

export const Card_Img = styled.div`
  margin: 5px 0 5px 0;
  height: 200px;

  img {
    background-position: center;
    background-size: cover;
    max-width: 100%;
    height: inherit;
  }
`;

export const Card_Info = styled.div`
  margin: 10px 0 10px 0;

  > h1 {
    width: 27ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
    padding: 10px;
    font-size: 15px;
    line-height: 20px;
    font-style: normal;
    color: #000;
    font-weight: 700;
  }

  > span {
    font-size: 12px;
    line-height: 22px;
    color: #625f5f;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 300;
  }

  .product-category--Acessorios {
    color: #fff;
    background-color: #2773bb;
  }
  .product-category--Calçados {
    color: #fff;
    background-color: #27bbac;
  }
  .product-category--Eletronicos {
    color: #fff;
    background-color: #24dc71d4;
  }
  .product-category--Esportivos {
    color: #fff;
    background-color: #c9dc24d4;
  }
  .product-category--Roupas {
    color: #fff;
    background-color: #dc245bd4;
  }
`;

export const Card_Price = styled.div`
  display: inline-grid;
  margin: 3px 0 10px 0;

  span {
    font-size: 16px;
    line-height: 22px;
    color: #000cff;
    font-weight: normal;
    margin-bottom: 5px;
  }

  button {
    width: 104px;
    height: 32px;
    border: 1px solid #000cff;
    border-radius: 5px;
    text-decoration: none;
    font-family: 'Roboto', sans-serif;
    font-weight: 700;
    line-height: 22px;
    font-size: 15px;
    color: #000;
    opacity: 0.8;
    background: none;
    cursor: pointer;
  }
`;
