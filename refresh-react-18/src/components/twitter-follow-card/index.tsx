import { useState } from 'react';
import './index.css';

interface Props {
  userName: string;
  name: string;
  initialIsFollowing?: boolean;
}

export function TwitterFollowCard({ userName, name, initialIsFollowing = false }: Props) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowing = () => {
    setIsFollowing((prevValue) => !prevValue);
  };

  return (
    <article className='tw-follow-card'>
      <header className='tw-follow-header'>
        <img className='tw-follow-avatar' src={`https://unavatar.io/${userName}`} alt='Avatar' />
        <div className='tw-follow-info'>
          <strong>{name}</strong>
          <span className='tw-follow-username'>@{userName}</span>
        </div>
      </header>
      <aside>
        <button
          onClick={handleFollowing}
          className={`tw-follow-btn ${isFollowing ? 'is-following' : ''}`}
        >
          {isFollowing ? 'Siguiendo' : 'Seguir'}
        </button>
      </aside>
    </article>
  );
}
