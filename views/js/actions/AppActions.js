'use strict';

/**
 * view事件使用该模块进行分发
 */
var AppDispatcher = require('../dispatcher/AppDispatcher');
var AppConstants = require('../constants/AppConstants');

var AppActions = {
    loadTables: function () {
        AppDispatcher.dispatch({
            actionType: AppConstants.TABLES_LOAD
        });
    },
    clickTable: function (table) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TABLE_CLICK,
            table: table
        });
    },
    clickTab: function (idx, tabName) {
        AppDispatcher.dispatch({
            actionType: AppConstants.TAB_CLICK,
            tabIndex: idx,
            tabName: tabName
        });
    },
    checkColumn: function (idx) {
        AppDispatcher.dispatch({
            actionType: AppConstants.CHECK_COLUMN,
            idx: idx
        })
    }
};
module.exports = AppActions;