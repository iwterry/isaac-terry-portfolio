$(document).ready( function() {
	// only want the header one of each section to show when the document is ready 
	$('section h1').siblings().find('h2').hide(); 
	// only want the header two to show when header 1 is clicked
	$('section h2').siblings('p, ol, ul').hide();
	
	$('section h1 span, section h2 span').addClass("directional-symbol");
	$('section h1').find(".directional-symbol").addClass("fa fa-chevron-circle-down");
 	$('section h2').find(".directional-symbol").addClass("fa fa-chevron-circle-down");
	
	$('section h1').click( function() {
		$(this).siblings().find('h2').toggle(400);
		$(this).find(".directional-symbol").toggleClass("fa-chevron-circle-down  fa-chevron-circle-up ");
	});
	$('section h2').click( function() {
		$(this).siblings('p, ol, ul').toggle(400);
		$(this).find(".directional-symbol").toggleClass("fa-chevron-circle-down  fa-chevron-circle-up ");
	});
});