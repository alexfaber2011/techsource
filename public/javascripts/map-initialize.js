var map;

function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(43.0667, -89.4000),
		zoom: 15
	};
	map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);

function addMarker(value){
	var contentString = 
		"<h3><a href=/issue/" + value._id + ">" + value.title + "</a></h3>" +
		"<p><strong>Address: </strong> " + value.address +
		". " + value.city + ", " + value.state + "</p>" + 
		"<p><strong>Date Posted:</strong> " + value.date + "</p>" +
		"<p><strong>Email:</strong> " + value.useremail + "</p>" +
		"<p><strong>Description:</strong> " + value.description + "</p>";

	
	var infowindow = new google.maps.InfoWindow({
      content: contentString
  	});

  	// To add the marker to the map, use the 'map' property
	var marker = new google.maps.Marker({
	    position: new google.maps.LatLng(value.lat, value.long),
	    map: map,
	    title: value.title
	});

	google.maps.event.addListener(marker, 'click', function() {
    	infowindow.open(map,marker);
  	});
}

$(document).ready(function(){
	var jqxhr = $.get( "/map/get-markers", function(data) {
	  // alert( "success" );
	})
	  .done(function() {
	    console.log(jqxhr);
	    $.each(jqxhr.responseJSON, function(index, value){
	    	addMarker(value)
	    })
	  })
	  .fail(function() {
	    alert( "Error: Unable to retrieve issues" );
	  })
	  .always(function() {
	    
	  });
});  