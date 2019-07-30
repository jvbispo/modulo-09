import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';
import { useDispatch } from 'react-redux';
import { signInRequest } from '../../store/modules/auth/actions';

// import { Container } from './styles';
const schema = Yup.object().shape({
  email: Yup.string()
    .email('dgigite um email válido')
    .required('campo email obrigatório'),
  password: Yup.string()
    .min(6, 'Mínimo de 6 caracteres')
    .required('campo senha obrigatório'),
});

export default function Signin() {
  const dispatch = useDispatch();

  function handleSubmit({ email, password }) {
    dispatch(signInRequest(email, password));
  }

  return (
    <>
      <img
        src="https://app.rocketseat.com.br/api/files/1563202724073.svg"
        alt=""
      />

      <Form schema={schema} onSubmit={handleSubmit}>
        <Input name="email" type="email" placeholder="digite seu email" />
        <Input name="password" type="password" placeholder="digite sua senha" />
        <button type="submit">Acessar</button>

        <Link to="/register">Criar nova conta</Link>
      </Form>
    </>
  );
}
