$(document).ready(function() {
    /* NAV */
    $('.main-nav li a').click(function() {
        var link = $(this).attr('href');
        $('html, body').animate({
            scrollTop: $(link).offset().top - 50
        }, 1000)
    });

    /* LIGHTBOX */
    var lightbox = $('.lightbox'),
        lightboxContent = $('.lightbox .content');

    $('.samples .sample').click(function() {
        lightbox.addClass('active');
        var data = $(this).data('data'),
            caption = $(this).data('caption');
        lightboxContent.append(data);
        if(caption != undefined) {
            lightboxContent.append('<p>' + caption + '</p>')
        }
        $('body').addClass('no-scroll');
    });

    $('.lightbox-close').click(function() {
        lightbox.removeClass('active');
        lightbox.find('.content').empty();
        $('body').removeClass('no-scroll');
    });

    /* SLIDER */
    var slide = $('.slider .slide'),
        next = $('.slider .next'),
        prev = $('.slider .prev'),
        length = slide.length;

    if(length == 1) {
        $('.actions').hide();
    }

    next.click(function() {
        nextSlide();
    });

    prev.click(function() {
        prevSlide();
    });

    function nextSlide() {
        if(length > 1) {
            var index = $('.slider .slide.active').index();
            slide.removeClass('active');
            if(index == length - 1) {
                index = 0;
                slide.eq(index).addClass('active');
            } else {
                slide.eq(index + 1).addClass('active');
            }
        }
    }

    function prevSlide() {
        var index = $('.slider .slide.active').index();
        slide.removeClass('active');
        if(index == 0) {
            index = length - 1;
            slide.eq(index).addClass('active');
        } else {
            slide.eq(index - 1).addClass('active');
        }
    }

    var interval = setInterval(nextSlide, 5000);
    $('.slider').hover(pause, play);

    function pause() {
        clearInterval(interval);
    }

    function play() {
        interval = setInterval(nextSlide, 5000);
    }
});
