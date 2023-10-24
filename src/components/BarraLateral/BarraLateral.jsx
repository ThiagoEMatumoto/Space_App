import React from "react";
import styled from "styled-components";
import ItemNavagacao from "./ItemNavegacao/ItemNavagacao";

const ListaEstilizada = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  width: 212px;
`;

const BarraLateral = () => {
  return (
    <aside>
      <nav>
        <ListaEstilizada>
          <ItemNavagacao iconeAtivo="./public/icones/home-ativo.png" iconeInativo="./public/icones/home-inativo.png" ativo= { true}>
            Inicio
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./public/icones/mais-vistas-ativo.png" iconeInativo="./public/icones/mais-vistas-inativo.png">
            Mais vistas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./public/icones/mais-curtidas-ativo.png" iconeInativo="./public/icones/mais-curtidas-inativo.png">
            Mais curtidas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./public/icones/novas-ativo.png" iconeInativo="./public/icones/novas-inativo.png">
            Novas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./public/icones/surpreenda-me-ativo.png" iconeInativo="./public/icones/surpreenda-me-inativo.png">
            Supreenda-me
          </ItemNavagacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
