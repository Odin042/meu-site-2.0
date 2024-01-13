import styled from 'styled-components';

export const Container = styled.div`
    margin: 0 0 1080px 200px;

    @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 40px 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }
`;