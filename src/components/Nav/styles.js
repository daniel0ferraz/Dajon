import styled from "styled-components";

export const Wrapper = styled.aside`
	float: left;
	border-right: 2px solid #393E41;
    background: rgb(238, 241, 244);
	width: 13%;
	height: 100vh;
`;

export const Navbar = styled.div`
	display: grid;
	background-color: inherit;
	color: black;
	padding: 22px 16px;
	width: 100%;
	border: none;
	outline: none;
	text-align: left;
	cursor: pointer;
	font: 400 17px Lato, sans-serif;
	color: white;
`;

export const Main = styled.main`
    padding:2.4rem 2.4rem;
    background: rgb(238, 241, 244);
	float: right;
    width: 87%;
    height: 100vh;
`;
