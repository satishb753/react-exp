import React, { useState, useEffect } from "react";

export default function ShowXY (){
  const [strXY, changeXY] = useState("0,0");

  const displayXY = (e) => {
    let str = e.pageX + ',' + e.pageY;
    changeXY(str);
    console.log(str);
  }

  useEffect( () => {
    window.addEventListener("mousemove", displayXY);
    console.log("useEffect called");
    return () => {
      window.removeEventListener("mousemove", displayXY);
      console.log("return statement called inside useEffect");
    }
  })

  return (
    <div>
      {strXY}
    </div>
  )
}