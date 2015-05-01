'use strict';


var mapping = {
    int: "INTEGER",
    bigint: "BIGINT",
    varchar: "VARCHAR",
    datetime: "TIMESTAMP",
    decimal: "DECIMAL"
};

/**
 * 将sqlType转换为JdbcType
 */
module.exports = function typeMapping(sqlType) {
    sqlType = String(sqlType).replace(/\(.+?\)/, '');
    var javaType = mapping[sqlType];
    if (!javaType) {
        console.warn("找不到", sqlType, "对应的JdbcType");
    }
    return javaType;
};