import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import {
  setIndicatorLength,
  setIndicatorParams,
} from "../../store/actions/settingsAction";

const Indicator = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const indicatorLengthRef = useRef(null);

  return (
    <div className="choose-indicator">
      <h1>Choose an Indicator & Length</h1>
      <label>Indicator </label>
      <select className="select-box">
        <option>SMA</option>
      </select>
      <input
        type="text"
        className="select-box"
        placeholder="Enter indicator Length"
        ref={indicatorLengthRef}
        onChange={(e) => {
          dispatch(setIndicatorLength(e.target.value));
        }}
      />
      <label>Parameters </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setIndicatorParams(e.target.value))}
      >
        <option value="open">Open</option>
        <option value="low">Low</option>
        <option value="high">High</option>
        <option value="close">Close</option>
      </select>
      <button
        className="next-btn"
        onClick={() => {
          if (indicatorLengthRef.current.value === "")
            indicatorLengthRef.current.classList.add("invalid");
          else {
            indicatorLengthRef.current.classList.remove("invalid");
            navigate("/binance/settings/buy_condition");
          }
        }}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default Indicator;
