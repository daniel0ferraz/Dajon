import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import { Footer } from '../../components/Footer';
import * as S from './styles';
import ListaCategorias from '../../components/ListaCategorias';
import search from '../../assets/search.svg';
import api from './../../service/api';

export default function Home() {
  const [contador, setContador] = useState([]);

  useEffect(() => {
    api.get('produtos').then((response) => {
      setContador(response.data);
    });
  }, []);

  return (
    <div>
      <S.Container_Home>
        <S.Header>
          <S.Title_Home>
            <S.Title>Shop</S.Title>
            <S.Description>
              Mostrando resultados: {contador.length}
            </S.Description>
          </S.Title_Home>

          <S.BoxSearch>
            <img src={search} alt="" />
            <input type="text" placeholder="Buscar Produto" />
          </S.BoxSearch>
        </S.Header>

        <ListaCategorias />

        <div className="teste">
          <S.Sidebar>
            <div className="nav"></div>
          </S.Sidebar>

          <S.List_Product>
            <Cards />
          </S.List_Product>
        </div>
      </S.Container_Home>
      <Footer />
    </div>
  );
}
