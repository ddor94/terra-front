import React from 'react';
import AuthForm from './AuthForm';
import { Link } from 'react-router-dom';
import { registerUser } from '../../apiCalls/auth';
import { useMutation } from '@apollo/client';
import { setToken } from '../../utils/helpers/auth';

function Register() {
  const [handleRegistration, {
    data,
    loading,
    error
  }] = useMutation(registerUser);

  const onSubmit = (data) => {
    handleRegistration({
      variables: {
        userName: data.username,
        email: data.email,
        password: data.password,
      }
    })
    .then((res) => handleSuccess(res.data.registerUser))
    .catch((error) => console.log(error))
  };

  const handleSuccess = (payload) => {
    setToken(payload.user.authenticationToken);
  };

  return(
    <>
      <div>
        <img
          className="mx-auto h-12 w-auto"
          src="https://tailwindui.com/img/logos/workflow-mark-indigo-600.svg"
          alt="Workflow"
        />
        <h2 className="mt-6 text-center text-3xl text-pink-700 font-medium">Para criar sua conta, digite um nome de usuário, seu e-mail e uma senha segura!</h2>
        <p className="mt-2 text-center text-sm text-gray-600">
          ou{' '}
          <Link to="/login" className="font-medium text-pink-700 hover:text-pink-900">
            faça login em sua conta já existente
          </Link>
        </p>
      </div>

      <AuthForm
        isRegister={true}
        onSubmit={onSubmit}
        loading={loading}
      />
    </>
  )
}

export default Register;
