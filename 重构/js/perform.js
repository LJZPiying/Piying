$(document).ready(function () {
    $(".circle-1").hover(function () {
        /*$(this).css({"right":0});*/
        $(this).stop().animate({ "margin-top": 400 }, 300);
    }, function () {
        /*$(this).css({"right":-90});*/
        $(this).stop().animate({ "margin-top": 460 }, 300);
    });
    $(".circle-2").hover(function () {
        /*$(this).css({"right":0});*/
        $(this).stop().animate({ "margin-top": 400 }, 300);
    }, function () {
        /*$(this).css({"right":-90});*/
        $(this).stop().animate({ "margin-top": 460 }, 300);
    });
    $(".circle-3").hover(function () {
        /*$(this).css({"right":0});*/
        $(this).stop().animate({ "margin-top": 400 }, 300);
    }, function () {
        /*$(this).css({"right":-90});*/
        $(this).stop().animate({ "margin-top": 460 }, 300);
    });
    $(".circle-4").hover(function () {
        /*$(this).css({"right":0});*/
        $(this).stop().animate({ "margin-top": 400 }, 300);
    }, function () {
        /*$(this).css({"right":-90});*/
        $(this).stop().animate({ "margin-top": 460 }, 300);
    });

   
    $(".circle-3").click(function () {

        $("#player3").fadeIn(1000);
        

    });
    $(".circle-4").click(function () {
        $("#player4").fadeIn(1000);
       
    });

    var value2 = 0
    $("#img1_hand").rotate({
        bind: {
            click: function () {
                value2 += 20;
                if (value2 < 80) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }

    });

    $("#img1_left_foot").rotate({
        bind: {
            click: function () {
                value2 += 5;
                if (value2 < 30) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }

    });

    $("#img1_right_foot").rotate({
        bind: {
            click: function () {
                value2 += 20;
                if (value2 < 30) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }

    });

    var value2 = 0
    $("#img2_hand").rotate({
        bind: {
            click: function () {
                value2 += 20;
                if (value2 < 80) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });

    var value2 = 0
    $("#img1_left_hand").rotate({
        bind: {
            click: function () {
                value2 += 20;
                if (value2 < 80) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });

    var value2 = 0
    $("#img1_right_hand").rotate({
        bind: {
            click: function () {
                value2 += 5;
                if (value2 < 30) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });

    var value2 = 0
    $("#img2_left_foot").rotate({
        bind: {
            click: function () {
                value2 += 20;
                if (value2 < 80) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });

    var value2 = 0
    $("#img3_right_hand").rotate({
        bind: {
            click: function () {
                value2 += 5;
                if (value2 < 20) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });

    var value2 = 0
    $("#img3_left_foot").rotate({
        bind: {
            click: function () {
                value2 += 10;
                if (value2 < 40) $(this).rotate({ animateTo: value2 });
                else { value2 = 0; $(this).rotate({ animateTo: value2 }); }
            }
        }
    });
});