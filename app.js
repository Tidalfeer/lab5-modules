// app.js
import {add, subtract, divide} from './mathModule';
import {toUpperCase, toLowerCase} from './stringModule';

// Call the functions and lod results 
console.log('Add: ', add(12,13));
console.log('Lowercase: ', toLowerCase('hello world'));

import multiply, { multiply } from './mathModule';
import { toLowerCase, toUpperCase } from './stringModule';
import { findMax, reverseArray} from './arrayModule';

console.log('Max: ', findMax ([1,2,3,4,5]));
console.log('Reversed: ', reverseArray([1,2,3]));
console.log('multiply: ', multiply(5,3));

import { addAndLogUpper } from './mathModule';
addAndLogUpper(10,20);


const number = [40,17,26,32,60];
const maxNumber = findMax(number);
const multipliedResult = multiply(maxNumber, 5);
const uppercaseResult = toUpperCase(multipliedResult.toString());

console.log(uppercaseResult);
