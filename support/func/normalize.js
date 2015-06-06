'use strict';

var typeMapping = require("./../mapping/TypeMapping");
var fieldMapping = require("./../mapping/FieldMapping");

/**
 * 从field&type中分析出javaField及javaType
 * @param tableDesc
 * @returns {Array}
 */
module.exports = function normalize(tableDesc) {
    return tableDesc.rows.map(function (row) {
        return {
            field: row.field,
            type: row.type,
            javaField: fieldMapping(row.field),
            javaType: typeMapping(row.type)
        }
    });
};