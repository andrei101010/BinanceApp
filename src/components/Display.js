import React from "react";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { createChart, ColorType } from "lightweight-charts";
// import check from '../tradingBot';

const SMA = require("technicalindicators").SMA;

const Display = ({ data: { data }, settings: { indicatorLength } }) => {
  const tmp_data = [];
  for (let item of data) {
    // const date = new Date(item[0]);
    let tmp = {
      //   time: date.getFullYear() + "-" + date.getMonth() + "-" + date.getDate(),
      time: item[0],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    };
    console.log(tmp);
    tmp_data.push(tmp);
  }
  let tmp = tmp_data.map((item) => item.open);
  let data2 = SMA.calculate({ period: indicatorLength, values: tmp });
  let data1 = [];
  for (let i = indicatorLength - 1; i < tmp_data.length; i++) {
    tmp = { time: tmp_data[i].time, value: data2[i - indicatorLength + 1] };
    data1.push(tmp);
  }
  console.log(tmp_data[0].time);

  const chartContainerRef = useRef();
  useEffect(() => {
    const chart = createChart(chartContainerRef.current, {
      layout: {
        background: { type: ColorType.Solid, color: "white" },
        textColor: "black",
      },
      width: 800,
      height: 400,
    });
    const candlestickSeries = chart.addCandlestickSeries();
    candlestickSeries.setData(tmp_data);
    const areaSeries = chart.addLineSeries();
    areaSeries.setData(data1);
    chart.timeScale().fitContent();
    return () => {
      chart.remove();
    };
  }, [data]);
  return (
    <div className="d-flex justify-content-center" ref={chartContainerRef} />
  );
};

Display.propTypes = {
  data: PropTypes.object.isRequired,
  settings: PropTypes.object.isRequired,
};

const mapStateToProps = (state) => ({
  data: state.data,
  settings: state.settings,
});

export default connect(mapStateToProps, {})(Display);
