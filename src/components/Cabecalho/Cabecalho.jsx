import React from 'react'
import styled from 'styled-components'
import CampoTexto from '../CampoTexto/CampoTexto'

const HeaderStyle = styled.header`
  padding-top: 60px;
  padding-bottom: 60px;
  display: flex;
  justify-content: space-between;
  img {
    max-width: 212px;
  }
`

const Cabecalho = () => {
  return (
    <HeaderStyle>
      <img src="imagens/logo.png" alt="Logo Space App" />
      <CampoTexto placeholder='O que você procura?'/>
    </HeaderStyle>
  )
}

export default Cabecalho