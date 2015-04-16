$(document).ready(function () {

    var current_page = 1;
    var current_z_index = 1;

    /* 初始化 FullPage */
    $(".page").fullpage({
        anchors: ['pic', 'mov', 'forum', 'history'],
        sectionsColor: ['#141414', '#141414', '#141414', '#141414'],
        css3: true,
        keyboardScrolling: false,
        afterLoad: function (anchorLink, index) {
            current_page = index;
            /* 左下角切换 */
            $(".nav-item.active").removeClass("active");
            $(".nav-item[data-slide-x=0][data-slide-y=" + index + "]").addClass("active");
            /* 导航切换 */
            if (index > 2) {
                $(".navbar-top").css("background", "none");
                nav_toggle(false);
                nav_inverse(false);
                if (index == 3) forum_toggle(true);
            }
        },
        onLeave: function(index, nextIndex, direction) {
            /* 导航切换 */
            if (nextIndex < 3) {
                $(".navbar-top").css("background", "transparent url(../image/shadow.png) repeat-x center top");
                nav_toggle(true);
                nav_inverse(true);
                forum_toggle(false);
            }
        },
        afterSlideLoad: function (anchorLink, index, slideAnchor, slideIndex) {
            $(".nav-item.active").removeClass("active");
            $(".nav-item[data-slide-x=" + slideIndex + "][data-slide-y=" + index + "]").addClass("active");
        }
    });

    /* 禁用滚动切换 */
    //$.fn.fullpage.setAllowScrolling(false);

    /* 初始化DragSlideShow */
    slideshow = new DragSlideshow(document.getElementById('slideshow'), {
        onToggle: function () {
            var switchBtnn = document.getElementById("nav_ham");
            if (slideshow.isFullscreen) classie.add(switchBtnn, 'view-maxi');
            else classie.remove(switchBtnn, 'view-maxi');
        }
    });

    /* 其它初始化 */
    $(".section-baike > h2").css("width", $(".section-baike .item h2").css("width"));
    $(".section-talk > h2").css("width", $(".section-talk").width() - 40);

    /* 导航点击事件 */
    $(".nav-item").click(function () {
        var x = $(this).data("slide-x");
        var y = $(this).data("slide-y");
        $.fn.fullpage.moveTo(y, x);
    });

    /* 右下角点击效果 */
    var dot_flag = false;
    $("#big_dot").click(function () {
        var obj = $(this).find("img");
        if (dot_flag) {
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
        dot_flag = !dot_flag;
    });

    /* 图片点击事件 */
    $("#pic_map").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(2);
    });

    $("#pic_zhou").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(3);
    });

    $("#pic_diy").click(function () {
        $("#big_dot").click();
        $.fn.fullpage.moveTo(4);
    });

    /* 右上角导航点击事件 */
    var ham_flag = true;
    slideshow.options.onToggle = function () {
        if (ham_flag) {
            showElem("#slideshow");
            $("#slideshow").css("z-index", ++current_z_index);
            $(".page").hide();
            nav_toggle(false);
            nav_inverse(true);
        }
        else {
            setTimeout(function () {
                $(".page").show();
                hideElem("#slideshow");
            }, 640);
            $(".page").css("z-index", ++current_z_index);
            if (current_page > 2) nav_inverse(false);
            else nav_toggle(true);
        }
        ham_flag = !ham_flag;
    };

    $("#nav_ham").click(function () {
        slideshow.toggle();
    });

    $("#nav_login").popover({
        content: '<p><a href=""><img src="image/icon/qq.png" style="margin-left:20px;margin-right:50px" title="QQ"></a><a href=""><img src="image/icon/weibo.png" style="margin-right:20px" title="微博"></a></p>',
        container: "body",
        title: "请用合作账号登录",
        html: true,
        placement: "bottom",
        trigger: "focus",
        animation: true,
        delay: { show: 100, hide: 100 }
    });

    $("#nav_add").click(function () {
        $("#publish").modal("show");
    });
});

function nav_toggle(flag) {
    if (flag) {
        $("#big_dot").fadeIn();
        $("#nav_item").fadeIn();
    }
    else {
        $("#big_dot").fadeOut();
        $("#nav_item").fadeOut();
    }
}

function nav_inverse(flag) {
    if (flag) {
        $("#nav_logo > img").attr("src", "image/logo/logo-w.png");
        $("#nav_ham > img").attr("src", "image/icon/hamburger-w.png");
    }
    else {
        $("#nav_logo > img").attr("src", "image/logo/logo-b.png");
        $("#nav_ham > img").attr("src", "image/icon/hamburger-b.png");
    }
    forum_toggle(!flag);
}

function forum_toggle(flag) {
    if (flag) {
        showElem("#nav_search");
        showElem("#nav_login");
        showElem("#nav_add");
    }
    else {
        hideElem("#nav_search");
        hideElem("#nav_login");
        hideElem("#nav_add");
    }
}

function hideElem(obj) {
    $(obj).addClass("hide-elem");
}

function showElem(obj) {
    $(obj).removeClass("hide-elem");
}
