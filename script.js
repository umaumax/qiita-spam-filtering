function include_ja(str) {
    return (str.match(/[\u30a0-\u30ff\u3040-\u309f\u3005-\u3006\u30e0-\u9fcf]/)) ? true : false
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
