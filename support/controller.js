'use strict';

/**
 * 生成spring mvc的controller方法
 * @param tableDesc
 */
module.exports = function controller(tableDesc) {
    var results = [
        '@RequestMapping("/test")\n',
        'public Object test(@Valid Vo vo, BindingResult bindingResult) {\n',
        '// your code goes here',
        '\n}'
    ].join('');

    return new Promise(function (res) {
        res(results);
    });

};