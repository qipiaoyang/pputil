"use strict";

// 外部迭代器
module.exports = function (obj) {
    let len = 0;

    let next = function () {
        len = len + 1;
    };
    let end = function () {
        return len >= obj.length;
    };
    let getItem = function () {
        return obj[len];
    };
    return {
        next: next,
        end: end,
        getItem: getItem
    }
}
