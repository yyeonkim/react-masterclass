import { BrowserRouter, Switch, Route } from "react-router-dom";

import Coin from "./Coin";
import Coins from "./Coins";

export default function Router({ isDark, toggleDark }: IRouterProps) {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/:coinId">
          <Coin isDark={isDark} />
        </Route>
        <Route path="/">
          <Coins toggleDark={toggleDark} />
        </Route>
      </Switch>
    </BrowserRouter>
  );
}

interface IRouterProps {
  toggleDark: () => void;
  isDark: boolean;
}
