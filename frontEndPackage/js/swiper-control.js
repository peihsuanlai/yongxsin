//首頁成功案例輪播
const swiper = new Swiper(".case-carousel", {
    loop: true,
    direction: "vertical",
    slidesPerView: 5,
    mousewheel: { //允許滑鼠滾輪控制
        invert: true,
    },
    grabCursor: true,
    loopedSlides: 3,
    autoplay: {
        delay: 600,
        pauseOnMouseEnter: true,
        disableOnInteraction: false, // 使用者互動後仍持續滑動
    },
});
