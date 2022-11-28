import React, { Fragment, useState } from "react";

function DeviderWithTime() {
  return (
    <div style={{display:'flex'}}>
      <div className="font-12-medium">12:00</div>
      <div style={{ width: "10px" }} />
      <div
        style={{
          width: "100%",
          height: "1px",
          marginTop: "10px",
          backgroundColor: "#111",
        }}
      ></div>
    </div>
  );
}

export default DeviderWithTime;
