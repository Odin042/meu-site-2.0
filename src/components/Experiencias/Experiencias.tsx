import * as S from "./styles.ts";
import { Chip,  Typography } from "@mui/material";

const MockExperiencias = [
  {
    cargo: "Desenvolvedor Front-end Pleno @ Cliente DASA",
    status: "Atual",
    empresa: "Stefanini Brasil",
    periodo: "2023 - Atualmente",
    descricao:
      "Atuo como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, Material UI, Git, Jira, Confluence, Bitbucket, Jenkins e Kubernetes. Desenvolvo novas funcionalidades para os produtos, além de realizar a manutenção das existentes.",
  },
  {
    cargo: "Desenvolvedor Front-end Júnior @ Cliente ELO",
    status: "Anterior",
    empresa: "Stefanini Brasil",
    periodo: "2022 - 2023",
    descricao:
      "Atuava como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, StoryBook, Git, Gitlab, ServiceNow, Confluence e AWS. Desenvolvi novas funcionalidades para a área de promoções e produtos, além de ter participado de um projeto iniciado do zero.",
  },
  {
    cargo: "Desenvolvedor Front-end",
    status: "Anterior",
    empresa: "Mobills - Toro Investimentos",
    periodo: "2022 - 2022",
    descricao:
      "Atuava como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, StoryBook, Git, Gitlab, ServiceNow, Confluence e AWS. Desenvolvi novas funcionalidades para a área de promoções e produtos, além de ter participado de um projeto iniciado do zero.",
  },
  {
    cargo: "Desenvolvedor Fullstack",
    status: "Anterior",
    empresa: "Tech Mahindra",
    periodo: "2022 - 2022",
    descricao:
      "Atuava como desenvolvedor full-stack, utilizando ReactJS, Prime React, Git, Azure e MySQL. Desenvolvia novas funcionalidades para um ERP de uma marca de tintas, focado na gestão de vendas e estoque.",
  },
  {
    cargo: "Desenvolvedor Web",
    status: "Anterior",
    empresa: "Catral",
    periodo: "2021 - 2022",
    descricao:
      "Atuava como desenvolvedor full-stack, utilizando ReactJS, CSS, Chakra UI, Git, Trello, MongoDB e VTEX IO. Desenvolvia novas ferramentas para emissão de nota fiscal, rastreio de produtos e reformulação do site de e-commerce.",
  },
  {
    cargo: "Analista de Suporte Pleno",
    status: "Anterior",
    empresa: "Catral",
    periodo: "2018 - 2021",
    descricao:
      "Atuava como suporte técnico na empresa, prestando serviços aos demais colaboradores. Realizava a manutenção de computadores e impressoras, além de auxiliar na manutenção de redes.",
  },
  {
    cargo: "Analista de Suporte Junior",
    status: "Anterior",
    empresa: "Novo Mundo Moveis e Utilidades",
    periodo: "2016 - 2018",
    descricao:
      "Atuava na área de suporte técnico, realizando manutenção de computadores e impressoras, além de auxiliar na manutenção de redes. Desempenhava atividades em campo, coordenava uma equipe de atendimento e técnicos de campo.",
  },
  {
    cargo: "Operador de teleprocessamento",
    status: "Anterior",
    empresa: "Novo Mundo Móveis e Utilidades",
    periodo: "2013 - 2016",
    descricao:
      "Atuava na área de suporte técnico, realizando manutenção de computadores e impressoras, além de prestar auxílio na manutenção de redes.",
  },
  {
    cargo: "Estagiário",
    status: "Anterior",
    empresa: "Novo Mundo Móveis e Utilidades",
    periodo: "2013 - 2013",
    descricao:
      "Atuava na area de suporte tecnico, realizando manutencao de computadores e impressoras, e auxiliando na manutencao de redes.",
  },
];

const Experiencias = () => {
  return (
    <S.Container className="carreira-container">
      <Typography variant="h4" component="h2" fontFamily={"Poppins"}>
        Carreira
      </Typography>
      <S.WrapperDetails>
        {MockExperiencias.map((experiencia) => (
          <S.WrapperDetail>
            <S.Detail>
              <S.WrapperTitles>
                {experiencia.status === "Atual" ? (
                  <Chip label={experiencia.status} color="success" />
                ) : (
                  <Chip label={experiencia.status} />
                )}
                <div>
                  <Typography
                    variant="h6"
                    component="h3"
                    fontFamily={"Poppins"}
                  >
                    {experiencia.cargo}
                  </Typography>
                  <Typography
                    variant="subtitle1"
                    component="p"
                    fontFamily={"Poppins"}
                  >
                    {experiencia.periodo}
                  </Typography>
                </div>
              </S.WrapperTitles>
              <Typography variant="h6" component="h4" fontFamily={"Poppins"}>
                {experiencia.empresa}
              </Typography>
              <Typography
                variant="subtitle2"
                component="p"
                fontFamily={"Poppins"}
              >
                {experiencia.descricao}
              </Typography>
            </S.Detail>
          </S.WrapperDetail>
        ))}
      </S.WrapperDetails>
    </S.Container>
  );
};

export default Experiencias;
