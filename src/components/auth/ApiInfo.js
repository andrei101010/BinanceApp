import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router";
import { setApiAction } from "../../store/actions/authAction";

const ApiInfo = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const [apikey, setApikey] = useState("");
  const [secret, setSecret] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    setApikey("");
    setSecret("");
  };

  return (
    <div className="apiinfo-container">
      <h1>Binance API Info</h1>
      <form className="apiinfo-form" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Enter API Key"
          className="select-box"
          value={apikey}
          required
          onChange={(e) => setApikey(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter API Secret"
          className="select-box"
          value={secret}
          required
          onChange={(e) => setSecret(e.target.value)}
        />
        <button
          className="next-btn"
          onClick={() => {
            dispatch(setApiAction({ apikey, secret }, navigate));
          }}
        >
          Next &gt;&gt;
        </button>
      </form>
    </div>
  );
};

export default ApiInfo;
