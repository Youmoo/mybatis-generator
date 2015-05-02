'use strict';

var camelCase = require('./camelCase');
/**
 * 将sqlField转换为javaField
 */
module.exports = function fieldMapping(sqlField) {
    return camelCase(sqlField);
};