import React, { useEffect, useState } from 'react';
import Cards from '../../components/Cards';
import store from '../../assets/store_black.svg'
import { Footer } from '../../components/Footer';
import * as S from "./styles";
import axios from 'axios';

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
        <S.Title_Home>
          <S.Title><img src={store} alt="" />Shop</S.Title>
          <S.Description>
            Mostrando resultados: {contador.length}
          </S.Description>
        </S.Title_Home>
        <S.List_Product>
          <Cards />
        </S.List_Product>
      </S.Container_Home>
        <Footer />
    </>
  )
}