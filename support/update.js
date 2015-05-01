'use strict';

module.exports = function update(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return [
            '\n\t',row.field, '= #{', row.javaField, '}'
        ].join('')
    });

    var content = [
        '<update id="update" parameterType="your.entity.Type">\n',
        'update ',
        tableDesc.table,
        ' set ',
        results.join(','),
        '\n</update>'].join('');

    return new Promise(function (res) {
        res(content);
    })
};