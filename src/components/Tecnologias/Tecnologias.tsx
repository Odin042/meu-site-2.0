import * as S from "./styles.ts";
import { Typography } from "@mui/material";
import atomIcon from "../../assets/atom.png";
import js from "../../assets/js.png";
import styled from "../../assets/styled.jpeg"
import chakra from "../../assets/chakra.png"
import nodejs from "../../assets/nodejs.png"
import mui from "../../assets/MUI.png"
import jest from "../../assets/jest.png"
import git from "../../assets/git.png"
import storybook from "../../assets/storybook.png"
import typescript from "../../assets/typescript.png"

const MockStacks = [
  {
    icone: js,
    nome:'JavaScript',
    documentacao:'https://www.javascript.com/',
  },
  {
    icone: atomIcon,
    nome:'React',
    documentacao:'https://reactjs.org/',
  },
  {
    icone: typescript,
    nome:'TypeScript',
    documentacao:'https://www.typescriptlang.org/',
  },
  {
    icone: styled,
    nome:'Styled Components',
    documentacao:'https://styled-components.com/',
  },
  {
    icone: chakra,
    nome:'Chakra',
    documentacao:'https://chakra-ui.com/',
  },
  {
    icone: nodejs,
    nome:'NodeJS',
    documentacao:'https://nodejs.org/en',
  },
  {
    icone: mui,
    nome:'MUI',
    documentacao:'https://mui.com/material-ui/',
  },
  {
    icone: jest,
    nome:'JEST',
    documentacao:'https://jestjs.io/pt-BR/',
  },
  {
    icone: git,
    nome:'Git',
    documentacao:'https://git-scm.com/',
  },
  {
    icone: storybook,
    nome:'StoryBook',
    documentacao:'https://storybook.js.org/',
  },
]


const Tecnologias = () => {
  return (
    <S.Container>
      <Typography variant="h4" component="h2" fontFamily={"Poppins"}>
        Tecnologias
      </Typography>
      <S.Titles>
        <Typography variant="h6">
          Abaixo estão algumas tecnologias com as quais já trabalhei ou que simplesmente gosto de trabalhar.
        </Typography>
      </S.Titles>
      <S.WrapperStacks>
        {MockStacks.map((stack) => (
          <S.Stack>
            <S.Icone>
              <S.IconeImg src={stack.icone} alt={stack.nome} />
            </S.Icone>
            <S.Nome>{stack.nome}</S.Nome>
            <S.Documentacao>{stack.documentacao}</S.Documentacao>
          </S.Stack>
        ))}
      </S.WrapperStacks>
    </S.Container>
  );
};

export default Tecnologias;
