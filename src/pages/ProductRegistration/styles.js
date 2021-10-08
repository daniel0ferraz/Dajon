import styled from "styled-components";

export const ContainerForm = styled.div`
	width: min(90vw, 800px);
	margin: auto;
`;

export const Form = styled.form`
	margin-top: 40px;
	/* width: 70%; */
	border: 1px solid #000cff;
	border-radius: 5px;
	padding: 20px;
`;

export const TituloHome = styled.div`
	width: 300px;
	margin-top: 10px;
	padding: 5px;
	margin-bottom: 40px;

	h2 {
	font-weight: 500;
	font-size: 1.9rem;
}
	p{
	font-style: normal;
	font-size: 1rem;
	}
`;

export const FormGroup = styled.div`
	display: flex;
	flex-direction: column;
	margin-top: 5px;
	margin-bottom: 20px;

	label {
	margin-bottom: 5px;
	font-size: 14px;
	font-weight: 500;
	color: #555555;
	/* font-family: 'Roboto', sans-serif; */
}
input, select{
	border: 1px solid #ddd;
	border-radius: 6px;
	background-color: #fff;
	height: 47px;
	padding: 0 10px;
}
`;

export const row = styled.div`
	display: flex;
`;

export const Button = styled.button`
	margin-top: 10px;
	width: 200px;
	height: 40px;
	border: 1px solid #000cff;
	border-radius: 5px;
	text-decoration: none;
	font-weight: 500;
	line-height: 22px;
	font-size: 14px;
	align-items: center;
	color: #000;
	opacity: 0.8;
	background: none;
	cursor: pointer;
`;
