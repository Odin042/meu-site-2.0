import React from 'react';
import PropTypes from 'prop-types';
import { Typography } from '@mui/material';
import * as S from './styles.ts';

const Blog = () => {
  return (
    <S.Container>
      <Typography variant="h4" component="h2" fontFamily={"Poppins"}>
          Blog
      </Typography>
      <Typography variant="subtitle1" component="h2" fontFamily={"Poppins"}>
          Ainda nao tem nada aqui, mas trago novidades em breve! 
      </Typography>
    </S.Container>
  )
};

export default Blog;
