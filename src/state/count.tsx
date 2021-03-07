// comment
import { atom, selector } from "recoil";
import { urlParamAtom } from "../util/urlParam";
import { NumberAtom } from "../panel";

const countState = urlParamAtom({
  name: "count",
  default: 0,
});

const turner: NumberAtom = {
  key: "color",
  default: 0,
};

const colorState = atom(turner);

const colorCountState = selector({
  key: "colorCount",
  get: ({ get }) => {
    const count = get(countState) as number;
    const color = get(colorState) as number;
    return count + color;
  },
});

export { countState, colorState, colorCountState };
