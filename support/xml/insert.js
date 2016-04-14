'use strict';
var Tag = require('./../tag/Tag');

module.exports = function insert(tableDesc) {

    var results = tableDesc.rows.reduce(function (p, row) {
        p.fields.push('\t\t' + row.field);
        p.javaFields.push(['\t\t#{', row.javaField, '}'].join(''));
        return p;
    }, {fields: [], javaFields: []});

    var tag = new Tag('insert')
        .addProp('id', 'insert')
        .addProp('parameterType', 'your.entity.Type');


    var content = [
        'insert into ',
        tableDesc.table,
        '(\n',
        results.fields.join(',\n'),
        '\n\t) \n\tvalues(\n',
        results.javaFields.join(',\n'),
        '\n\t)'
    ].join('');

    tag.addChild(content);

    return new Promise(function (res) {
        res('' + tag);
    })

};