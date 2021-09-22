import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import { Home } from "../containers/Home";
import { Checkout } from "../containers/Checkout";
import { Detail } from "../containers/Detail";
import { Payment } from "../containers/Payment";
import { Success } from "../containers/Success";
import { NotFound } from "../containers/NotFound";
import { Layout } from "../components/Layout";

const App = () => {
  return (
    <Router>
      <Layout>
        <Switch>
          <Route exact path='/' component={Home} />
          <Route exact path='/checkout' component={Checkout} />
          <Route exact path='/checkout/detail' component={Detail} />
          <Route exact path='/checkout/payment' component={Payment} />
          <Route exact path='/success' component={Success} />
          <Route component={NotFound} />
        </Switch>
      </Layout>
    </Router>
  )
}

export default App