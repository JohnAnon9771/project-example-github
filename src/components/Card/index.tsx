import React from 'react';
import { Repository } from '../../App';

import { Content } from './styles';

interface Props {
  repositories: Repository[];
}

const Card: React.FC<Props> = ({ repositories }) => {
  return (
    <ul>
      {repositories.map((repo) => (
        <Content key={repo.id}>
          <img src={repo.owner.avatar_url} alt="" />
          <div>
            <h3>{repo.owner.login}</h3>
            <strong>{repo.name}</strong>
            <p>{repo.description}</p>
          </div>
        </Content>
      ))}
    </ul>
  );
};

export default Card;
