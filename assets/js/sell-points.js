( function() { 
	
	// Initializes main slider 
	const mainSliderLoaded = bxSliderLoad( $( '.page-head .head-list' ), { 
		// auto: true, 
		// autoStart: true, 
		// infiniteLoop: true, 
		mode: "vertical", 
		controls: false, 
		// adaptiveHeight: true,  
		// pause: 7000, 
		// autoHover: true, 
		// stopAutoOnClick: true 
	} ); 

	if ( !mainSliderLoaded ) { 
		bxSliderLoad( $( '.page-head .image-list' ), { 
			auto: true, 
			infiniteLoop: false, 
			mode: "vertical", 
			controls: false 
		} ); 
	} 

	$( '.details-link' ).on( 'click', function( e ) { 
		window.location.replace( $( this ).attr( 'href' ) ); 
	} ); 


	function bxSliderLoad( element, bxSliderSettings ) { 
		if ( element.children().length <= 1 ) { 
			return false; 
		} 

		element.bxSlider( bxSliderSettings ); 
		return true; 
	}

}() );