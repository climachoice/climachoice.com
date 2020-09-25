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
		autoHover: true, 
		stopAutoOnClick: true 
	} ); 

	if ( !mainSliderLoaded ) { 
		bxSliderLoad( $( '.page-head .image-list' ), {
			mode: "vertical", 
			controls: false 
		} ); 
	}

	function bxSliderLoad( element, bxSliderSettings ) { 
		if ( element.children().length <= 1 ) { 
			return false; 
		} 

		element.bxSlider( bxSliderSettings ); 
		return true; 
	}

}() );