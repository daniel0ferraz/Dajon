import styled, { css } from 'styled-components';

export const Container_Home = styled.div`
  width: min(97vw, 964px);
  margin: auto;
`;

export const Title_Home = styled.div`
  margin-top: 10px;
  padding: 5px;
  margin-bottom: 10px;
`;

export const Title = styled.h2`
  font-weight: 400;
  font-size: 1.9rem;
  font-family: 'Roboto';
  color: #3c3c3c;
`;

export const ListProduct = styled.section`
  ${({ theme }) => css`
    display: flex;
    align-items: center;
    justify-content: space-between;

    border-radius: 8px;
    box-shadow: 0 2px 7px 0 rgba(0, 0, 0, 0.15);
    background: ${theme.colors.white};

    margin-top: 10px;
    padding: 5px;
  `}
`;

export const ListGroupProductInfo = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const ImageProduct = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 78px;
  height: 78px;
  border-radius: 8px;

  background: #3c3c3c;

  img {
  }
`;

export const InfoProduct = styled.div`
  margin-left: 10px;

  h3 {
    font-weight: 700;
    font-size: 16px;
    color: #3c3c3c;
  }

  p {
    font-size: 12px;
    width: 20ch;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
`;
