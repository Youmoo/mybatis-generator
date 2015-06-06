'use strict';
var AppDispatcher = require('../dispatcher/AppDispatcher');
var EventEmitter = require('events').EventEmitter;
var AppConstants = require('../constants/AppConstants');
var assign = require('object-assign');
var TabsConfig = require('../constants/TabsConfig');
var MoreTabs = require('../constants/MoreTabs');
var AllTabs = TabsConfig.concat(MoreTabs);
var normalize = require('../../../support/func/normalize');

var CHANGE_EVENT = 'change';
//var url = 'http://localhost:8888';
var url = '';

var _data = {
    table: '',
    tables: [],
    tabIndex: 0,
    desc: {}
};

//Store是一个事件发布器
var AppStore = assign({}, EventEmitter.prototype, {
    getData: function () {
        return _data;
    },
    loadTable: function () {
        return request('/tables');
    },
    descTable: function () {
        _data.desc = null;
        return request('/' + _data.table + '/desc');
    },
    loadTabContent: function (tabName) {
        var func = AllTabs[_data.tabIndex].loadContent;
        if (func) {
            var analysis = _data.desc.rows.reduce(function (p, row) {
                p[!!row.checked].push(row);
                return p;
            }, {false: [], true: []});
            return func({
                table: _data.desc.table,
                rows: analysis.true.length ? analysis.true : analysis.false
            });
        }
        if (_data.desc) {//点击desc标签，如果数据已加载，则不再请求
            return new Promise(function (res) {
                res(_data.desc);
            });
        }
        //否则请求数据
        return request('/' + _data.table + '/' + tabName);
    },

    /**
     * 发送change事件
     */
    emitChange: function () {
        this.emit(CHANGE_EVENT);
    },

    /**
     * 处理change事件
     * @param {function} callback
     */
    addChangeListener: function (callback) {
        this.on(CHANGE_EVENT, callback);
    },

    /**
     * 移除change事件
     * @param {function} callback
     */
    removeChangeListener: function (callback) {
        this.removeListener(CHANGE_EVENT, callback);
    }
});


// Register callback to handle all updates
AppDispatcher.register(function (action) {
    var text;

    switch (action.actionType) {
        case AppConstants.TABLES_LOAD:
            AppStore.loadTable().done(function (rows) {
                _data.tables = rows;
                AppStore.emitChange();
                document.querySelector('tbody tr').click();
            });
            break;
        case AppConstants.TABLE_CLICK:
            _data.table = action.table;
            _data.tabIndex = 0;
            AppStore.descTable().done(function (data) {
                data.rows = normalize(data);
                _data.desc = data;
                _data.content = data;
                AppStore.emitChange();
            });
            break;
        case AppConstants.TAB_CLICK:
            _data.tabIndex = action.tabIndex;
            AppStore.loadTabContent(action.tabName).then(function (json) {
                _data.content = json;
                AppStore.emitChange();
            });
            break;
        case AppConstants.CHECK_COLUMN:
            var row = _data.desc.rows[action.idx];
            row.checked = !row.checked;
            AppStore.emitChange();
        default:
        // no op
    }
});

function request(uri, data) {
    return $.getJSON(url + uri, data).fail(function (data) {
        console.error(data);
    });
}

module.exports = AppStore;