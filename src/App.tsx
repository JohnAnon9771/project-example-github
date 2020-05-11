import React, { useState, useEffect } from 'react';
import { FaPlus } from 'react-icons/fa';
import logo from './assets/logo.svg';

import Card from './components/Card';
import { Container } from './styles/global';

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
  const [repositories, setRespositories] = useState<Repository[]>([]);

  async function handleSubmit(e: any) {
    e.preventDefault();
    const response = await api.get(`repos/${repository}`);
    setRespositories([...repositories, response.data]);
  }

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
    </Container>
  );
}

export default App;
