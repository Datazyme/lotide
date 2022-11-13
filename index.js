//index
const head = require('./head');
const tail = require('./tail');
const middle = require('./middle');
const eqObjects = require('./eqObjects');
const assertEqual = require('./assertEqual');
const eqArrays = require('./eqArrays');
const flatten = require('./flatten');
const takeUntil = require('./takeUntil');
const without = require('./without');
const assertArraysEqual = require('./assertArraysEqual');
const countOnly = require('./countOnly');
const countLetters = require('./countLetters');
const findKey = require('./findKey');
const map = require('./map');
const assertObjectsEqual =  require('./assertObjectsEqual');
const letterPositions = require('./letterPositions');
const findKeyByValue = require('./findKeyByValue');




module.exports = {
  head:   head,
  tail:   tail,
  middle: middle,
  eqObjects: eqObjects,
  assertEqual: assertEqual,
  eqArrays: eqArrays,
  flatten: flatten,
  takeUntil: takeUntil,
  without: without,
  assertArraysEqual: assertArraysEqual,
  countOnly: countOnly,
  countLetters: countLetters,
  findKey: findKey,
  map: map,
  assertObjectsEqual: assertObjectsEqual,
  letterPositions: letterPositions,
  findKeyByValue: findKeyByValue
};