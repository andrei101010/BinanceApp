// import basics
import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import redux actions
import {
  setBuyconditionGoes,
  setBuyconditionPrice,
} from "../../store/actions/settingsAction";

// BuyCondition Setting Component
const BuyCondition = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  return (
    <div className="choose-buy-conditions">
      <h1>Choose buy conditions</h1>
      <label>Price goes</label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setBuyconditionGoes(e.target.value))}
      >
        <option value="above">Above SMA</option>
        <option value="below">Below SMA</option>
      </select>
      <label>Buy @ Price </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setBuyconditionPrice(e.target.value))}
      >
        <option value="open">Open</option>
        <option value="high">High</option>
        <option value="low">Low</option>
        <option value="close">Close</option>
      </select>

      <button
        className="next-btn"
        onClick={() => navigate("/binance/settings/sellcondition")}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default BuyCondition;
