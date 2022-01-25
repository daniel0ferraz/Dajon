import styled from 'styled-components';

export const Container_Stock = styled.div`
  width: min(90vw, 800px);
  margin: auto;
  margin-top: 24px;

  .row {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 5px;
    text-align: center;
  }
`;

export const CardsItens = styled.div`
  overflow: hidden;
  padding: 1.5rem 1rem;
  border-radius: 0.25rem;
  margin-bottom: 2rem;
  box-shadow: 0 4px 8px #d4d8db;

  :nth-child(4) {
    background: #6bc874;
    color: #ffffff;
  }

  h3 {
    font-weight: normal;
    font-size: 1rem;
  }
`;

export const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const CardResult = styled.div`
  margin: 10px 0 0 0;

  span {
    font-size: 2rem;
    line-height: 3rem;
    white-space: nowrap;
    margin-top: 1rem;
    color: #3c3c3c;
  }
  span.total {
    color: #ffffff;
  }
`;
