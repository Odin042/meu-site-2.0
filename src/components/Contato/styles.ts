import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 0 980px 300px;

    @media (max-width: 768px) {
    margin: 40px 100px 0 0;
    flex-direction: column;
    text-align: left;
  }

  @media(max-width: 1440px) {
    margin: 0 0 980px 130px;
  } 
`;

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 70px 0 0 0;

    @media (max-width: 768px) {
    margin: 80px 190px 0 0;
    text-align: left;
  }
`;