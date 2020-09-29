( function() { 
	
	// Initializes main slider 
	const mainSliderLoaded = bxSliderLoad( $( '.page-head .head-list' ), { 
		// auto: true, 
		// autoStart: true, 
		// infiniteLoop: true, 
		mode: "vertical", 
		controls: false, 
		adaptiveHeight: true,  
		pause: 7000, 
		preventDefaultSwipeX: false, 
		preventDefaultSwipeY: true 
		// touchEnabled: false 
		// autoHover: true, 
		// stopAutoOnClick: true 
		
		// mode: "slide", 
		// vertical: false,  
		// slideMargin: 0, 
		// adaptiveHeight: true, 
		// pager: true, 
		// controls: false, 
		// item: 1 
	} ); 

	if ( !mainSliderLoaded ) { 
		bxSliderLoad( $( '.page-head .image-list' ), { 
			auto: true, 
			infiniteLoop: false, 
			mode: "vertical", 
			controls: false 
		} ); 
	} 

	// $( '.head-list .details-link' ).on( 'click', function( e ) { 
	// 	window.location.replace( $( this ).attr( 'href' ) ); 
	// } ); 


	function bxSliderLoad( element, bxSliderSettings ) { 
		if ( element.children().length <= 1 ) { 
			return false; 
		} 

		element.bxSlider( bxSliderSettings ); 
		return true; 
	}

}() );