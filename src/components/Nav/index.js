import React from 'react';
import * as S from "./styles";
import { Link } from 'react-router-dom';

export default function Nav() {
    return (
        <div>
            <S.Wrapper>
                <S.Navbar>
                    <Link to="cadastro-produto">Produto</Link>
                    <Link to="cadastro-produto">Editar Produto </Link>
                    <Link to="cadastro-produto">Cadastrar Produto</Link>
                    <Link to="bot">Bot</Link>
                </S.Navbar>
            </S.Wrapper>

            <S.Main>
                <h3>Olá, teste</h3>
            </S.Main>
        </div>
    )
}