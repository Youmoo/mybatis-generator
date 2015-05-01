'use strict';

var React = require('react');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Table = React.createClass({
    getInitialState: function () {
        return getState();
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
        AppActions.loadTables();
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return <table className="ui table">
            <thead>
            <tr>
                <th>表名</th>
            </tr>
            </thead>
            <tbody>
            {this._buildTables()}
            </tbody>
        </table>
    },
    _buildTables: function () {
        var activeTable = this.state.table;
        return this.state.tables.map(function (table, idx) {
            return <tr key={idx} onClick={this._onClick.bind(null,table)} className={table===activeTable?'teal':''}>
                <td>{table}</td>
            </tr>
        }, this);
    },
    /**
     * 每次数据更新后，重新从store加载state
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function () {
        this.setState(getState());
    },
    _onClick: function (table) {
        AppActions.clickTable(table);
    }
});

function getState() {
    var data = AppStore.getData();
    return {
        tables: data.tables || [],
        table: data.table || ''
    }
}

module.exports = Table;