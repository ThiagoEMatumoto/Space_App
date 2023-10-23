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
          <ItemNavagacao iconeAtivo="./src/assets/icones/home-ativo.png" iconeInativo="./src/assets/icones/home-inativo.png" ativo= { true}>
            Inicio
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./src/assets/icones/mais-vistas-ativo.png" iconeInativo="./src/assets/icones/mais-vistas-inativo.png">
            Mais vistas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./src/assets/icones/mais-curtidas-ativo.png" iconeInativo="./src/assets/icones/mais-curtidas-inativo.png">
            Mais curtidas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./src/assets/icones/novas-ativo.png" iconeInativo="./src/assets/icones/novas-inativo.png">
            Novas
          </ItemNavagacao>
          <ItemNavagacao iconeAtivo="./src/assets/icones/surpreenda-me-ativo.png" iconeInativo="./src/assets/icones/surpreenda-me-inativo.png">
            Supreenda-me
          </ItemNavagacao>
        </ListaEstilizada>
      </nav>
    </aside>
  );
};

export default BarraLateral;
