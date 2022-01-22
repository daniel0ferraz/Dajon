import styled from "styled-components";

export const Itens = styled.div`
	display: flex;
	justify-content:center;
	align-items:center;

li{
	list-style-type: none;
	font-size: 12px;
    line-height: 22px;
    color: #625f5f;
    padding: 2px 6px;
    border-radius: 3px;
}

.product-category--Acessorios, 
.product-category--Roupas,
.product-category--Calçados,
.product-category--Eletronicos,
.product-category--Esportivos{
	color: #fff;
}
`;


