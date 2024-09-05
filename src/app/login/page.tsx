'use client'

import { useState } from 'react';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e: any) => {
    e.preventDefault();

    const env = process.env.NEXT_PUBLIC_API_PATH

    try {
      const res = await fetch(`${env}/auth/login`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        throw new Error('Falha no login');
      }

      const data = await res.json();
      const token = data.token; // Supondo que o token vem em 'data.token'

      // Armazenar o token no localStorage ou em cookies, conforme a sua estratégia
      localStorage.setItem('token', token);

      // Redirecionar ou realizar outra ação
      console.log('Login bem-sucedido! Token:', token);

    } catch (err) {
      setError('Erro ao fazer login');
      console.error(err);
    }
  };

  return (
    <div>
      <h1>Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          placeholder="Senha"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit">Entrar</button>
      </form>
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
}
