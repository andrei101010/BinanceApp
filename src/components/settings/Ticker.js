import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setPair } from "../../store/actions/settingsAction";

const Ticker = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [pairs, setPairs] = useState([]);

  useEffect(() => {
    fetch("https://api.binance.com/api/v1/exchangeInfo")
      .then((response) => response.json())
      .then((data) => setPairs(data.symbols));
  }, []);

  return (
    <div className="choose-ticker">
      <h1>Choose a ticker</h1>
      <label>Pair </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setPair(e.target.value))}
      >
        <option value="BTCUSDT" key={999}>
            BTCUSDT
          </option>
        {pairs.map((pair, key) => (
          <option value={pair.symbol} key={key}>
            {pair.symbol}
          </option>
        ))}
      </select>
      <button 
        className="next-btn"
        onClick={() => navigate("/binance/settings/time_frame")}
      >Next &gt;&gt;</button>
    </div>
  );
};

export default Ticker;
