// important comment
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { colorCountState } from "../state/count";
import { PanelArgs, RecoilColorState } from "../panel";

const Manifest = ({ step, factor }: PanelArgs) => {
  const colorCount = useRecoilValue(colorCountState);

  return (
    <>
      {step}, {factor} arithmetic {colorCount}
    </>
  );
};

export default Manifest;
