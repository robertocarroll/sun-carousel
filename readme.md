A responsive carousel for The Sun website. 

1. Uses [jcarousel](https://github.com/jsor/jcarousel).
2. Uses [TouchSwipe](http://labs.rampinteracitve.co.uk/touchSwipe/).
3. Uses [Fastclick](https://github.com/ftlabs/fastclick).

## Process
1. data.json contains the slideshow details - Optional slideshow title, image title, image url and link.
2. slide.handlebars is the Handlebars template which renders the json
3. Run 'gulp' to process the css from styles to dist > css and the javascripts from javascripts to dist > javascripts
4. The JavaScript in sun-carousel.js includes the Handlebars processes. For the static version, see the gh-pages branch
