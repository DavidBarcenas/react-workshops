import { useState } from 'react';
import './twitter-follow-item.css';

interface Props {
  userName: string;
  name: string;
  initialIsFollowing?: boolean;
  isDarkMode?: boolean;
}

export function TwitterFollowItem({
  userName,
  name,
  initialIsFollowing = false,
  isDarkMode = false,
}: Props) {
  const [isFollowing, setIsFollowing] = useState(initialIsFollowing);

  const handleFollowing = () => {
    setIsFollowing((prevValue) => !prevValue);
  };

  return (
    <div className={`${isDarkMode ? 'tw-follow-item-dark' : 'tw-follow-item'}`}>
      <header className='tw-follow-header'>
        <div className='tw-follow-wrap'>
          <img className='tw-follow-avatar' src={`https://unavatar.io/${userName}`} alt={name} />
          <div className='tw-follow-info'>
            <strong title={name}>{name}</strong>
            <span className='tw-follow-username'>@{userName}</span>
          </div>
        </div>
      </header>
      <aside className='tw-follow-aside'>
        <div className='tw-follow-btn-wrap'>
          <button
            onClick={handleFollowing}
            className={`tw-follow-btn ${isFollowing ? 'is-following' : ''}`}
          >
            <span className='tw-follow-text'>{isFollowing ? 'Siguiendo' : 'Seguir'}</span>
            <span className='tw-stop-following'>Dejar de seguir</span>
          </button>
        </div>
      </aside>
    </div>
  );
}
