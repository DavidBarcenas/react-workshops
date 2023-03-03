import { useState } from 'react';
import './twitter-follow-item.css';

interface Props {
  userName: string;
  name: string;
  initialIsFollowing?: boolean;
}

export function TwitterFollowItem({ userName, name, initialIsFollowing = false }: Props) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowing = () => {
    setIsFollowing((prevValue) => !prevValue);
  };

  return (
    <div className='wrapper'>
      <div className='fluid'>
        <div className='fluid-content'>
          <div className='env'>
            <figure className='tw-follow-avatar'>
              <img className='tw-follow-img' src='https://unavatar.io/daveepro' alt={name} />
            </figure>
            <header className='tw-follow-header'>
              <strong>David Barcenas con mucho texto</strong>
              <span className='tw-follow-username'>@daveepro</span>
            </header>
          </div>
        </div>
      </div>
      <div className='static'>
        <div className='static-content'>
          <aside className='tw-follow-aside'>
            <button
              onClick={handleFollowing}
              className={`tw-follow-btn ${isFollowing ? 'is-following' : ''}`}
            >
              <span className='tw-follow-text'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
              <span className='tw-stop-following'>Dejar de seguir</span>
            </button>
          </aside>
        </div>
      </div>
    </div>
  );
}
