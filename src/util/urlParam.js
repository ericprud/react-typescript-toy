import { atom, selector } from "recoil";

export const getUrlParam = (name, defaultValue, setIfUnset = false) => {
    const setValue = new URL(window.location).searchParams.get(name);
    if (setIfUnset && !setValue) setUrlParam(name, defaultValue);
    return setValue || defaultValue;
};

export const setUrlParam = (name, value, title = document.title) => {
    const { protocol, host, pathname } = window.location;
    const searchParams = new URL(window.location).searchParams;
    searchParams.set(name, value);
    const url = `${protocol}//${host}${pathname}?${searchParams}`;
    window.history.pushState({ path: url }, title, url);
};

export const clearUrlParam = name => {
    const { protocol, host, pathname } = window.location;
    const searchParams = new URL(window.location).searchParams;
    searchParams.delete(name);
    const paramsString = searchParams.toString();

    const url = `${protocol}//${host}${pathname}${paramsString.length > 0 ? "?" : ""
        }${paramsString}`;
    window.history.pushState({ path: url }, "", url);
};

export const toUrlParam = values =>
    values.map(d => d.toLowerCase().replace(/ /g, "_")).join("-");

// a general purpose url param recoil atom

export const urlParamAtom = ({ name, default: _default }) => {
    const state = atom({
        key: `${name}-url-param-atom`,
        default: getUrlParam(name) || _default,
    });

    return selector({
        key: `${name}-url-param-selector`,
        get: ({ get }) => get(state),
        set: ({ set }, value) => {
            setUrlParam(name, value);
            set(state, value);
        },
    });
};
