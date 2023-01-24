// import basics
import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from "prop-types";
import { connect } from "react-redux";

// import redux action
import { loadData } from "../../store/actions/dataAction";

// import custom components
import Spinner from "../Spinner";
import Display from "../Display";

// Trade Setting Component
const Trade = ({
  settings: { pair, timeframe },
  data: { isLoading, data },
}) => {
  const dispatch = useDispatch(); // dispatch for redux
  const navigate = useNavigate(); // navigate for move action

  // define state
  const [stop, setStop] = useState(false);

  return (
    <div className="choose-trade">
      <div className="trading-buttons">
        <h1>Choose Trade</h1>
        <button
          className="next-btn"
          onClick={() => {
            const params = {
              pair: pair,
              timeframe: timeframe,
            };
            setInterval(() => {
              dispatch(loadData(params));
            }, 1000);
            setStop(!stop);
          }}
        >
          {!stop ? "Place a trade" : "Stop"}
        </button>
        <button
          className="next-btn"
          onClick={() => navigate("/binance/settings")}
        >
          Cancel
        </button>
      </div>
      <div className="trading-view">
        {!isLoading && data.length === 0 && (
          <div style={{ height: "400px" }}></div>
        )}
        {isLoading && data.length === 0 && <Spinner />}
        {data.length > 0 && <Display />}
      </div>
    </div>
  );
};

// define proptypes
Trade.propTypes = {
  loadData: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

// matches state props
const mapStateToProps = (state) => ({
  settings: state.settings,
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(Trade);
