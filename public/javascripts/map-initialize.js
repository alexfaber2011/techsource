function initialize() {
	var mapOptions = {
		center: new google.maps.LatLng(43.0667, -89.4000),
		zoom: 15
	};
	var map = new google.maps.Map(document.getElementById("map-canvas"), mapOptions);
}
google.maps.event.addDomListener(window, 'load', initialize);