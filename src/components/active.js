import React, { useEffect } from "react";
import Binance from "binance-api-node";

const client = Binance({
  apiKey: localStorage.getItem("APIKEY"),
  apiSecret: localStorage.getItem("APISECRET"),
});

async function func(symbol, orderId) {
  await client.cancelOrder({
    symbol,
    orderId,
  });
}

const Active = () => {
  let order = [];
  useEffect(() => {
    async function myfunc() {
      order = await client.openOrders({ recvWindow: "60000" });
    }
    myfunc();
  }, []);
  return (
    <div style={{ textAlign: "center" }}>
      {order.length === 0 ? (
        <h1>There are no active tradings.</h1>
      ) : (
        order.map((item) => (
          <table>
            <tr>
              <td>{item.orderId}</td>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
              <td>{item.side}</td>
              <td>
                <button onClick={func(item.symbol, item.orderId)}>
                  closeOrder
                </button>
              </td>
            </tr>
          </table>
        ))
      )}
    </div>
  );
};

export default Active;
