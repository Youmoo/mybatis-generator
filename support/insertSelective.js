'use strict';
var Tag = require('./tag/Tag');

module.exports = function insertSelective(tableDesc) {

    var results = tableDesc.rows.reduce(function (p, row) {
        p.fields.push([
            '\n\t\t<if test="', row.javaField, ' != null">',
            row.field,
            ',</if>'
        ].join(''));
        p.javaFields.push([
            '\n\t\t<if test="', row.javaField, ' != null">',
            '#{', row.field, '}',
            ',</if>'
        ].join(''));
        return p;
    }, {fields: [], javaFields: []});

    var tag = new Tag('insert')
        .addProp('id', 'insertSelective')
        .addProp('parameterType', 'your.entity.Type');

    var content = [
        'insert into ',
        tableDesc.table,
        '\n\t<trim prefix="(" suffix=")" suffixOverrides=",">',
        results.fields.join(''),
        '\n\t</trim>',
        '\n\t<trim prefix="values (" suffix=")" suffixOverrides=",">',
        results.javaFields.join(''),
        '\n\t</trim>'].join('');

    tag.addChild(content);

    return new Promise(function (res) {
        res('' + tag);
    })
};