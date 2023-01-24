// import basics
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import redux actions
import {
  setQuantityType,
  setQuantityPercentage,
} from "../../store/actions/settingsAction";

// Quatity Setting Component
const Quantity = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define controllable ref
  const percentageRef = useRef(null);

  return (
    <div className="choose-quantity">
      <h1>Choose quantity</h1>
      <select
        className="select-box"
        onChange={(e) => dispatch(setQuantityType(e.target.value))}
      >
        <option value="amount">Amount</option>
        <option value="volume">Volume</option>
      </select>
      <input
        type="text"
        className="select-box"
        placeholder="Percentage %"
        ref={percentageRef}
        onChange={(e) => dispatch(setQuantityPercentage(e.target.value))}
      />
      <button
        className="next-btn"
        onClick={() => {
          // validation
          if (percentageRef.current.value === "")
            percentageRef.current.classList.add("invalid");
          else {
            percentageRef.current.classList.remove("invalid");
            navigate("/binance/settings/trade"); // move to next setting
          }
        }}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default Quantity;
