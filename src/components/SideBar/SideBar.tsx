import * as S from './styles.ts';
import Experiencias from '../Experiencias/Experiencias.tsx';
import Blog from '../Blog/Blog.tsx';
import Contato from '../Contato/Contato.tsx';
import Tecnologias from '../Tecnologias/Tecnologias.tsx';

const SideBar = ({ selectedComponent }:any) => {
  return (
    <S.Container>
      {selectedComponent === "Carreira" && <Experiencias />}
      {selectedComponent === "Blog" && <Blog />}
      {selectedComponent === "Contato" && <Contato />}
      {selectedComponent === "Tecnologias" && <Tecnologias />}

    </S.Container>
  );
};

export default SideBar;
