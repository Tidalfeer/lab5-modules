//mathModule.js
export function add(a,b) {
    return a + b;
};
export default function multiply(a,b) {
    return a * b;
};
export function subtract(a,b) {
    return a - b;
};
export function divide(a,b){
    return a / b;
};

import { toUpperCase } from "./stringModule";

export function addAndLogUpper(a,b) {
    const results = add(a,b);
    console.log(toUpperCase(results.tosString()));
}