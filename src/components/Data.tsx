// important comment
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { colorState } from "../state/count";
import { PanelArgs, RecoilColorState } from "../panel";

const Data = ({ step, factor }: PanelArgs) => {
  const [color, setColor] = useRecoilState(colorState) as RecoilColorState;
  // const [focused, setFocused] = useState(99)
  const increment = (evt: React.ChangeEvent<any /* HTMLButtonElement */>) => {
    setColor(color + step * factor);
  };

  return (
    <>
      {step}, {factor} arithmetic {color}
      <button onClick={increment}>incr</button>
      <button onClick={() => setColor(color - step * factor)}>decr</button>
    </>
  );
};

export default Data;
