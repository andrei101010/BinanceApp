// import basics
import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

// import redux actions
import { setSellPrice } from "../../store/actions/settingsAction";

// SellCondition Setting Component
const SellCondition = () => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define controllable ref
  const sellPriceRef = useRef(null);

  return (
    <div className="choose-sell-conditions">
      <h1>Choose sell conditions</h1>
      <label>Sell if, Price goes</label>
      <input
        type="text"
        className="select-box"
        placeholder="Below Last Candle Low"
        ref={sellPriceRef}
        onChange={(e) => dispatch(setSellPrice(e.target.value))}
      />
      <button
        className="next-btn"
        onClick={() => {
          // validation
          if (sellPriceRef.current.value === "")
            sellPriceRef.current.classList.add("invalid");
          else {
            sellPriceRef.current.classList.remove("invalid");
            navigate("/binance/settings/quantity");
          }
        }}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default SellCondition;
