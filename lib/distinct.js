"use strict";

module.exports = function(array) {
    if (Object.prototype.toString.call(array) === "[object Array]") {
        let result = [],
            obj = {};
        for (let i of array) {
            if (!obj[i]) {
                result.push(i);
                obj[i] = 1;
            }
        }
        return result;
    } else {
        throw new Error("arr is not a Array");
    }
}