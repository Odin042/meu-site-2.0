import React from "react";
import * as S from "./styles.ts";
import { Container } from "./../Avatar/styles";
import { Chip, Divider, Typography } from "@mui/material";

const MockExperiencias = [
  {
    cargo: "Desenvolvedor Front-end Pleno @ Cliente DASA",
    status: "Atual",
    empresa: "Stefanini Brasil",
    periodo: "2023 - Atualmente",
    descricao:
      "Atuando como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, Material UI, Git, Jira, Confluence, Bitbucket, Jenkins, Kubernetes. Desenvolvendo novas funcionalidades para os produtos e mantendo as existentes.",
  },
  {
    cargo: "Desenvolvedor Front-end Junior @ Cliente ELO",
    status: "Anterior",
    empresa: "Stefanini Brasil",
    periodo: "2022 - 2023",
    descricao:
      "Atuava como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, StoryBook, Git, Gitlab, ServiceNow, Confluence, AWS. Desenvolvendo novas funcionalidade para a área de promoções e produtos e participei de um projeto iniciado do zero.",
  },
  {
    cargo: "Desenvolvedor Front-end",
    status: "Anterior",
    empresa: "Mobills - Toro Investimentos",
    periodo: "2022 - 2022",
    descricao:
      "Atuava como desenvolvedor front-end, utilizando ReactJS, Typescript, NodeJS, Styled Components, StoryBook, Git, Gitlab, Zeplin, Confluence, Trello. Desenvolvia novas funcionalidades para um app de emprestimos.",
  },
  {
    cargo: "Desenvolvedor Fullstack",
    status: "Anterior",
    empresa: "Tech Mahindra",
    periodo: "2022 - 2022",
    descricao:
      "Atuava como desenvolvedor fullStack, utilizando ReactJS,  Prime React, Git, Azure, MySql. Desenvolvia novas funcionalidades para um ERP de para uma marca de tintas para gestao de vendas e estoque.",
  },
  {
    cargo: "Desenvolvedor Web",
    status: "Anterior",
    empresa: "Catral",
    periodo: "2021 - 2022",
    descricao:
      "Atuava como desenvolvedor fullStack, utilizando ReactJS, CSS,  Chakra UI, Git, Trello, MongoDB, VTEX IO. Desenvolvia novas ferramentas para emissao de nota fiscal, rastreio de produtos e reformulação do site de ecommerce.",
  },
  {
    cargo: "Analista de Suporte Pleno",
    status: "Anterior",
    empresa: "Catral",
    periodo: "2018 - 2021",
    descricao:
      "Atuava como suporte tecnico da empresa onde presta serviço para os outros colaboradores, realizando manutencao de computadores e impressoras, e auxiliando na manutencao de redes.",
  },
  {
    cargo: "Analista de Suporte Junior",
    status: "Anterior",
    empresa: "Novo Mundo Moveis e Utilidades",
    periodo: "2016 - 2018",
    descricao:
      "Atuava na area de suporte tecnico, realizando manutencao de computadores e impressoras, e auxiliando na manutencao de redes, fazia trabalho de campo, coordenada uma equipe de atendimento e tecnicos de compo.",
  },
  {
    cargo: "Operador de teleprocessamento",
    status: "Anterior",
    empresa: "Novo Mundo Moveis e Utilidades",
    periodo: "2013 - 2016",
    descricao:
      "Atuava na area de suporte tecnico, realizando manutencao de computadores e impressoras, e auxiliando na manutencao de redes.",
  },
  {
    cargo: "Estagiario",
    status: "Anterior",
    empresa: "Novo Mundo Moveis e Utilidades",
    periodo: "2013 - 2013",
    descricao:
      "Atuava na area de suporte tecnico, realizando manutencao de computadores e impressoras, e auxiliando na manutencao de redes.",
  },
];

const Experiencias = () => {
  return (
    <S.Container>
      {/* <Divider
        orientation='vertical'
        variant="middle"
        sx={{ width: "15%", margin: "40px 0 0 90px", height: "800px" }}
      /> */}
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
