// important comment
import React, { useState } from "react";
import { useRecoilState } from "recoil";
import { countState } from "../state/count";
import { PanelArgs, RecoilColorState } from "../panel";

const Schema = ({ step, factor }: PanelArgs) => {
  const [count, setCount]: RecoilColorState = useRecoilState(
    countState
  ) as RecoilColorState;
  // const [focused, setFocused] = useState(99)
  const increment = (evt: React.ChangeEvent<any>) => {
    setCount(count + step * factor);
  };

  return (
    <>
      step: {step}, factor: {factor}
      <button
        className="incr"
        onClick={increment}
        style={{ borderStyle: "dashed" }}
      >
        + {step * factor}
      </button>
      <button
        className="decr"
        style={{ borderStyle: "dotted" }}
        onClick={() => setCount(count - step * factor)}
      >
        - {step * factor}
      </button>
    </>
  );
};

export default Schema;
