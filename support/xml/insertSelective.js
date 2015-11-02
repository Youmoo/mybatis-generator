'use strict';
var Tag = require('./../tag/Tag');

module.exports = function insertSelective(tableDesc) {

    var results = tableDesc.rows.reduce(function (p, row) {
        p.fields.push(
            new Tag('if').addProp('test', row.javaField + '!=null').addChild(row.field + ',')
        );
        p.javaFields.push(
            new Tag('if').addProp('test', row.javaField + '!=null').addChild(row.javaField + ',')
        );
        return p;
    }, {fields: [], javaFields: []});

    var tag = new Tag('insert')
        .addProp('id', 'insertSelective')
        .addProp('parameterType', 'your.entity.Type');

    var trimFields = new Tag('trim', 1).addProp('prefix', '(').addProp('suffix', ')')
        .addProp('suffixOverrides', ',')
        .addChildren(results.fields);

    var trimValues = new Tag('trim', 1).addProp('prefix', '(').addProp('suffix', ')')
        .addProp('suffixOverrides', ',')
        .addChildren(results.javaFields);

    var content = [
        'insert into ' + tableDesc.table,
        trimFields,
        trimValues
    ];

    tag.addChildren(content);

    return new Promise(function (res) {
        res('' + tag);
    })
};