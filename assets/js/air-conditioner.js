( function( specSet, classNames ) {
	const openClassName = classNames[ 0 ];
	const closeClassName = classNames[ 1 ];

	specSet.on( 'click', function( e ) {
		const target = $( e.target );
		if ( target.is( '.spec-heading' ) ) { 
			e.preventDefault(); 
			const spec = target.closest( '.spec' ); 
			// On open navigation button click 'close' is removed 
			// and 'open' is added to navigation class names
			switchClassNames( spec, [ openClassName, closeClassName ] );
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

}( $( '.air-conditioner-model .spec-set' ), [ 'spec-open', 'spec-close' ] ) );