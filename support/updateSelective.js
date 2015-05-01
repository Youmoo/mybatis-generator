'use strict';

var typeMapping = require("./TypeMapping");
var fieldMapping = require("./FieldMapping");

module.exports = function updateSelective(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return [
            '\n\t\t<if test="', row.javaField, ' != null">',
            row.field, '= #{', row.javaField, '}',
            '</if>'
        ].join('')
    });

    var content = [
        '<update id="updateSelective" parameterType="your.entity.Type">',
        '\n\tupdate ',
        tableDesc.table,
        ' set ',
        results.join(','),
        '\n</update>'].join('');

    return new Promise(function (res) {
        res(content);
    })
};