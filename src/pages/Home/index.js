import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import { Footer } from '../../components/Footer';
import * as S from "./styles";
import axios from 'axios';
import ListaCategorias from '../../components/ListaCategorias';
import { Link } from 'react-router-dom';
import search from '../../assets/search.svg';

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
        <S.Header>
          <S.Title_Home>
            <S.Title>Shop</S.Title>
            <S.Description>
              Mostrando resultados: {contador.length}
            </S.Description>
          </S.Title_Home>

            <Link to="cadastro-produto">Cadastrar Produto</Link>

          <S.BoxSearch>
             <img src={search} alt=""/>
            <input type="text" placeholder="Buscar Produto" />
          </S.BoxSearch>
        </S.Header>

        <ListaCategorias />

        <S.List_Product>
          <Cards url={"/produto"} />
        </S.List_Product >

      </S.Container_Home>
      <Footer />
    </>
  )
}