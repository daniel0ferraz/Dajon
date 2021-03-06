import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from './styles';
import { useHistory } from 'react-router-dom';
import { useParams } from 'react-router-dom';
import Toast from '../../components/Toast/index';
import { toast } from 'react-toastify';
import { dataAtualFormatada } from '../../utils/index';

export default function ProductRegistration() {
  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/produtos/${id}`).then((response) => {
        setValues(response.data);
        console.log('dados id', response.data);
        // history.push("/home")
      });
    }
  }, [id]);

  const initalValues = {
    nome: '',
    preco: Number,
    categoria: '',
    urlImg: '',
    dataEntrada: dataAtualFormatada(),
    quantidade: '',
  };

  const [values, setValues] = useState(initalValues);

  function onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        'http://localhost:5000/produtos',
        values
      );
      if (response && (response.status === 201 || response.status === 200)) {
        toast.success('Cadastrado com sucesso!');
        // history.push("/home");
      } else if (!response) {
        toast.info('Erro ao cadastrar o produto!');
      }
    } catch (error) {
      toast.error('Erro requisição!');
    }
  };

  const handleEdit = async () => {
    try {
      const response = await axios.put(
        `http://localhost:5000/produtos/${id}`,
        values
      );
      if (response && (response.status === 201 || response.status === 200)) {
        toast.success(id, 'Atualizado com sucesso!');
        history.push(`/produto/${id}`);
      } else if (!response) {
        toast.error('Erro ao Atualizar produto');
      }
    } catch (err) {
      toast.error('erro requisção');
    }
  };

  function onSubmit(e) {
    e.preventDefault();
    // se existir id - (Put) - senão->(Post)
    if (id) {
      handleEdit();
    } else {
      handleSubmit();
    }
  }

  return (
    <div>
      <S.ContainerForm>
        <Toast />

        {/* {id && <div>id: {id}</div>} */}

        <S.Form onSubmit={onSubmit} enableReinitialize={true}>
          <S.TituloHome>
            <h2>Produto</h2>
            <p>Dados</p>
          </S.TituloHome>

          <S.FormGroup>
            <label htmlFor="nome">Nome</label>
            <input
              id="nome"
              name="nome"
              type="text"
              onChange={onChange}
              value={values.nome}
            />
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="peco">Preço</label>
            <input
              id="preco"
              name="preco"
              type="number"
              onChange={onChange}
              value={values.preco}
            />
          </S.FormGroup>

          <S.row>
            <S.FormGroup>
              <label htmlFor="categoria">Categoria</label>
              <select
                name="categoria"
                id="categoria"
                onChange={onChange}
                value={values.categoria}
              >
                <option>Selecione</option>
                <option value="Acessorios">Acessorios</option>
                <option value="Calçados">Calçados</option>
                <option value="Eletronicos">Eletronicos</option>
                <option value="Esportivos">Esportivos</option>
                <option value="Roupas">Roupas</option>
              </select>
            </S.FormGroup>

            <S.FormGroup>
              <label htmlFor="quantidade">Quantidade</label>
              <input
                id="quantidade"
                name="quantidade"
                type="text"
                onChange={onChange}
                value={values.quantidade}
              />
            </S.FormGroup>
          </S.row>

          <S.FormGroup>
            <label htmlFor="imagem">Imagem</label>
            <input
              id="urlImg"
              name="urlImg"
              type="text"
              onChange={onChange}
              value={values.urlImg}
            />
          </S.FormGroup>

          <S.Button type="submit">{id ? 'Atualizar' : 'Cadastrar'}</S.Button>
        </S.Form>
      </S.ContainerForm>
    </div>
  );
}
