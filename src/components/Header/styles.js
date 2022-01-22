import styled from "styled-components";

export const Header = styled.header`
  min-width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  background: #000cff;
  opacity: 0.7;
  min-height: 60px;
  padding: 20px;

`;

export const TitleHeader = styled.h1`
  color: #fff;
  font-weight: 500;
  font-size: 2.8rem;
`;
export const ImageHeader = styled.img`
  height: 2.4rem;
  padding: 0px 3px 0 0
`;

export const BoxInfo = styled.div`
    display: flex;
    align-items: center;
`;

export const UserInfo = styled.div`

margin: 0px 0.7rem 0px 0px;
text-align: end;

h3 { 
  margin: 0;
  font-family: Roboto;
  font-size: 1.2rem;
  line-height: 18px;
  color: #ffffff;
  font-weight: 700;

}

span{
  color: #ffffff;
}

`;

export const BoxUser = styled.div`

img{
    width: 40px;
}
  
`;