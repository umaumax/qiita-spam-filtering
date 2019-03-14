function include_ja(str) {
    // return (str.match(/[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]{3,}/)) ? true : false
    // FYI: [Javascript Detect Chinese and Japanese Characters – FlyingSky]( http://flyingsky.github.io/2018/01/26/javascript-detect-chinese-japanese/ )
    const REGEX_JAPANESE = /([\u3000-\u303f]|[\u3040-\u309f]|[\u30a0-\u30ff]|[\uff00-\uff9f]|[\u4e00-\u9faf]|[\u3400-\u4dbf]){10,}/;
    return REGEX_JAPANESE.test(str);
}

function hide_spam() {
    // NOTE: for https://qiita.com/search*
    var searchResults = $('.searchResult');
    // NOTE: for https://qiita.com/items
    if (searchResults.length == 0) searchResults = $('.media.ItemLink');
    searchResults.filter(':visible').each(function(i, e) {
        // NOTE: for https://qiita.com/search*
        var text = $(e).find('.searchResult_itemTitle').text();
        // NOTE: for https://qiita.com/items
        if (!text) text = $(e).find('.ItemLink__title').text();
        var is_include_ja = include_ja(text)
        console.log(i + ':' + text + ':' + is_include_ja);
        if (!is_include_ja) {
            $(e).hide();
        }
    });
}
$(function() {
    hide_spam()
});
$(window).bind("scroll", function() {
    hide_spam()
});
