import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import { Footer } from '../../components/Footer';
import * as S from "./styles";
import axios from 'axios';
import ListaCategorias from '../../components/ListaCategorias';

export default function Home() {
  const [contador, setContador] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/produtos')
      .then((response) => {
        setContador(response.data)
      });
  }, []);

  return (
    <>
      <S.Container_Home>
        <div className="header">
          <S.Title_Home>
            <S.Title>Shop</S.Title>
            <S.Description>
              Mostrando resultados: {contador.length}
            </S.Description>
          </S.Title_Home>

          <div>
            <input type="text" placeholder="Buscar Produto" />
          </div>
        </div>
        <S.List_Product>
          <ListaCategorias/>
          <Cards />
        </S.List_Product>
      </S.Container_Home>
      <Footer />
    </>
  )
}