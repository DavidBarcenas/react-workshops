import { Products } from '../components/Products';

import '../styles/containers/home.scss';

export const Home = () => {
  return (
    <>
      <div className="Home-banner">
        <div className="Home-banner-title">
          <p>Create your own</p>
          <p>gaming desktop</p>
        </div>
        <figure className="Home-banner-img">
          <img
            src="https://images.pexels.com/photos/777001/pexels-photo-777001.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260"
            alt="Gaming Desktop"
          />
          <figcaption>
            <p>It is high time that you have a comfortable</p>
            <p>desk to play, work and carry out</p>
            <p>all your day-to-day tasks.</p>
            <button className="btn">
              Shop Now
              <span className="material-icons"> east </span>
            </button>
          </figcaption>
        </figure>
      </div>

      <div className="Home-platforms">
        <div className="container d-flex-between">
          <div className="Home-platforms-item">
            <span className="material-icons"> sports_esports </span>
            <p>PC</p>
          </div>
          <div className="Home-platforms-item">
            <span className="material-icons"> sports_esports </span>
            <p>XBOX</p>
          </div>
          <div className="Home-platforms-item">
            <span className="material-icons"> sports_esports </span>
            <p>PLAY STATION</p>
          </div>
          <div className="Home-platforms-item">
            <span className="material-icons"> sports_esports </span>
            <p>NINTENDO SWITCH</p>
          </div>
        </div>
      </div>

      <div className="Home-games">
        <div className="container">
          <h2 className="Home-games-title">
            Top Games <span>2021</span>
          </h2>
          <p>We have the best games of this year.</p>
          <p>You will only find them here!</p>
        </div>
      </div>

      <div className="Home-products">
        <div className="container">
          <h2>Start playing the best of the best</h2>
          <Products />
        </div>
      </div>
    </>
  );
};
