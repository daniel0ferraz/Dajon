import React, { useEffect } from 'react';
import { useHistory, useParams } from 'react-router';
import { useState } from 'react/cjs/react.development';
import Sacola from '../../assets/local_mall_black_24dp.svg';
import { Link } from 'react-router-dom';
import Toast from '../../components/Toast/index';
import { toast } from 'react-toastify';
// import './styles.css';
import * as S from './styles';
import api from '../../service/api';

export default function ProductInfo() {
  const { id } = useParams();
  const history = useHistory();
  const [product, setProduct] = useState([]);
  const [quantidade, setQuantidade] = useState('');

  useEffect(() => {
    api.get(`produtos/${id}`).then((response) => {
      setProduct(response.data);
      //console.log('Quantidade:', response.data.quantidade - 1);
    });
  }, [id]);

  useEffect(() => {
    api.get(`produtos/${id}`).then((response) => {
      setQuantidade(response.data.quantidade);
      //console.log('Quantidade:', response.data.quantidade - 1);
    });
  }, []);

  const handleDelete = async () => {
    try {
      const response = await api.delete(`produtos/${id}`);
      if (response && (response.status === 201 || response.status === 200)) {
        toast(`Produto do Id=(${id}) excluido`);
        history.push('/home');
      } else if (!response) {
        alert.error('Erro ao excluir produto');
      }
    } catch (e) {
      toast.error('erro requisção', e);
    }
  };

  const handleBuy = async () => {
    try {
      const response = await api.put(`produtos/${id}`, {
        id: product.id,
        nome: product.nome,
        preco: product.preco,
        categoria: product.categoria,
        urlImg: product.urlImg,
        dataEntrada: product.dataEntrada,
        quantidade: quantidade,
      });

      if (response.data.quantidade) {
        toast.success('Produto Comprado!', product.nome);
        setQuantidade(quantidade - 1);
      } else if (response.data.quantidade <= 0) {
        toast.error('Produto abaixo do Estoque!');
      }
    } catch (e) {
      toast.error('erro requisção', e);
    }
  };

  return (
    <div>
      <Toast />
      <S.Container_Home>
        <S.Title_Home>
          <S.Title>
            <img src={Sacola} alt="sacola" />
            Informações do produto
          </S.Title>
        </S.Title_Home>

        <S.List_Product>
          <S.Product_Card>
            <S.Product_CardImage src={product.urlImg} alt={product.title} />
            <S.Product_CardInfo>
              <S.Product_CardTitle>{product.nome}</S.Product_CardTitle>

              <S.Product_CardPrice>R$ {product.preco}</S.Product_CardPrice>

              <S.Product_CardFooter>
                <span className={`product-category--${product.categoria}`}>
                  {product.categoria}
                </span>

                <S.Product_CardCount>
                  Quantidade: {quantidade ? quantidade : 'Produto em estoque'}
                </S.Product_CardCount>

                <S.Product_ButtonBuy onClick={handleBuy}>
                  Comprar
                </S.Product_ButtonBuy>

                {/*<Link
                  to={`/editar-produto/${product.id}`}
                  className="promotion-card__edit-button"
                >
                  Editar
                </Link>

                <S.Product_ButtonDelete onClick={handleDelete}>
                  Deletar
                </S.Product_ButtonDelete>
                */}
              </S.Product_CardFooter>
            </S.Product_CardInfo>
          </S.Product_Card>
        </S.List_Product>
      </S.Container_Home>
    </div>
  );
}
