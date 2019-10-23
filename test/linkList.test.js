"use strict";

var linkList = require('../lib/linkList.js');

test('测试链表新增元素 ', () => {
    var linklist = new linkList();
    linklist.append(10);
    expect(linklist.toString()).toBe("10");
});



