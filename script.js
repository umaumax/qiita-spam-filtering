// NOTE: to avoid multi click
var scrollFlag = false;
// NOTE: to avoid multi click
var selectAllItemFlag = false;

// for https://qiita.com/*/items/*
$(function() {
    // hide comment form
    //	$('.p-items_container').eq(1).hide();
    $('.it-AuthorInfo').hide();
    $('.p-items_Footer').hide();
    // hide footer
    $('.footer').hide();
    // extend content
    $('.p-items_container').css('max-width', 'initial');
    $('.p-items_container').css('grid-template-columns', '80px calc(100% - 200px - 80px) 200px');
    $('.p-items_toc').css('width', '100%');
    // cahnge color
    $('.p-items_article').css('background-color', '#ddf');
    $('.p-items_wrapper').css('background-color', '#ccf');
    $('.it-Header_time').css('color', '#000');

    // FYI: [【jQuery】動的にlinkタグとstyleタグを追加する \- Tsukikuro Blog](http://tsukikuro.hatenablog.com/entry/2013/12/10/192250)
    // for https://qiita.com/items
    // hide tag ranking
    // charnge main content width
    // remove color inherit (to detect visited link color)
    // NOTE: ':visited'はセキュリティの関係上jsからは操作できないとのこと
    // 遅延読み込みor遅延生成要素に関してはこのcss指定での方が確実
    var style = '<style type="text/css">' +
        '.ra-TagList { display: none; }' +
        '.p-home_main { width:80%; }' +
        'a.tf-ItemContent_title { color:#337ab7 !important; }' + // following items
        'a:visited.tf-ItemContent_title { color:#685987 !important; }' + // following items
        'a.af-Item_title { color:#337ab7 !important; }' + // all items
        'a:visited.af-Item_title { color:#685987 !important; }' + // all items
        '.commentForm { display: none; }' +
        '.tocTree_contents.nav a { color: #000; }' +
        '</style>';
    $(style).appendTo('head');
});

// for https://qiita.com/items
$(window).bind("scroll", function() {
    let windowHeight = $(window).height();
    let scrollHeight = $(document).height();
    let scrollPosition = $(window).height() + $(window).scrollTop();
    if ((scrollHeight - scrollPosition) / windowHeight <= 0.10) {
        if (!scrollFlag) {
            scrollFlag = true;
            // スクロールの位置が下からn%
            // auto scroll
            //			console.log('auto scroll');
            $('.tf-ItemList_moreButton').click();
        }
    } else {
        scrollFlag = false;
    }

    // select all items
    //	console.log('select all items');
    if (!selectAllItemFlag) {
        //	$('.af-ItemList_dropdown').click();
        $('.af-ItemList_dropdownItem').eq(1).click();
        selectAllItemFlag = true;
    }
});
