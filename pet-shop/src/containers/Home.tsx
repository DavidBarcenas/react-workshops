import { Products } from "../components/Products"
import initialState from "../initialState"

export const Home = () => {
  return (
    <Products products={initialState.products} />
  )
}
