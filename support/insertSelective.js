'use strict';

module.exports = function insertSelective(tableDesc) {

    var results = tableDesc.rows.reduce(function (p, row) {
        p.fields.push([
            '\n\t<if test="', row.javaField, ' != null">',
            row.field,
            ',</if>'
        ].join(''));
        p.javaFields.push([
            '\n\t<if test="', row.javaField, ' != null">',
            '#{', row.field, '}',
            ',</if>'
        ].join(''));
        return p;
    }, {fields: [], javaFields: []});

    var content = [
        '<insert id="insertSelective" parameterType="your.entity.Type">\n',
        'insert into ',
        tableDesc.table,
        '\n<trim prefix="(" suffix=")" suffixOverrides=",">',
        results.fields.join(''),
        '\n</trim>',
        '\n<trim prefix="values (" suffix=")" suffixOverrides=",">',
        results.javaFields.join(''),
        '</trim>',
        '\n</insert>'].join('');
    return new Promise(function (res) {
        res(content);
    })
};