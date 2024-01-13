import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 0 980px 300px;

    @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 90px 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }
`;

export const Contacts = styled.div`
    display: flex;
    align-items: center;
    gap: 20px;
    margin: 70px 0 0 0;
`;