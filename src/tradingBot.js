import Binance from 'binance-api-node';
const SMA = require("technicalindicators").SMA;

const start_bot = async (data, settings) => {
  const client = Binance({
    // apiKey: localStorage.getItem("APIKEY"),
    // apiSecret: localStorage.getItem("APISECRET"),
    apiKey: "4nb1Evb6bNJctw4K4ZubaPHVJKlTdtZ8Qhx3PNRhZJu5LeNXCMczdmjnNxvbzGIN",
    apiSecret:
      "xImFiiEiWWZK1OoV2yaUqrYmBiu7Z9S4WPDgOGQFWyNjm0O4zwmANeHWA1foN6sh",
  });
  if (!client) {
    alert("There is no APIKEY and APISECRET in localStorage");
    return;
  }

  console.log(await client.openOrders({ symbol: 'ETHBTC'}));
  return;

  const real_data = [];
  for (let item of data) {
    let tmp = {
      time: item[0],
      open: parseFloat(item[1]),
      high: parseFloat(item[2]),
      low: parseFloat(item[3]),
      close: parseFloat(item[4]),
    };
    real_data.push(tmp);
  }
  let tmp = real_data.map((item) => item.open);
  let data2 = SMA.calculate({ period: settings.indicatorLength, values: tmp });
  let sma_data = [];
  for (let i = settings.indicatorLength - 1; i < real_data.length; i++) {
    tmp = {
      time: real_data[i].time,
      value: data2[i - settings.indicatorLength + 1],
    };
    sma_data.push(tmp);
  }

  console.log(
    await client.openOrders({
      symbol: settings.pair,
    }),
  );
  return;

  if (settings.buyconditionGoes === "above") {
    let currentPrice;
    let smaPrice = sma_data[sma_data.length - 1].value;
    if (settings.buyconditionPrice === "open")
      currentPrice = real_data[real_data.length - 1].open;
    if (settings.buyconditionPrice === "high")
      currentPrice = real_data[real_data.length - 1].high;
    if (settings.buyconditionPrice === "low")
      currentPrice = real_data[real_data.length - 1].low;
    if (settings.buyconditionPrice === "close")
      currentPrice = real_data[real_data.length - 1].close;
    console.log("current : " + currentPrice + " sma : " + smaPrice);
    if (currentPrice > smaPrice) {
      let params = {
        symbol: settings.pair,
        side: "BUY",
        quantity: 0.1,
      };
      await client.order(params);
    }
  } else {
    let currentPrice;
    let smaPrice = sma_data[sma_data.length - 1].value;
    if (settings.buyconditionPrice === "open")
      currentPrice = real_data[real_data.length - 1].open;
    if (settings.buyconditionPrice === "high")
      currentPrice = real_data[real_data.length - 1].high;
    if (settings.buyconditionPrice === "low")
      currentPrice = real_data[real_data.length - 1].low;
    if (settings.buyconditionPrice === "close")
      currentPrice = real_data[real_data.length - 1].close;
    console.log("current : " + currentPrice + " sma : " + smaPrice);
    if (currentPrice < smaPrice) {
      let params = {
        symbol: settings.pair,
        side: "SELL",
        quantity: 0.1,
      };
      await client.order(params);
    }
  }
};

export default start_bot;
