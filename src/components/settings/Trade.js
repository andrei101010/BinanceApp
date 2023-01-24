import React, { useState } from "react";
import { useNavigate } from "react-router";
import { useDispatch } from "react-redux";
import PropTypes from 'prop-types';
import { connect } from 'react-redux';

import {
  loadData,
} from "../../store/actions/dataAction";

import Spinner from '../Spinner';
import Display from '../Display';

const Trade = ({
  settings: { pair, timeFrame },
  data: { isLoading, data },
}) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [stop, setStop] = useState(false);
  return (
    <div className="choose-trade">
      <div className="trading-buttons">
        <h1>Choose Trade</h1>
        <button className="next-btn" onClick={() => {
          const params = {
            pair : pair,
            timeFrame : timeFrame
          };
          setInterval(() => {
            dispatch(loadData(params));
          }, 1000);
          setStop(!stop)
        }
        }>
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
        {!isLoading && data.length === 0 && <div style={{height : '400px'}}></div>}
        {isLoading && data.length === 0 && <Spinner/>}
        {data.length > 0 && <Display/>}
      </div>
    </div>
  );
};

Trade.propTypes = {
  loadData: PropTypes.func.isRequired,
  settings: PropTypes.object.isRequired,
  data: PropTypes.object.isRequired,
};

const mapStateToProps = state => ({
  settings: state.settings,
  data: state.data,
});

export default connect(mapStateToProps, { loadData })(
  Trade
);
