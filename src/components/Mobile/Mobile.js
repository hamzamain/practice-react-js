import React, { useState } from "react";

const Mobile = () => {
  const [battery, setBattery] = useState(100);
  const battaryDown = () => setBattery(battery - 10);
  const rechargeBattary = () => setBattery(100);
  return (
    <div>
      <h1>
        Battery: <span>{battery < 0 ? 0 : battery}</span>
      </h1>
      <button onClick={battaryDown}>Battary Down</button>
      <button onClick={rechargeBattary}>Recharge</button>
    </div>
  );
};

export default Mobile;
