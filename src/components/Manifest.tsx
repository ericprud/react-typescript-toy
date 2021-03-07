// important comment
import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { colorCountState } from "../state/count";
import { PanelArgs, RecoilColorState } from "../panel";

const Manifest = () => {
  const colorCount = useRecoilValue(colorCountState);

  return <>{colorCount}</>;
};

export default Manifest;
