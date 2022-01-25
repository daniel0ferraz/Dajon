import styled from 'styled-components';

export const Container_Home = styled.div`
  width: min(97vw, 964px);
  margin: auto;
`;

export const Title_Home = styled.div`
  display: flex;
  align-items: center;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  border-radius: 8px;
  margin-top: 15px;
  padding: 10px;
  margin-bottom: 10px;

  a {
    display: flex;
    align-items: center;
    font-size: 1rem;
    text-decoration: none;
    color: #3c3c3c;
    font-weight: 400;
  }

  img {
    width: 30px;
  }
`;

export const List_Product = styled.section`
  margin-top: 20px;

  @media (max-width: 900px) {
    width: 100%;
  }
`;

export const Product_Card = styled.section`
  border-radius: 8px;
  box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
  display: flex;
  padding: 15px;
  align-items: flex-start;
`;

export const Product_CardImage = styled.img`
  max-width: 260px;
  margin-right: 20px;

  @media (max-width: 900px) {
    max-width: 200px;
  }

 	max-width: 100px;
	margin-right: 20px;
`;

export const Product_CardInfo = styled.div`
  flex-grow: 1;
  margin-top: 50px;
`;

export const Product_CardTitle = styled.h2`
  font-size: 18px;
  color: #2c2e50;
  font-weight: 500;
`;

export const Product_CardPrice = styled.span`
  font-size: 26px;
  font-weight: 700;
  color: #000cff;
`;

export const Alert_Stock = styled.div`
  display: flex;
  align-items: center;

  span {
    color: #2c2c2c;
    font-weight: 600;
    font-family: 'Roboto';
    font-size: 12px;
  }
`;

export const Product_CardFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 900px) {
    flex-wrap: wrap;
  }

  span {
    font-size: 12px;
    line-height: 18px;
    padding: 2px 6px;
    border-radius: 3px;
    font-weight: 400;
  }

  .product-card-category {
    background-color: #95a5a6;
    color: rgba(0, 0, 0, 0.15);
    font-weight: 700;
    max-width: 345px;
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
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

export const Product_CardCount = styled.span`
  margin-left: auto;
  margin-right: 20px;
  color: #2c2e50;
  background-color: unset;
  border: unset;
  white-space: nowrap;
`;

export const Product_ButtonBuy = styled.button`
  border: none;
  color: #fff;
  border-radius: 4px;
  background-color: #6bc874;
  text-decoration: none;
  padding: 15px 90px;
  font-weight: 600;
  margin-left: 10px;
  cursor: pointer;

  @media (max-width: 900px) {
    flex-wrap: wrap;
    margin: 0;
    padding: 15px 100px;
    margin-top: 3px;
  }
`;

export const Product_ButtonEdit = styled.button`
  border: 1px solid #000cff;
  border-radius: 4px;
  color: #000cff;
  font-weight: 600;
  text-decoration: none;
  padding: 8px 10px;
  margin-left: 10px;
  cursor: pointer;
`;

export const Product_ButtonDelete = styled.button`
  border: none;
  color: #fff;
  border-radius: 4px;
  background-color: #ff004c;
  text-decoration: none;
  padding: 8px 90px;
  margin-left: 10px;
  cursor: pointer;
`;
