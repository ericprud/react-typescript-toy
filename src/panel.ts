export interface PanelArgs {
    step: number;
    factor: number;
}

export interface NumberAtom {
    key: string;
    default: number;
}

export type RecoilColorState = [
    number,
    (n: number) => unknown
]

