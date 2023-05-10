import lib from "ts-add-js-extension";

const object: object = lib;
console.log("typeof object is", typeof object);

const function_: Function = lib.default;
console.log("typeof function_ is", typeof function_);
