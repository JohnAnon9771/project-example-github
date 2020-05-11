import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import logo from './assets/logo.svg';

import Card from './components/Card';
import GlobalStyle, { Container } from './styles/global';

import api from './services/api';

export interface Repository {
  id: number;
  name: string;
  description: string;
  owner: {
    login: string;
    avatar_url: string;
  };
}

function App() {
  const [repository, setRepository] = useState('');
  const [repositories, setRepositories] = useState<Repository[]>([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await api.get(`repos/${repository}`);
    setRepositories([...repositories, response.data]);
  }

  useEffect(() => {
    localStorage.setItem('repositories', JSON.stringify(repositories));
  }, [repositories]);

  useEffect(() => {
    const response = JSON.parse(localStorage.getItem('repositories') as string);
    // const response = JSON.parse(localStorage.getItem('repositories') || '{}');
    setRepositories(response);
  }, []);

  return (
    <Container>
      <img src={logo} alt="" />
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name=""
          id=""
          value={repository}
          onChange={(e) => setRepository(e.target.value)}
        />
        <button type="submit">
          <FaPlus size={16} color="#FFF" />
        </button>
      </form>
      <Card repositories={repositories} />
      <GlobalStyle />
    </Container>
  );
}

export default App;
