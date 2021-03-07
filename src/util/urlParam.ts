import { atom, selector } from "recoil";

export const getUrlParam = (name: string, defaultValue: string, setIfUnset = false) => {
    const setValue = new URL(window.location.href).searchParams.get(name);
    if (setIfUnset && !setValue) setUrlParam(name, defaultValue);
    return setValue || defaultValue;
};

export const setUrlParam = (name: string, value: string, title = document.title) => {
    const { protocol, host, pathname } = window.location;
    const searchParams = new URL(window.location.href).searchParams;
    searchParams.set(name, value);
    const url = `${protocol}//${host}${pathname}?${searchParams}`;
    window.history.pushState({ path: url }, title, url);
};

export const clearUrlParam = (name: string) => {
    const { protocol, host, pathname } = window.location;
    const searchParams = new URL(window.location.href).searchParams;
    searchParams.delete(name);
    const paramsString = searchParams.toString();

    const url = `${protocol}//${host}${pathname}${paramsString.length > 0 ? "?" : ""
        }${paramsString}`;
    window.history.pushState({ path: url }, "", url);
};

export const toUrlParam = (values: string[]) =>
    values.map(d => d.toLowerCase().replace(/ /g, "_")).join("-");

// a general purpose url param recoil atom

interface RecoilObject {
    name: string,
    default: any
}

export const urlParamAtom = (recoilObject: RecoilObject) => {
    const name = recoilObject.name;
    const _default = recoilObject.default;
    const state = atom({
        key: `${name}-url-param-atom`,
        default: getUrlParam(name, _default),
    });

    return selector({
        key: `${name}-url-param-selector`,
        get: ({ get }) => get(state),
        set: ({ set }, value: any) => { // @@ STFU
            setUrlParam(name, value);
            set(state, value);
        },
    });
};
