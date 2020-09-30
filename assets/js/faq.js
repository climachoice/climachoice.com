( function( pageMain, classNames ) {
	const openClassName = classNames[ 0 ];
	const closeClassName = classNames[ 1 ];

	pageMain.on( 'click', function( e ) {
		const target = $( e.target );
		if ( target.is( '.details-link' ) ) { 
			e.preventDefault(); 
			const question = target.closest( '.question' ); 
			// On open navigation button click 'close' is removed 
			// and 'open' is added to navigation class names
			switchClassNames( question, [ closeClassName, openClassName ] );
		} 
	} );

	// Removes the first of the two provided class names and adds the other
	function switchClassNames( section, [ prev, next ] ) {
		section.toggleClass( prev );
		section.toggleClass( next ); 
	}

}( $( '.faq-page' ), [ 'question-open', 'question-close' ] ) );