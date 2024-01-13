import React, { useState } from "react";
import * as S from "./styles.ts";
import SideBar from "../SideBar/SideBar.tsx"; 

export const MenuPage = () => {
  const [selectedComponent, setSelectedComponent] = useState<string | null>(null);

  const handleButtonClick = (componentRender: string | React.SetStateAction<null>) => {
    setSelectedComponent(prevState => typeof componentRender === 'string' ? componentRender : prevState);
  };

  return (
    <S.Container>
      <S.MenuList aria-label="menu">
        <S.StyledListItem>
          <S.HighlightedButton
            color="inherit"
            onClick={() => handleButtonClick("Carreira")}
          >
            Carreira
          </S.HighlightedButton>
        </S.StyledListItem>
        <S.StyledListItem>
          <S.HighlightedButton
            color="inherit"
            onClick={() => handleButtonClick("Blog")}
          >
            Blog
          </S.HighlightedButton>
        </S.StyledListItem>
        <S.StyledListItem>
          <S.HighlightedButton
            color="inherit"
            onClick={() => handleButtonClick("Contato")}
          >
            Contato
          </S.HighlightedButton>
        </S.StyledListItem>
        <S.StyledListItem>
          <S.HighlightedButton
            color="inherit"
            onClick={() => handleButtonClick("Tecnologias")}
          >
            Tecnologias
          </S.HighlightedButton>
        </S.StyledListItem>
      </S.MenuList>
      <SideBar selectedComponent={selectedComponent} />
    </S.Container>
  );
};

export default MenuPage;