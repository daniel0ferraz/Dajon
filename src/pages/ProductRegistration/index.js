import React, { useState } from 'react';
import axios from 'axios';
import * as S from "./styles";
import { useHistory } from "react-router-dom";
import { useParams } from "react-router-dom";


export default function ProductRegistration() {

  const { id } = useParams();
  let history = useHistory();

  function dataAtualFormatada() {
    var data = new Date(),
      dia = data.getDate().toString().padStart(2, '0'),
      mes = (data.getMonth() + 1).toString().padStart(2, '0'), //+1 pois no getMonth Janeiro começa com zero.
      ano = data.getFullYear();
    return dia + "/" + mes + "/" + ano;
  }

  const initalValues = {
    id: "",
    nome: "",
    preco: "",
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

  function onSubmit(e) {
    e.preventDefault();
  }

  return (
    <>
      <S.ContainerForm>



        <S.Form onSubmit={onSubmit} enableReinitialize={true}>
    
          <S.TituloHome>
            <h2>Produto</h2>
            <p>Dados</p>
          </S.TituloHome>

          <S.FormGroup>
            <label htmlFor="nome">Nome:</label>
            <input id="nome" name="nome" type="text" onChange={onChange} />
          </S.FormGroup>

          <S.FormGroup>
            <label htmlFor="peco">Preço</label>
            <input id="preco" name="preco" min="0.00" step="0.00" type="number" onChange={onChange} />
          </S.FormGroup>

          <div className="row">
            <S.FormGroup>
              <label htmlFor="categoria">Categoria</label>
              <select name="categoria" id="categoria" onChange={onChange}>
                <option value="">Seleciona</option>
                <option value="Acessorios">Acessorios</option>
                <option value="Calçados">Calçados</option>
                <option value="Eletronicos">Eletronicos</option>
                <option value="Esportivos">Esportivos</option>
                <option value="Roupas">Roupas</option>
              </select>
            </S.FormGroup>

            <S.FormGroup>
              <label htmlFor="quantidade">Quantidade</label>
              <input id="quantidade" name="quantidade" type="text" onChange={onChange} />
            </S.FormGroup>

          </div>

          <S.FormGroup>
            <label htmlFor="imagem">Imagem</label>
            <input id="urlImg" name="urlImg" type="text" onChange={onChange} />
          </S.FormGroup>

          <S.Button onClick={() => handleSubmit()}>
            {/* {id ? 'Editar' : 'Cadastrar'} */}
            Cadastrar
          </S.Button>

        </S.Form>
      </S.ContainerForm>

    </>
  )
}