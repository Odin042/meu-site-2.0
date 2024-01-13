import styled from 'styled-components';


export const Container = styled.div`
  margin: 0 0 80px 200px;

  @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 0 0;
    width: 100%;
  }
`;

export const WrapperDetails = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 30px 0 0 0;
  gap: 20px;

  @media (min-width: 320px ) and (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }
`;

export const WrapperDetail = styled.div`
  display: flex;
  margin-bottom: 10px;
`;

export const Detail = styled.div`
  display: flex;
  flex-direction: column;
  margin-right: 10px;

  @media (min-width: 320px ) and (max-width: 768px) {
    text-align: left;
  }
`;

export const WrapperTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (min-width: 320px) and (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 0 20px 0;

    div {
      width: 100%; /* Ocupa toda a largura */
      text-align: left;
      margin-top: 10px; /* Ajuste conforme necessário */
    }
  }
`;


