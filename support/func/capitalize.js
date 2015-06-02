'use strict';

/**
 * 将下划线格式转换为驼峰格式
 * 即将 a_bc_def转换为 aBcDef
 */
module.exports = function capitalize(str) {

    return String(str).replace(/^\w/, function (match) {
        return match.toUpperCase();
    });
};