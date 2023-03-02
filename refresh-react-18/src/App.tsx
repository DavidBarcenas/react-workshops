import { TwitterFollowCard } from './components/twitter-follow-card';

export function App() {
  return (
    <div style={{ width: '60%', margin: '3rem auto' }}>
      <TwitterFollowCard userName='Daveepro' name='David Barcenas' initialIsFollowing />
      <TwitterFollowCard userName='AltoNivel' name='Alto Nivel' />
      <TwitterFollowCard userName='ElonMusk' name='Elon Musk' />
    </div>
  );
}
