import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;

  h2 {
    font-family: 'Poppins', sans-serif;
    margin: 30px 0 0 100px;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    width: 100%;

    h2 {
      font-size: 30px;
      margin: 30px 0 0 160px;
    }

    h6 {
      width: 100%;
      text-align: left;
    }

  }

  @media(max-width: 1440px) {
    margin: 0 0 0 100px;
  }
`;

export const Infos = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  margin: 20px 0 0 0;
  text-align: center;
  white-space: nowrap;
  gap: 7px;

  

`;

export const WrapperInfos = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 100px; 
  gap: 50px;

  @media (min-width: 320px ) and (max-width: 768px) {
    flex-direction: column;
    width: 50%;
    margin: 20px 0 0 150px;
  }

  @media(max-width: 1440px) {
    margin: 0 0 0 150px;
  }
 
`;

export const Description = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  text-align: center;
  margin: 50px 0 0 90px;
  width: 80%;

  @media (max-width: 768px) {
    margin: 40px 0 0 240px;
    width: 220%;
    text-align: left;
  }
`;