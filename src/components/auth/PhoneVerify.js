import React, { useState } from "react";

// PhoneVerify Page
const PhoneVerify = () => {
  // define states
  const [code, setCode] = useState("");

  // form submit handle function
  const handleSubmit = (e) => {
    e.preventDefault();

    // clear input
    setCode("");
  };

  return (
    <div className="verify">
      <h2 style={{ marginBottom: "30px" }}>Verify your Phone number</h2>
      <form className="verify-form" onSubmit={handleSubmit}>
        <input
          type="text"
          className="code"
          value={code}
          placeholder="Enter Code"
          onChange={(e) => setCode(e.target.value)}
          required
        />
        <button className="code-btn">Authenticate</button>
      </form>
    </div>
  );
};

export default PhoneVerify;
