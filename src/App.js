import { Fragment } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import { Provider } from "react-redux";

import "./App.css";
import store from "./store";
import Logo from "./components/Logo";
import Login from "./components/auth/Login";
import Register from "./components/auth/Register";
import Navbar from "./components/Navbar";
import Settings from "./components/settings/Settings";
import Ticker from "./components/settings/Ticker";
import TimeFrame from "./components/settings/Timeframe";
import Indicator from "./components/settings/Indicator";
import BuyCondition from "./components/settings/BuyCondition";
import SellCondition from "./components/settings/SellCondition";
import Quantity from "./components/settings/Quantity";
import Trade from "./components/settings/Trade";
import Log from "./components/log";
import Active from "./components/active";

function App() {
  return (
    <Provider store={store}>
      <Router>
        <Fragment>
          <Logo />
          <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/binance" element={<Navbar />}>
              <Route path="settings" element={<Settings />}>
                <Route path="" element={<Navigate to="ticker" />} />
                <Route path="ticker" element={<Ticker />} />
                <Route path="time_frame" element={<TimeFrame />} />
                <Route path="indicator" element={<Indicator />} />
                <Route path="buy_condition" element={<BuyCondition />} />
                <Route path="sell_condition" element={<SellCondition />} />
                <Route path="quantity" element={<Quantity />} />
                <Route path="trade" element={<Trade />} />
              </Route>
              <Route path="log" element={<Log/>} />
              <Route path="active" element={<Active/>} />
            </Route>
          </Routes>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
