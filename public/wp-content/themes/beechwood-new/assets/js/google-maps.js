


var main_school;

google.maps.event.addDomListener(window, 'load', initialize);
function initialize(condition) {

  if (document.getElementById('school-map'))  {
	    var myOptionsSchoolMap = {
	      center: new google.maps.LatLng(51.135961, 0.286840),
        zoom: 15,
        zoomControl: true,
        zoomControlOptions: {
          style: google.maps.ZoomControlStyle.DEFAULT,
          position: google.maps.ControlPosition.RIGHT_CENTER,
        },
        disableDoubleClickZoom: true,
        mapTypeControl: true,
        mapTypeControlOptions: {
          style: google.maps.MapTypeControlStyle.HORIZONTAL_BAR,
        },
        scaleControl: true,
        scrollwheel: false,
        panControl: true,
        streetViewControl: false,
        draggable : true,
        gestureHandling: 'cooperative',
        overviewMapControl: true,
        overviewMapControlOptions: {
          opened: false,
        },
        mapTypeId: google.maps.MapTypeId.ROADMAP,
        styles: [{"featureType":"administrative","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":20}]},{"featureType":"road","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-100},{"lightness":40}]},{"featureType":"water","elementType":"all","stylers":[{"visibility":"on"},{"saturation":-10},{"lightness":30}]},{"featureType":"landscape.man_made","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":10}]},{"featureType":"landscape.natural","elementType":"all","stylers":[{"visibility":"simplified"},{"saturation":-60},{"lightness":60}]},{"featureType":"poi","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]},{"featureType":"transit","elementType":"all","stylers":[{"visibility":"off"},{"saturation":-100},{"lightness":60}]}]
	    }

	    main_school = new google.maps.Map(document.getElementById("school-map"), myOptionsSchoolMap);
      var image = 'https://www.beechwood.org.uk/wp-content/themes/beechwood-new/assets/img/beechwood-pin.svg';
  		var mapicon = {
  			url: image, // url
  			scaledSize: new google.maps.Size(45, 54), // scaled size
  			origin: new google.maps.Point(0, 0), // origin
  			anchor: new google.maps.Point(18, 50) // anchor
  		};
	    var markerSchool = new google.maps.Marker({
	    	map: main_school,
	    	position: new google.maps.LatLng(51.135961, 0.286840),
        icon: mapicon,
	    });
	    google.maps.event.addListener(markerSchool, 'click', function(){infoWindowSchool.open(main_school,markerSchool);} );
  } // endif


} // end function
