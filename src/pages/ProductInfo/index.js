import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import axios from 'axios';

export default function ProductInfo() {

  const history = useHistory();
  const { id } = useParams()
  const [product, setProduct] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/produtos?_embed=categorias&_order=desc&_sort=id')
      .then((response) => {
        console.log(response.data);
        setProduct(response.data)
      });
  }, [id]);

  return (
    <>

      <h1>Informações produto</h1>

      <article>
        <h2>{product.nome}</h2>
      </article>

    </>
  )
}