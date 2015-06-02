'use strict';

/**
 * 将下划线格式转换为驼峰格式
 * 即将 a_bc_def转换为 aBcDef
 */
module.exports = function camelCase(underscore_case) {

    return String(underscore_case).replace(/_\w/g, function (match) {
        return match[1].toUpperCase();
    });
};