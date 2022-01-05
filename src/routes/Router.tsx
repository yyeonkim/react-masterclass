import { BrowserRouter, Switch, Route } from "react-router-dom";

import Coin from "./Coin";
import Coins from "./Coins";
export default function Router() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin />
        </Route>
        <Route path="/">
          <Coins />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}
