import styled from 'styled-components';
import { Button, List, ListItem } from "@mui/material";

export const Container = styled.div`
  display: flex;
  align-items: center;
  height: 60px;
  width: 100%; 
  margin: 40px 0 0 140px;
  color: #252525;

  @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 0 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }

  
`;

export const HighlightedButton = styled(Button)`
  position: relative;
  color: inherit;

  &:hover {
    &::after {
      content: '';
      position: absolute;
      left: 50%;
      bottom: 0;
      transform: translateX(-50%);
      width: 0;
      height: 2px;
      background-color: #252525;
      transition: width 0.9s ease;
      width: 100%;
    }
  }

  @media(max-width: 1440px) {
    margin: 0 0 0 90px;
  }
`;

export const MenuList = styled(List)`
  display: flex;

  @media (min-width: 320px ) and (max-width: 768px) {
    margin: 40px 0 0 0;
    flex-direction: column;
    width: 100%;
    text-align: left;
  }

  
`;

export const StyledListItem = styled(ListItem)`
  padding: 0;
  margin: 0;

  
`;