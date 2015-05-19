(function($, Modernizr) {
    $(function() {
    		$('.no-js').addClass('jcarousel').removeClass('no-js');

        var jcarousel = $('.jcarousel');

        jcarousel
            .on('jcarousel:reload jcarousel:create', function () {
                var carousel = $(this),
                    width = carousel.innerWidth();

                if (width >= 600) {
                    width = width / 3;
                } else if (width >= 350) {
                    width = width / 2;
                }

                carousel.jcarousel('items').css('width', Math.ceil(width) + 'px');
            })
            .jcarousel({
	                wrap: 'circular',
			            transitions: Modernizr.csstransitions ? {
	                transforms:   Modernizr.csstransforms,
	                transforms3d: Modernizr.csstransforms3d,
	                easing:       'ease'
	            } : false
            });

        $('.jcarousel-control-prev')
            .jcarouselControl({
                target: '-=1'
            });

        $('.jcarousel-control-next')
            .jcarouselControl({
                target: '+=1'
            });

        $('.jcarousel-pagination')
            .on('jcarouselpagination:active', 'a', function() {
                $(this).addClass('active');
            })
            .on('jcarouselpagination:inactive', 'a', function() {
                $(this).removeClass('active');
            })
            .on('click', function(e) {
                e.preventDefault();
            })
            .jcarouselPagination({
                perPage: 1,
                item: function(page) {
                    return '<a href="#' + page + '">' + page + '</a>';
                }
            });

    var carousel = $('.jcarousel');

    carousel.swipe({
    	excludedElements:['button', 'input', 'select', 'textarea', '.noSwipe'],
        swipeLeft: function(event, direction, distance, duration, fingerCount) {
        	carousel.jcarousel('scroll', '+=1');
        },
        swipeRight: function(event, direction, distance, duration, fingerCount) {
					carousel.jcarousel('scroll', '-=1');
        },
       threshold:0
    });
    $(function() {
			FastClick.attach(document.body);
		});
  });
})(jQuery, Modernizr);
