import styled from "styled-components";

export const Container_Home = styled.div`
 width: min(90vw, 900px);
	margin: auto;

	.header{
		display: flex;
		justify-content: space-between;
		align-items: center;
	}

	input, select{
	border: 1px solid #ddd;
	border-radius: 6px;
	background-color: #fff;
	height: 30px;
	padding: 0 10px;
}
`;

export const Title_Home = styled.div`
	margin-top: 10px;
	padding: 5px;
	margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-weight: 700;
	font-size: 1.9rem;
`;

export const Description = styled.p`
 	font-style: normal;
	font-size: 1rem;
	font-weight: 500;
	color: #494646;
`;

export const List_Product = styled.section`
  margin: 20px 0 20px 0;
`;


