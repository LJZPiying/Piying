$(document).ready(function () {
    /* 初始化 FullPage */
    $('.page').fullpage({
        anchors: ['pic', 'mov'],
        sectionsColor: ['#141414', '#141414'],
        css3: true,
        keyboardScrolling: false,
        afterLoad: function (anchorLink, index) {
            $(".nav-item.active").removeClass("active");
            $(".nav-item[data-slide-x=0][data-slide-y=" + index + "]").addClass("active");
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            $(".nav-item.active").removeClass("active");
            $(".nav-item[data-slide-x=" + slideIndex + "][data-slide-y=" + index + "]").addClass("active");
        }
    });

    /* 禁用滚动切换 */
    $.fn.fullpage.setAllowScrolling(false);

    /* 导航点击事件 */
    $(".nav-item").click(function () {
        var x = $(this).data("slide-x");
        var y = $(this).data("slide-y");
        $.fn.fullpage.moveTo(y, x);
    });

    /* 右下角点击效果 */
    var flag = false;
    $("#big_dot").click(function () {
        var obj = $(this).find("img");
        if (flag) {
            $(".page").removeClass("mohu");
            obj.fadeOut("fast", function () {
                obj.attr("src", "image/icon/point_in.png");
                obj.fadeIn("fast");
            });
            $("#nav_item").fadeIn();
            $("#nav_ham").fadeIn();
            $(".cover").fadeOut();
        }
        else {
            $("#nav_item").fadeOut();
            $("#nav_ham").fadeOut();
            $(".cover").fadeIn();
            $(".page").addClass("mohu");
            obj.fadeOut("fast", function () {
                obj.attr("src", "image/icon/point_out.png");
                obj.fadeIn("fast");
            });
        }
        flag = !flag;
    });

    $("#pic_map").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(2);
    });

    $("#btn_zhou").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(3);
    });

    $("#btn_diy").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(4);
    });
});