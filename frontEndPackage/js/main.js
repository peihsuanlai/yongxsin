//floating buttons control
$(".expand-circle").click(function () {
    $(this).toggleClass("icon-rotate");
    $(".line-icon").toggleClass("d-none");
    $(".call-icon").toggleClass("d-none");
});

//page top

$(".desktop-page-top-btn, .mobile-page-top-btn").click(function (e) {
    e.preventDefault();
    $("html, body").animate(
        {
            scrollTop: 0,
        },
        500
    ); //500為0.5秒，為animate裡用來設定滑動到最上方(scrollTop:0)時的秒數
});

//url control
$(function () {
    if (location.pathname == "/case.php") {
        $("#nav-case").addClass("active");
    } else if (location.pathname == "/faq.php") {
        $("#nav-faq").addClass("active");
    }
});

// //offcanvas control
$(function () {
    "use strict";
    $('[data-toggle="offcanvas"]').on("click", function () {
        $(".offcanvas-collapse").toggleClass("open");
    });
});
