import React from 'react';
import { Link } from 'react-router-dom';
import { Form, Input } from '@rocketseat/unform';
import * as Yup from 'yup';

// import { Container } from './styles';

export default function Signup() {
  const schema = Yup.object().shape({
    name: Yup.string().required('campo nome obrigatório'),
    email: Yup.string()
      .email('dgigite um email válido')
      .required('campo email obrigatório'),
    password: Yup.string()
      .min(6, 'Mínimo de 6 caracteres')
      .required('campo senha obrigatório'),
  });

  function handlesubmit(data) {
    console.tron.log(data);
  }
  return (
    <>
      <img
        src="https://app.rocketseat.com.br/api/files/1563202724073.svg"
        alt=""
      />

      <Form schema={schema} onSubmit={handlesubmit}>
        <Input name="name" type="text" placeholder="digite seu nome Completo" />
        <Input name="email" type="email" placeholder="digite seu email" />
        <Input name="password" type="password" placeholder="digite sua senha" />
        <button type="submit">Criar conta</button>

        <Link to="/">Já tenho uma conta</Link>
      </Form>
    </>
  );
}
