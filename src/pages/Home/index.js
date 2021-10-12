import React from 'react';
import Cards from '../../components/Cards';
import store from '../../assets/store_black.svg'
import "./styles.css";

export default function Home() {
  return (
    <>
      <div className="container_home">
        <div className="titulo-home">
          <h2><img src={store} alt="" />Shop</h2> 
          <p>Mostrando resultados: {}</p>
        </div>
        
        <section className="list-product">
          <Cards  />
        </section>

      </div>
    </>
  )
}