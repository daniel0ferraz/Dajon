import styled from "styled-components";

export const Container_Home = styled.div`
    width: min(97vw,964px);
	margin: auto;
`;

export const Header = styled.div`
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 15px;
`;

export const BoxSearch = styled.div`

	display: flex;
	padding: 10px;
	margin: 20px 0;
	align-items:center;
	border: 1px solid #3c3c3c;
	border-radius: 6px;

	input{
    border: 0px;
    background: transparent;
    outline: 0;
    color: #3c3c3c;
    font-size: 14px;
    flex:1;
  }

  img{
	  color: #3c3c3c;
	  width: 20px;
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
	font-weight: 600;
	color: #3c3c3c;
`;

export const List_Product = styled.section`
  margin: 20px 0 20px 0;
`;


