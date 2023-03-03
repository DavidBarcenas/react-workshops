import { TwitterFollowItem } from './twitter-follow-card/twitter-follow-item';

export function App() {
  return (
    <div style={{ width: '100%', maxWidth: '340px', margin: '3rem auto', background: '#777' }}>
      <TwitterFollowItem
        userName='Daveepro'
        name='David Barcenas con más texto'
        initialIsFollowing
      />
      <TwitterFollowItem userName='AltoNivel' name='Alto Nivel' />
      <TwitterFollowItem userName='ElonMusk' name='Elon Musk' />
    </div>
  );
}
