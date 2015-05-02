'use strict';

var camelCase = require('./camelCase');
var capitalize = require('./capitalize');

/**
 * 构造实体类
 */
module.exports = function dao(tableDesc) {
    var daoName = capitalize(camelCase(tableDesc.table)) + 'Mapper';


    var results = [
        'public interface ' + daoName + ' {',
        '\t' + daoName + ' select();',
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