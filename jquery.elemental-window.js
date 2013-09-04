(function ( $, w ) {

	$.fn.windowOffsets = function() {

		var elem = $(this);
		var elemHeight = elem.outerHeight();
		var elemWidth = elem.outerWidth();

		var windowHeight = $(w).height();
		var windowWidth = $(w).width();

		var edges = {};

       	edges.top = elem.offset().top;
    	edges.right =  windowWidth - elemWidth - elem.offset().left;
    	edges.bottom =  windowHeight - elemHeight - elem.offset().top;
        edges.left = elem.offset().left;

        return edges;
 
    };

})( jQuery, window );