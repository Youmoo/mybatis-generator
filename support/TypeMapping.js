'use strict';


var mapping = {
    int: "Integer",
    bigint: "Long",
    varchar: "String",
    datetime: "Date",
    decimal: "Double",
    char: "String",
    text: "String",
    timestamp: "Date"
};

/**
 * 将sqlType转换为javaType
 */
module.exports = function typeMapping(sqlType) {
    sqlType = String(sqlType).replace(/\(.+?\)(.+){0,}/, '');
    var javaType = mapping[sqlType];
    if (!javaType) {
        console.warn("找不到", sqlType, "对应的javaType");
    }
    return javaType;
};