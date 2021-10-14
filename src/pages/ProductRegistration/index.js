import React, { useEffect, useState } from 'react';
import axios from 'axios';
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function ProductRegistration() {

  const { id } = useParams();
  const history = useHistory();

  useEffect(() => {
    if (id) {
      axios.get(`http://localhost:5000/produtos/${id}`)
        .then((response) => {
          console.log("dados id", response.data);
          setValues(response.data)
          // history.push("/home")
        })
    }
  }, [id])

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const initalValues = {
    nome: "",
    preco: Number,
    categoria: "",
    urlImg: "",
    dataEntrada: dataAtualFormatada(),
    quantidade: ""
  }

  const [values, setValues] = useState(initalValues);

  function onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value })
  }

  const handleSubmit = async () => {
    try {
      const response = await axios.post("http://localhost:5000/produtos", values)
      if (response && (response.status === 201 || response.status === 200)) {
        alert("Cadastrado com sucesso!")
        history.push("/home");
      } else if (!response) {
        alert("Erro ao cadastrar o produto!")
      }
    } catch (error) {
      alert("Erro requisição!")
    }
  }

  const handleEdit = async () => {
    try {
      const response = await axios.put(`http://localhost:5000/produtos/${id}`, values)
      if (response && (response.status === 201 || response.status === 200)) {
        alert(id, "Atualizado com sucesso!")
        history.push('/')
      } else if (!response) {
        alert("Erro ao Atualizar produto")
      }
    } catch (error) {
      alert("erro requisção", error)
    }
  }

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
    <>
      <S.ContainerForm>

        {id && <div>id: {id}</div>}

        <S.Form onSubmit={onSubmit} enableReinitialize={true}>

          <S.TituloHome>
            <h2>Produto</h2>
            <p>Dados</p>
          </S.TituloHome>

          <S.FormGroup>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" type="text" onChange={onChange} value={values.nome} />
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="peco">Preço</label>
            <input id="preco" name="preco" step="0.00" type="number" onChange={onChange} value={values.preco} />
          </S.FormGroup>

          <S.row>
            <S.FormGroup>
              <label htmlFor="categoria">Categoria</label>
              <select name="categoria" id="categoria" onChange={onChange} value={values.categoria}>
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
              <input id="quantidade" name="quantidade" type="text" onChange={onChange} value={values.quantidade} />
            </S.FormGroup>

          </S.row>

          <S.FormGroup>
            <label htmlFor="imagem">Imagem</label>
            <input id="urlImg" name="urlImg" type="text" onChange={onChange} value={values.urlImg} />
          </S.FormGroup>

          <S.Button type="submit">
            {id ? 'Atualizar' : 'Cadastrar'}
          </S.Button>

        </S.Form>
      </S.ContainerForm>

    </>
  )
}