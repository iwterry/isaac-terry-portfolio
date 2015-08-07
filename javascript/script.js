$(document).ready( function() {
	$('section h2').siblings().hide(); // only want the questions to be seen for the sections 
	$('header').show('2000', function() { // show background and the text in the header 
		// give user instructions for how to proceed 
		alert('Please click on the questions below to expand or collapse the responses to them.');	
	}); 
	//allow the content under the main question of each section to expand or collapse by clicking the question  
	$('section h2').click( function() {
		$(this).siblings().toggle(1000);
	});
});