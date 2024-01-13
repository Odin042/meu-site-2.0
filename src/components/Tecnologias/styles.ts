import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 0 400px 300px;

    @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 0 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }
`;

export const Titles = styled.div`
    display: flex;
    align-items: center;
    margin: 40px 0 0 0;

`;

export const WrapperStacks = styled.div`
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    margin: 40px 0 10px 0;

    @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 0 0;
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
    
`;

export const Icone = styled.div`
    display: flex;
    align-items: center;
    width: 30px;
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
`;

export const Documentacao = styled.div`
    display: flex;
    font-size: 20px;
    font-family: "Poppins", sans-serif;
    align-items: center;
    gap: 10px;
`;
