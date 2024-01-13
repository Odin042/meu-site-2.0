import * as S from "./styles.ts";
import Avatar from "@mui/material/Avatar";
import avatarImage from "../../assets/avatar.jpeg";
import { Divider, Typography } from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import HomeIcon from "@mui/icons-material/Home";
import CodeIcon from "@mui/icons-material/Code";

const AvatarPerson = () => {
  return (
    <S.Container>
      <Avatar
        alt="Guilherme Fernandes"
        src={avatarImage}
        sx={{
          width: 200,
          height: 200,
          margin: "130px 0 0 80px",
          "@media (max-width: 600px)": {
            width: 150,
            height: 150,
            margin: "50px 0 0 150px",
          },
        }}
      />
      <Typography variant="h2">Guilherme Fernandes</Typography>
      <Divider
        variant="middle"
        sx={{
          width: "85%",
          margin: "20px 0 0 100px",
          "@media (max-width: 600px)": {
            width: 250,
            margin: "20px 0 0 170px",
          },
        }}
      />
      <S.WrapperInfos>
        <S.Infos>
          <PersonIcon />
          <Typography
            variant="h6"
            sx={{ margin: " 0px  0 0 10px", fontFamily: "Poppins" }}
          >
            31 anos
          </Typography>
        </S.Infos>
        <S.Infos>
          <HomeIcon />
          <Typography
            variant="h6"
            sx={{ margin: " 0px  0 0 0px", fontFamily: "Poppins" }}
          >
            Goiânia - GO
          </Typography>
        </S.Infos>
        <S.Infos>
          <CodeIcon />
          <Typography
            variant="h6"
            sx={{ margin: " 0px  0 0 10px", fontFamily: "Poppins" }}
          >
            Front End Developer
          </Typography>
        </S.Infos>
      </S.WrapperInfos>
      <S.Description>
        <Typography variant="subtitle1">
          Apaixonado pelo que faço e pela vida, assim como sou entusiasmado pela
          vida.
          <br />
          Também sou apaixonado pelo desafio de ser programador e pelo mundo que
          ele me proporciona.
          <br />
          Sou atleta da vida real, gamer em alguns momentos e gosto de codificar
          algumas ideias às vezes.
        </Typography>
      </S.Description>
    </S.Container>
  );
};

export default AvatarPerson;
