'use strict';

/**
 * 更多
 */
var MoreTabs = [
    {
        tabName: 'entity',
        loadContent: require('../../../support/entity')
    },
    {
        tabName: 'dao',
        loadContent: require('../../../support/dao')
    },
    {
        tabName: 'baseAliases',
        loadContent: require('../../../support/baseAliases')
    },
    {
        tabName: 'converter',
        loadContent: require('../../../support/converter')
    }
];

module.exports = MoreTabs;