'use strict';

var typeMapping = require("./../mapping/TypeMapping");
var fieldMapping = require("./../mapping/FieldMapping");

module.exports = function normalize(tableDesc) {
    return tableDesc.map(function (row) {
        return {
            field: row.Field,
            type: row.Type,
            javaField: fieldMapping(row.Field),
            javaType: typeMapping(row.Type)
        }
    });
};