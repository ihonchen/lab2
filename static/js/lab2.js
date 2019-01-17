
function initializePage() {
	$("#buttontop").click(function(e) {
		$('.jumbotron h1').text("javascript is working");
	})};

$(document).ready(function() {
   initializePage();
});

$("a.thumbnail").click(projectClick);


function projectClick(e) { 
    // prevent the page from reloading      
    e.preventDefault();
    // In an event handler, $(this) refers to      
    // the object that triggered the event      
    $(this).css("background-color", "#7fff00");
}
