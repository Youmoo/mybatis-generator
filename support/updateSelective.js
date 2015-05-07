'use strict';

var typeMapping = require("./TypeMapping");
var fieldMapping = require("./FieldMapping");

module.exports = function updateSelective(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return [
            '\n\t\t<if test="', row.javaField, ' != null">',
            row.field, '= #{', row.javaField, '},',
            '</if>'
        ].join('')
    });

    //Here, the set element will dynamically prepend the SET keyword, and also eliminate any extraneous commas
    // that might trail the value assignments after the conditions are applied.
    var content = [
        '<update id="updateSelective" parameterType="your.entity.Type">',
        '\n\tupdate ',
        tableDesc.table,
        '\n\t<set> ',
        results.join(''),
        '\n\t</set>\n</update>'].join('');

    return new Promise(function (res) {
        res(content);
    })
};