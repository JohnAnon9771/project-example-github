import React from 'react';
import { Repository } from '../../App';

interface Props {
  repositories: Repository[];
}

export default function Card({ repositories }: Props) {
  return (
    <ul>
      {repositories.map((repo) => (
        <li key={repo.id}>
          <img src={repo.owner.avatar_url} alt="" />
          <h3>{repo.owner.login}</h3>
          <p>{repo.name}</p>
          <p>{repo.description}</p>
        </li>
      ))}
    </ul>
  );
}
