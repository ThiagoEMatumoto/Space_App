import React from "react";
import styled from "styled-components";

const LiEstilizado = styled.li`
    font-size: 24px;
    line-height: 29px;
    margin-bottom: 30px;
    cursor: pointer;
    color: ${ props => props.$ativo ? '#7B78E5' : '#D9D9D9'};
    display: flex;
    align-items: center;
    gap: 22px;
    font-family:  ${ props => props.$ativo ? 'GandhiSansBold' : 'GandhiSansRegular '};
`;

const ItemNavagacao = ({
  children,
  iconeAtivo,
  iconeInativo,
  ativo = false,
}) => {
  return (
    <LiEstilizado $ativo={ativo}>
      <img src={ativo ? iconeAtivo : iconeInativo} alt="icone" />
      {children}
    </LiEstilizado>
  );
};

export default ItemNavagacao;
