$( ".our-products .details-link" ).on( "click", function( e ) { 
	e.preventDefault(); 

	const linkHolder = $( this ).parent(); 
	const message = "Все още не работи!"; 
	const messageHolder = $( "<div />" )
		.addClass( "deactivated" )
		.text( message )
		.appendTo( linkHolder ); 
} ); 