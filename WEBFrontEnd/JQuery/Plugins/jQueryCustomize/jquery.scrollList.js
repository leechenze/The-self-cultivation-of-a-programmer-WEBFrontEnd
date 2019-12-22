(function ($) {

    $.fn.scrollList = function (options) {
        // 对参数进行默认值的设置;
        var obj = options ? options : {},
            limit = obj.limit ? obj.limit : 4,
            speed = obj.speed ? obj.speed : 3000,
            type = obj.type ? obj.type : 0;

        // 获取其中一项
        var itemEle = $(this).children().first(),
            itemEleHeight = itemEle.outerHeight() + parseFloat(itemEle.css('margin-top')) + parseFloat(itemEle.css('margin-bottom'));


        // 设置包裹元素的高度;
        $(this).height(itemEleHeight * limit);

        // 设置动画类型;
        var $that = $(this);
        switch (type) {
            case 1:
                setInterval(function () {
                    $that.children().last().fadeTo(0, 0).hide().prependTo($that).slideDown(400).fadeTo(500, 1);
                }, speed)
                break;
            case 2:
                $that.children().slice(limit).hide();
                setInterval(function () {
                    $that.children().eq(limit - 1).fadeOut(450, function () {
                        $that.children().last().prependTo($that).delay(100).slideDown();
                    })
                }, speed);
                break;
            default:
                setInterval(function () {
                    $that.children().last().hide().prependTo($that).slideDown(500);
                }, speed)
                break;
        }
    }
})(jQuery)