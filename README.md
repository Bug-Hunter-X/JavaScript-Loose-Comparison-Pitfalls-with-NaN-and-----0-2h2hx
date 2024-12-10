# JavaScript Loose Comparison Pitfalls

This repository demonstrates unexpected behavior in JavaScript's loose comparison operator (`==`) when dealing with `NaN` (Not a Number) and positive/negative zero (`+0` and `-0`).

## The Bug

JavaScript's loose comparison (`==`) does not follow the standard rules of equality for `NaN` and signed zeros.  Specifically:

* `NaN == NaN` evaluates to `false`.  This is counterintuitive as no value is equal to `NaN`.
* `+0 == -0` evaluates to `true`, which can lead to unexpected results in numerical comparisons.

The `bug.js` file contains example code showcasing this behavior.  Pay close attention to the results when comparing `NaN` to itself and when comparing `+0` to `-0`.

## The Solution

To avoid these pitfalls, it's strongly recommended to always use the strict equality operator (`===`) for comparisons.  The strict equality operator (`===`) performs a type-safe comparison; it checks both the value and the data type before comparing, so `NaN === NaN` will evaluate to `false` as expected, and `+0 === -0` will evaluate to `false` which is more mathematically aligned. The solution is provided in `bugSolution.js`.