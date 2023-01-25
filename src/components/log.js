import React, { useEffect } from "react";
import Binance from "binance-api-node";

const client = Binance({
  apiKey: localStorage.getItem("APIKEY"),
  apiSecret: localStorage.getItem("APISECRET"),
});

const Log = () => {
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
        <h1>There are no logs.</h1>
      ) : (
        order.map((item) => (
          <table>
            <tr>
              <td>{item.orderId}</td>
              <td>{item.symbol}</td>
              <td>{item.price}</td>
              <td>{item.side}</td>
            </tr>
          </table>
        ))
      )}
    </div>
  );
};

export default Log;
