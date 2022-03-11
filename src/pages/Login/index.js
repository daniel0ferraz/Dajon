import React, { useContext, useState } from 'react';
import * as S from './styles';
import { UsuarioContext } from '../../context/Usuario';
import { useHistory } from 'react-router-dom';
export default function Login() {
  const { nome, setNome } = useContext(UsuarioContext);

  const history = useHistory();

  const [values, setValues] = useState({
    email: '',
    password: '',
  });

  function onChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setValues({ ...values, [name]: value });
  }

  function onSubmit(e) {
    e.preventDefault();
    console.log('dados Post->', values);
  }

  // const handleSubmit = async () => {
  //   try {
  //     const response = await axios.post('http://localhost:5000/users', values);

  //     if (response.data.email) {
  //       console.log('existe', response.data.email);
  //       console.log('buscado com sucesso!');
  //     } else {
  //       console.log('Dados incorretos');
  //       console.log('existe else->', response.data.email);
  //     }
  //   } catch (error) {
  //     console.log(error, '');
  //   }
  // };

  return (
    <S.Container>
      <S.Form>
        <S.FormGroup>
          <input
            type="text"
            vaue={nome}
            placeholder="Nome"
            onChange={(event) => setNome(event.target.value)}
          />
        </S.FormGroup>

        {/* <S.FormGroup>
          <input
            type="password"
            name="password"
            placeholder="Senha"
            onChange={onChange}
          />
        </S.FormGroup> */}

        <S.Button onClick={() => history.push('Home')}>Entrar</S.Button>
      </S.Form>
    </S.Container>
  );
}
