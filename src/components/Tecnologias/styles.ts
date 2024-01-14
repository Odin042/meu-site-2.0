import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 0 400px 300px;

    @media  (max-width: 768px) {
    margin: 80px 0 0 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }

  @media(max-width: 1440px) {
        margin: 0 0 400px 180px;

        h2 {
            margin: 40px 210px 0 0;
        }
    } 
`;

export const Titles = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 0 0;
    width: 60%;

`;

export const WrapperStacks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 40px 60px 10px 0;

    @media (max-width: 768px) {
    margin: 80px 0 0 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }
`;

export const Stack = styled.div`
    display: flex;
    width: 90%;
    flex-direction: column;
    width: calc((100% - 2 * 60px) / 3);
    margin: 0 0 50px 0;

    @media (max-width: 1440px) {
        width: calc((100% - 3 * 40px) / 2);
    }
    
`;

export const Icone = styled.div`
    display: flex;
    align-items: center;
    width: 30px;

    @media(max-width: 1440px) {
    width: 20px;
    } 
`;

export const IconeImg = styled.img`
    display: flex;
    align-items: center;
    width:80px;
    height:80px;
`;

export const Nome = styled.div`
    display: flex;
    font-size: 30px;
    font-family: "Poppins", sans-serif;
    align-items: center;
    gap: 10px;

    @media(max-width: 1440px) {
        font-size: 20px;
    } 
`;

export const Documentacao = styled.div`
    display: flex;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    align-items: center;
    gap: 10px;

    @media(max-width: 1440px) {
        font-size: 15px;
        width: 30%;
    } 
`;
