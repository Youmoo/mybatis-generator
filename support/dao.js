'use strict';

/**
 * 构造实体类
 */
module.exports = function dao(tableDesc) {
    var daoName = tableDesc.table.replace(/_\w/g, function (match) {
        return match[1].toUpperCase();
    }).replace(/^\w/, function (match) {
        return match.toUpperCase();
    });

    var results = [
        'public interface ' + daoName + ' {',
        '\t'+daoName+' select();',
        '\tInteger selectCount();',
        '\tvoid insert();',
        '\tvoid insertSelective();',
        '\tvoid update();',
        '\tvoid updateSelective();',
        '\tvoid delete();',
        '}'
    ].join('\n');

    return new Promise(function (res) {
        res(results);
    })
};