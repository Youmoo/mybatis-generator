'use strict';
/**
 * tabs
 */
var TabsConfig = [
    {
        tabName: 'desc'
    },
    {
        tabName: 'baseResultMap',
        loadContent: require('../../../support/baseResultMap')
    },
    {
        tabName: 'baseColumns',
        loadContent: require('../../../support/baseColumns')
    },
    {
        tabName: 'insert',
        loadContent: require('../../../support/insert')
    },
    {
        tabName: 'insertSelective',
        loadContent: require('../../../support/insertSelective')
    },
    {
        tabName: 'update',
        loadContent: require('../../../support/update')
    },
    {
        tabName: 'updateSelective',
        loadContent: require('../../../support/updateSelective')
    }
];
module.exports = TabsConfig;