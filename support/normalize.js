'use strict';

var typeMapping = require("./TypeMapping");
var fieldMapping = require("./FieldMapping");

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