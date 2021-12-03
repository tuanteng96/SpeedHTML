var ezsHome = {
    init: function () {
        ezsHome.onResize(),
            ezsHome.sliderHomeTop(),
            $(window).on('scroll', ezsHome.scrollHeader),
            $(document).ready(ezsHome.scrollHeader)

    },

    onResize: function (n) {
        console.log("Browser size: " + window.innerWidth + "x" + window.innerHeight)
    },

    sliderHomeTop: function () {
        $('.slider').slider({
            full_width: false,
            interval: 6000,
            transition: 1000,
            draggable: false,
            indicators: true,
        });

        $('.slide-next').click(function () {
            $('.slider').slider('next');
        });

        $('.slide-prev').click(function () {
            $('.slider').slider('prev');
        });
    },

    scrollHeader: function () {

        var b = $(window).scrollTop();

        if (b > 80) {
            $(".wsmainfull").addClass("scroll");
        } else {
            $(".wsmainfull").removeClass("scroll");
        }
    },
    validateEmail: function () {
    }
};