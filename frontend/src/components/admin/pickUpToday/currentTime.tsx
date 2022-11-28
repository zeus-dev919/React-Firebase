import React, { Fragment, useState } from "react";
function CurrentTime(props : any) {
  return (
    <>
      <div style={{ display: "flex" }}>
        <div className="font-20-medium">{props.currentTime}</div>
        <div style={{width:'10px'}}/>
        <div style={{width:'100%', height:'9px', marginTop:'10px', backgroundColor:'#edbf06'}}> </div>
      </div>
    </>
  );
}

export default CurrentTime;
