# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by me as part of my learnings at Lighthouse Labs. 

## Usage

**Install it:**

`npm install @anakuz/lotide`

**Require it:**

`const _ = require('@anakuz/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `assertArraysEqual`: function to determine if two arrays are equal
* `assertEqual`: function to determine if two inputs are equal
* `assertObjectsEqual`: function to determine if two objects are equal
* `countLetters`: function that takes in a string of letters and returns an object of letter keys and the number of times they occur as values
* `countOnly`: function that takes in an array of strings and returns how many times an item occurs in that array
* `eqArrays`: function that compares two arrays
* `eqObjects`: function that compares two objects
* `findKey`: function that scans an object and returns the first key for which the callback returns a truthy value
* `findKeyByValue`: function that scans an object and returns the key of the input value
* `flatten`: function that takes a nested array and returns a single array (un-nests inner arrays)
* `head`: function takes in array and returns only the first value of an array
* `index`: list of all the functions in lotide
* `letterPositions`: function to turn a string into an object that shows each letter and the index at which it occurs
* `map`: takes in array and callback function to return new, transformed array
* `middle`: function that returns the middle element of an array
* `tail`: function returns a new array with everything but the first value of input array
* `takeUntil`: unction that takes the first portion of an input array to a point specified by an input callback
* `without`: function takes in an array and an item to be removed from that array

