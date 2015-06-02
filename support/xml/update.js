'use strict';
var Tag = require('./../tag/Tag');


module.exports = function update(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return [
            '\n\t', row.field, '= #{', row.javaField, '}'
        ].join('')
    });

    var tag = new Tag('update')
        .addProp('id', 'update')
        .addProp('parameterType', 'your.entity.Type');


    var content = [
        'update ',
        tableDesc.table,
        ' set ',
        results.join(',')
    ].join('');

    tag.addChild(content);

    return new Promise(function (res) {
        res('' + tag);
    })
};