import Binance from 'node-binance-api';
// import Binance from 'binance-api-node'
const binance = () => {
    if (localStorage.getItem("APIKEY") && localStorage.getItem("APISECRET")) {
        return new Binance().options(
            {
                // APIKEY: localStorage.getItem("APIKEY"),
                // APISECRET: localStorage.getItem("APISECRET")
                APIKEY: '4nb1Evb6bNJctw4K4ZubaPHVJKlTdtZ8Qhx3PNRhZJu5LeNXCMczdmjnNxvbzGIN',
                APISECRET: 'xImFiiEiWWZK1OoV2yaUqrYmBiu7Z9S4WPDgOGQFWyNjm0O4zwmANeHWA1foN6sh'
            }
        );
    }
    return null;
}

const check = async (data) => {
    if (data.currentPrice > data.sma)  {
        if (localStorage.getItem("APIKEY") && localStorage.getItem("APISECRET")) {
            let order = await binance().futureOpenOrders(data.pair);
            if (order) return false;
            order = await binance().futuresMarketBuy(data.pair, data.quantity, {
                type: "STOP_MARKET",
                stopPrice: data.sellPrice,
                priceProtect: true
            });
            if (order) return true;
            return false;
        }
        return false;
    }
    return false;
}

export default check;