import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  setBuyConditionGoes,
  setBuyConditionPrice,
} from "../../store/actions/settingsAction";

const BuyCondition = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  return (
    <div className="choose-buy-conditions">
      <h1>Choose buy conditions</h1>
      <label>Price goes</label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setBuyConditionGoes(e.target.value))}
      >
        <option value="above">Above SMA</option>
        <option value="below">Below SMA</option>
      </select>
      <label>Buy @ Price </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setBuyConditionPrice(e.target.value))}
      >
        <option value="open">Open</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="close">Close</option>
      </select>

      <button
        className="next-btn"
        onClick={() => navigate("/binance/settings/sell_condition")}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default BuyCondition;
