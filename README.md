# Lotide

A mini clone of the [Lodash](https://lodash.com) library.

## Purpose

**_BEWARE:_ This library was published for learning purposes. It is _not_ intended for use in production-grade software.**

This project was created and published by [me](https://www.linkedin.com/in/nnasr/) as part of my learnings at [Lighthouse Labs](https://www.lighthouselabs.ca/). 

## Usage

**Install it:**

`npm install @nnasr/lotide`

**Require it:**

`const _ = require('@nnasr/lotide');`

**Call it:**

`const results = _.tail([1, 2, 3]) // => [2, 3]`

## Documentation

The following functions are currently implemented:

* `map`: return first letter in an array or words
* `head`: get the first element in an array
* `tail`: get the last element in an array
* `middle`: find the middle elements of an array
* `without`: remove elements from an array
* `findKey`: find keys in an object
* `takeUntil`: take all the elements until a certain element
* `countOnly`: count the amount of names in list
* `assertEqual`: asserts if two values are equals
* `countLetter`: count letters in a string
* `findKeyByValue`: find the value of a key in an object
* `letterPosition`: find the position of the letters
* `assertArraysEqual`: asserts if two arrays are equals
* `assertObjectsEqual`: asserts if two objects are equals 