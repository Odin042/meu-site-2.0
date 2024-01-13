import React from 'react';
import * as S from './styles.ts';
import AvatarPerson from '../../components/Avatar/Avatar.tsx';
import SideBar from '../../components/SideBar/SideBar.tsx';

export const HomePage = () => {
  return (
    <S.Container>
      <S.AvatarPersonWrapper>
        <AvatarPerson />
      </S.AvatarPersonWrapper>
      <S.SideBarWrapper>
        <SideBar />
      </S.SideBarWrapper>
    </S.Container>
  );
};

export default HomePage;
