import styled from "styled-components";

export const Container_Home = styled.div`
  width: min(90vw, 800px);
	margin: auto;
`;

export const Title_Home = styled.div`
  margin-top: 15px;
	padding: 5px;
	margin-bottom: 10px;
`;

export const Title = styled.h2`
 	font-weight: 700;
	font-size: 1.9rem;
`;

export const List_Product = styled.section`
  margin-top: 20px;
`;

export const Product_Card = styled.section`
  border-radius: 8px;
	border: 1px solid #c3c3c3;
	box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
	display: flex;
	padding: 15px;
	align-items: flex-start;
`;

export const Product_CardImage = styled.img`
 	max-width: 100px;
	margin-right: 20px;
`;

export const Product_CardInfo = styled.div`
	flex-grow: 1;
`;

export const Product_CardTitle = styled.h2`
	font-size: 16px;
  color: #2C2E50;
  font-weight: 500;
`;

export const Product_CardPrice = styled.span`
	font-size: 26px;
	font-weight: 700;
	color: #000cff;
`;

export const Product_CardFooter = styled.div`

    display: flex;
    justify-content: space-between;
    align-items: center;

  span {
	font-size: 12px;
	line-height: 18px;
	padding: 2px 6px;
	border-radius: 3px;
	font-weight: 400;
} 

.product-card-category {
  background-color: #95A5A6;
  color:rgba(0, 0, 0, 0.15);
  font-weight: 700;
  max-width: 345px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

 .product-category--Acessorios{
	color: #fff;
	background-color: #2773bb;
}
 .product-category--Calçados{
	color: #fff;
	background-color: #27bbac;
}
 .product-category--Eletronicos{
	color: #fff;
	background-color: #24dc71d4;
}
 .product-category--Esportivos{
	color: #fff;
	background-color: #c9dc24d4;
}
 .product-category--Roupas{
	color: #fff;
	background-color: #dc245bd4;
}

`;

export const Product_CardCount = styled.span`
  margin-left: auto;
  margin-right: 20px;
  color: #2C2E50;
  background-color: unset;
  border: unset;
  white-space: nowrap;
`;

export const Product_ButtonBuy = styled.button`
 	border: none;
  color: #fff;
  border-radius: 4px;
  background-color: #4bb995;
  text-decoration: none;
  padding: 15px 25px;
  margin-left: 10px;
	cursor: pointer;
`;

export const Product_ButtonEdit = styled.button`
  border: 1px solid #000cff;
  border-radius: 4px;
  color: #000cff;
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
  padding: 8px 10px;
  margin-left: 10px;
	cursor: pointer;
`;





