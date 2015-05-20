$(document).ready(function(){
		retriveData();    
});

// grab data
function retriveData() {
    var dataSource = 'data.json';
    $.getJSON(dataSource, renderDataVisualsTemplate);
};

// render compiled handlebars template
function renderDataVisualsTemplate(data){
    renderHandlebarsTemplate('slide.handlebars', '#slide-images', data);
};

// render handlebars templates via ajax
function getTemplateAjax(path, callback) {
    var source, template;
    $.ajax({
        url: path,
        success: function (data) {
            source = data;
            template = Handlebars.compile(source);
            if (callback) callback(template);
            loadSlideshow();
        }
    });
};

// function to compile handlebars template
function renderHandlebarsTemplate(withTemplate,inElement,withData){
    getTemplateAjax(withTemplate, function(template) {
        $(inElement).html(template(withData));
    })
};

// initiatalise the slideshow and set up various things
function loadSlideshow() {
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

      .on('jcarousel:createend', function() {
      		$( ".fade-in" ).fadeIn( "slow" );
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
    .on('jcarouselpagination:active', 'span', function() {
        $(this).addClass('active');
    })
    .on('jcarouselpagination:inactive', 'span', function() {
        $(this).removeClass('active');
    })
    .on('click', function(e) {
        e.preventDefault();
    })
    .jcarouselPagination({
        perPage: 1,
        item: function(page) {
            return '<span class="number">' + page + '</span>';
        }
			});

    addSwipe();
};

// Add the swipe functionality  
function addSwipe() { 
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
    addFastClick();
}; 

// Add Fastclick
function addFastClick() { 
	FastClick.attach(document.body);
}; 	

