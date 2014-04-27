function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(43.0667, -89.4000),
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

$(document).ready(function(){
	var jqxhr = $.get( "/map/get-markers", function(data) {
	  alert( "success" );
	})
	  .done(function() {
	    console.log(jqxhr);
	    alert(jqxhr.responseJSON.length);
	  })
	  .fail(function() {
	    alert( "error" );
	  })
	  .always(function() {
	    
	  });
});

