import styled from 'styled-components';


export const Container = styled.div`
  margin: 400px 0 80px 200px;

  @media (max-width: 768px) {
    margin: 0 0 80px 20px;
  }

  @media(max-width: 1440px) {
    .carreira-container {
      margin: 350px 0 80px 140px;
    }
  } 
  
`;

export const WrapperDetails = styled.div`
  display: flex;
  width: 80%;
  flex-direction: column;
  margin: 30px 0 0 0;
  gap: 20px;

  @media (max-width: 768px) {
    width: 100%;
    flex-direction: column;
  }

  @media(min-width: 1440px) {
    width: 70%;
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

  @media (max-width: 768px) {
    text-align: left;
  }
`;

export const WrapperTitles = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;
    margin: 0 0 20px 0;

    div {
      width: 90%; /* Ocupa toda a largura */
      text-align: left;
      margin:0 20px 0 0; /* Ajuste conforme necessário */
    }
  }
`;


