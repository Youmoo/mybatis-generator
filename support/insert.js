'use strict';


module.exports = function insert(tableDesc) {
    var results = tableDesc.rows.reduce(function (p, row) {
        p.fields.push(row.field);
        p.javaFields.push(['#{', row.javaField, '}'].join(''));
        return p;
    }, {fields: [], javaFields: []});

    var content = [
        '<insert id="insert" parameterType="your.entity.Type">\ninsert into ',
        tableDesc.table,
        '\n(',
        results.fields.join(',\n'),
        ') \nvalues\n(',
        results.javaFields.join(',\n'),
        ')',
        '\n</insert>'].join('');

    return new Promise(function (res) {
        res(content);
    })

};