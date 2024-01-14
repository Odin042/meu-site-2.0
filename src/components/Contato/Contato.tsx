import * as S from "./styles.ts";
import { Link, Typography } from "@mui/material";
import EmailIcon from '@mui/icons-material/Email';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';

const Contato = () => {
  return (
    <S.Container>
       <Typography variant="h4" component="h2" fontFamily={"Poppins"}>
          Contato
        </Typography>
      <S.Contacts>
        <EmailIcon />
        <Typography variant="body1" component="p" fontFamily={"Poppins"}>
          Email: guilherme.sylva92@gmail.com
        </Typography>
      </S.Contacts>
      <S.Contacts>
        <LinkedInIcon />
        <Link href="http://linkedin.com/in/dev-guilherme-fernandes/" underline="hover" fontFamily={"Poppins"}>
            www.linkedin.com/in/dev-guilherme-fernandes/
        </Link>
      </S.Contacts>
      <S.Contacts>
        <GitHubIcon />
        <Link href="https://github.com/Odin042" underline="hover" fontFamily={"Poppins"}>
            https://github.com/Odin042
        </Link>
      </S.Contacts>
    </S.Container>
  );
};

export default Contato;
