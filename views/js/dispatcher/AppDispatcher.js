/*
 * AppDispatcher
 * 应用更新逻辑在这里集中处理
 * A singleton that operates as the central hub for application updates.
 */

var Dispatcher = require('flux').Dispatcher;

module.exports = new Dispatcher();
