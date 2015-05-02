'use strict';

var React = require('react');
var Tabs = require('./Tabs');
var AppStore = require('../stores/AppStore');
var AppActions = require('../actions/AppActions');

var Panel = React.createClass({
    getInitialState: function () {
        return getState();
    },
    componentDidMount: function () {
        AppStore.addChangeListener(this._onChange);
    },

    componentWillUnmount: function () {
        AppStore.removeChangeListener(this._onChange);
    },
    render: function () {
        return <div className={this.state.table?'':'hidden'}>
            <Tabs tabIndex={this.state.tabIndex}/>

            <div className="ui bottom attached segment">
                {this.state.content}
            </div>
        </div>
    },
    /**
     * 每次数据更新后，重新从store加载state
     * Event handler for 'change' events coming from the TodoStore
     */
    _onChange: function () {
        this.setState(getState());
    }
});

function getState() {
    var data = AppStore.getData();
    var content = data.content || {rows: []};
    if (typeof content === 'string') {
        content = <pre>{content}</pre>
    } else {
        content = <div>{buildColumns(content)}</div>
    }
    return {
        table: data.table,
        content: content,
        tabIndex: data.tabIndex || 0
    }
}

function buildColumns(data) {
    var rows = data.rows.map(function (row, idx) {
        return <tr key={idx}>
            <td><input className="ui input" type="checkbox" checked={row.checked}
                       onChange={checkColumn.bind(null,idx)}/></td>
            <td>{row.field}</td>
            <td>{row.type}</td>
            <td>{row.javaField}</td>
            <td>{row.javaType}</td>
        </tr>
    });
    return <table className="ui table">
        <thead>
        <tr>
            <th>操作</th>
            <th>field</th>
            <th>type</th>
            <th>javaField</th>
            <th>javaType</th>
        </tr>
        </thead>
        <tbody>
        {rows}
        </tbody>
    </table>
}

function checkColumn(idx) {
    AppActions.checkColumn(idx);
}

module.exports = Panel;