import React from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";

import { setTimeFrame } from "../../store/actions/settingsAction";

const timeFrameList = ["1m", "5m", "10m", "15m", "30m", "1h"];

const TimeFrame = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  return (
    <div className="choose-timeframe">
      <h1>Choose a timeframe</h1>
      <label>Timeframe </label>
      <select
        className="select-box"
        onChange={(e) => dispatch(setTimeFrame(e.target.value))}
      >
        {timeFrameList.map((timeframe) => (
          <option value={timeframe} key={timeframe}>
            {timeframe}
          </option>
        ))}
      </select>
      <button
        className="next-btn"
        onClick={() => navigate("/binance/settings/indicator")}
      >
        Next &gt;&gt;
      </button>
    </div>
  );
};

export default TimeFrame;
