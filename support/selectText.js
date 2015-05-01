/**
 * 选中一个元素包含的所有文本
 *
 * 参考：http://stackoverflow.com/questions/11128130/select-text-in-javascript
 */
function selectText(element) {
    var doc = document;
    if (doc.body.createTextRange) { // ms
        var range = doc.body.createTextRange();
        range.moveToElementText(element);
        range.select();
    } else if (window.getSelection) { // moz, opera, webkit
        var selection = window.getSelection();
        var range = doc.createRange();
        range.selectNodeContents(element);
        selection.removeAllRanges();
        selection.addRange(range);
    }
}

module.exports = selectText;