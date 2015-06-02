'use strict';

var Tag = require('./../tag/Tag');

module.exports = function updateSelective(tableDesc) {

    var results = tableDesc.rows.map(function (row) {
        return new Tag('if')
            .addProp('test', row.javaField + ' != null')
            .addChild('and ' + row.field + '=#{' + row.javaField + '}');
    });

    //The where element knows to only insert "WHERE" if there is any content returned by the containing tags.
    //Furthermore, if that content begins with "AND" or "OR", it knows to strip it off.
    var tag = new Tag('where')
        .addChildren(results);

    return new Promise(function (res) {
        res('' + tag);
    })
};