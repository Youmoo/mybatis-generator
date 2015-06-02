'use strict';

var Tag = require('./../tag/Tag');


module.exports = function updateSelective(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return new Tag('if')
            .addProp('test', row.javaField + ' != null')
            .addChild(row.field + ' = #{' + row.javaField + '},');
    });

    var tag = new Tag('update')
        .addProp('id', 'updateSelective')
        .addProp('parameterType', 'your.entity.Type');

    var set = new Tag('set', 2)
        .addChildren(results);

    //Here, the set element will dynamically prepend the SET keyword, and also eliminate any extraneous commas
    // that might trail the value assignments after the conditions are applied.
    var content = [
        'update ',
        tableDesc.table,
        '\n\t\t',
        set
    ].join('');

    tag.addChild(content);

    return new Promise(function (res) {
        res('' + tag);
    })
};