import { TwitterFollowItem } from './twitter-follow-item';
import './index.css';

export function TwitterFollowCard() {
  const accounts = [
    {
      name: 'David Barcenas',
      username: 'Daveepro',
      isFollowing: true,
    },
    {
      name: 'Visual Studio Code',
      username: 'code',
      isFollowing: false,
    },
    {
      name: 'Cloudinary',
      username: 'cloudinary',
      isFollowing: true,
    },
    {
      name: 'Miguel Ángel Durán',
      username: 'midudev',
      isFollowing: true,
    },
    {
      name: 'Leonardo Montini',
      username: 'Balastrong',
      isFollowing: false,
    },
  ];

  return (
    <main className='tw-follow-card'>
      <section className='tw-follow-light'>
        <div className='tw-follow-card-wrap'>
          <h2 className='tw-follow-title'>A quién seguir</h2>
          {accounts.map(({ name, username, isFollowing }) => (
            <TwitterFollowItem
              key={username}
              userName={username}
              name={name}
              initialIsFollowing={isFollowing}
            />
          ))}
        </div>
      </section>
      <section className='tw-follow-dark'>
        <div className='tw-follow-card-wrap'>
          <h2 className='tw-follow-title'>A quién seguir</h2>
          {accounts.map(({ name, username, isFollowing }) => (
            <TwitterFollowItem
              key={username}
              userName={username}
              name={name}
              initialIsFollowing={isFollowing}
              isDarkMode
            />
          ))}
        </div>
      </section>
    </main>
  );
}
