/* меню */
document.addEventListener('DOMContentLoaded', function() {
    document.querySelector('.header__burger').addEventListener('click', function() {
      document.querySelector('.header__burger, .header-menu, .header-contact__button').classList.toggle('active');
      document.querySelector('body').classList.toggle('lock');
    });
  });

/* слайдер */
window.addEventListener('DOMContentLoaded', () => {

    /* перестроение при изменнении экрана */
    const resizableSwiper = (breakpoint, swiperClass, swiperSettings, callback) => {
        let swiper;

        breakpoint = window.matchMedia(breakpoint);

        const enableSwiper = function (className, settings) {
            swiper = new Swiper(className, settings);

            if (callback) {
                callback(swiper);
            }
        }

        const checker = function () {
            if (breakpoint.matches) {
                return enableSwiper(swiperClass, swiperSettings);
            } else {
                if (swiper !== undefined) swiper.destroy(true, true);
                return;
            }
        };

        breakpoint.addEventListener('change', checker);
        checker();
    }

    /* изменение состояния */
    const someFunc = (instance) => {
        if (instance) {
            instance.on('slideChange', function (e) {
                console.log('*** mySwiper.activeIndex', instance.activeIndex);
            });
        }
    };

    /* настройки первого */
    resizableSwiper(
        '(max-width: 1280px)',
        '.slider-1',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );
    
    /* настройки второго */
    resizableSwiper(
        '(max-width: 1280px)',
        '.slider-2',
        {
            loop: true,
            spaceBetween: 32,
            slidesPerView: 1,
            pagination: {
                el: '.swiper-pagination',
                clickable: true,
            },
        },
        someFunc
    );

});
