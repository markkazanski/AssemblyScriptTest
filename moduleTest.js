// import * as myModule from 'myModule';
import * as myModule from './build/release.js';

console.log({ myModule });
const result = myModule.add(5, 6);
console.log({ result });
