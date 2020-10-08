( function( expandables, classNames ) {
	const openClassName = classNames[ 0 ];
	const closeClassName = classNames[ 1 ];

	expandables.on( 'click', function( e ) {
		const target = $( e.target );
		if ( target.is( '.expand-trigger' ) ) { 
			e.preventDefault(); 
			const expandable = target.closest( '.expandable' ); 
			// On open navigation button click 'close' is removed 
			// and 'open' is added to navigation class names
			switchClassNames( expandable, [ openClassName, closeClassName ] ); 
		} 
	} );

	// Removes the first of the two provided class names and adds the other
	function switchClassNames( section, [ prev, next ] ) { 
		if ( !section.hasClass( prev ) && !section.hasClass( next ) ) { 
			section.addClass( prev ); 
			return; 
		}
		section.toggleClass( prev );
		section.toggleClass( next ); 
	}

}( $( '.air-conditioner-features, .air-conditioner-specifications' ), [ 'expandable-open', 'expandable-close' ] ) );