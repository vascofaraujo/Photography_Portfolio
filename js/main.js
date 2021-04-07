$(document).ready(function () {


    let $btns = $('.section-gallery .button-group button');


    $btns.click(function (e) {

        $('.section-gallery .button-group button').removeClass('active');
        e.target.classList.add('active');

        let selector = $(e.target).attr('data-filter');
        $('.section-gallery .grid').isotope({
            filter: selector
        });

        return false;
    })
    $('.section-gallery .button-group #btn1').trigger('click');

    $('.section-gallery .grid .test-popup-link').magnificPopup({
        type: 'image',
        gallery: { enabled: true }
    });

    // sticky navigation menu

    let nav_offset_top = $('.header_area').height() + 50;

    $(function () {
        $(document).scroll(function () {
          var $nav = $(".fixed-top");
          $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        });
      });

});