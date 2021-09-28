import { Products } from "../components/Products"
import initialState from "../initialState"

import '../styles/containers/home.scss'

export const Home = () => {
  return (
    <>
      <div className="Home-banner">
        <div className="Home-banner-title">
          <p>Create your own</p>
          <p>gaming desktop</p>
        </div>
        <figure className="Home-banner-img">
          <img src="https://images.pexels.com/photos/7238759/pexels-photo-7238759.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Gaming Desktop" />
          <figcaption>
            <p>It is high time that you have a comfortable</p>
            <p>desk to play, work and carry out</p>
            <p>all your day-to-day tasks.</p>
            <button className="btn">Shop Now 
              <span className="material-icons"> east </span>
            </button>
          </figcaption>
        </figure>
      </div>
      <Products products={initialState.products} />
    </>
  )
}
