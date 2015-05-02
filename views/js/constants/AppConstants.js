'use strict';

var keyMirror = require('keymirror');

//这里全是一些更新事件
module.exports = keyMirror({
    TABLES_LOAD: null,//加载tables
    TABLE_CLICK: null,//点击一个表名
    TAB_CLICK: null,//点击一个tab
    CHECK_COLUMN: null//点击一个列名
});