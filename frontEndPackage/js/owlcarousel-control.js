// 首頁大圖輪播
$(".banner-carousel").owlCarousel({
    loop: true,
    autoplay: true,
    dots: true,
    items: 1,
    autoplayTimeout: 2000,
    autoplayHoverPause: true,
});


//問答頁頁籤輪播
$(".faqtab-carousel").owlCarousel({
    loop: false,
    autoplay: false,
    dots: false,
    margin: 0,
    autoWidth:true,
    responsive:{
        0:{
            items:3,
            nav:true
        },
        768:{
            items:4,
            nav:true
        },
        992:{
            items:5,
            nav:true,
        }
    }
});