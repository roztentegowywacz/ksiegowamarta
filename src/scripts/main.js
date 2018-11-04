var navigation = document.getElementById('navigation');
var hamburger  = document.getElementById('hamburger');
var menu = document.getElementById('menu');
var aaa = menu.getElementsByTagName('a');

var previewScrollPos = window.pageYOffset;
window.onscroll = function() {
    var currentScrollPos = window.pageYOffset;
    if (!navigation.classList.contains('isOpen')) {
        if (previewScrollPos > currentScrollPos) {
            navigation.style.top = '55px';
        }
        else {
            navigation.style.top = '-55px';
        }
        previewScrollPos = currentScrollPos;
    }
};

hamburger.onclick = function() {
    var spans = this.getElementsByTagName('span');

    navigation.classList.toggle('isOpen');

    for (var i = 0; i < spans.length; i++) {
        spans[i].classList.toggle('animate');
    }
    
    if (menu.clientHeight == 0) {
        menu.style.height = '85vh';
        for (var i = 0; i < aaa.length; i++) {
            aaa[i].style.display = 'block';
        }
    }
    else {
        menu.style.height = '0';
        for (var i = 0; i < aaa.length; i++) {
            aaa[i].style.display = 'none';
        }
    }
};


var slideIndex = 1;
showSlides(slideIndex);

function plusSlides(n) {
  showSlides(slideIndex += n);
}

function currentSlide(n) {
  showSlides(slideIndex = n);
}

function showSlides(n) {
  var i;
  var slides = document.getElementsByClassName("mySlides");
  var dots = document.getElementsByClassName("dot");
  if (n > slides.length) {slideIndex = 1}    
  if (n < 1) {slideIndex = slides.length}
  for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";  
  }
  for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
}



// SLIDER
// class Slider {
//     constructor(elemSelector) {
//         this.sliderSelector = elemSelector;
//         this.currentSlide = 0;
//         this.time = null;
//         this.slider = document.querySelector(this.sliderSelector);
//         this.elem = null;
//         this.slides = document.querySelectorAll('.slider-slide');

//         this.prev = document.querySelector('slider-button-prev');
//         this.next = document.querySelector('slider-button-next');
//         this.dots = [];

//         this.prev.addEventListener('click', this.slidePrev.bind(this));
//         this.next.addEventListener('click', this.slideNext.bind(this));

//         this.changeSlide(this.currentSlide);
//     }
//     slidePrev() {
//         this.currentSlide--;
//         if (this.currentSlide < 0) {
//             this.currentSlide = this.slides.length - 1;
//         }
//         this.changeSlide(this.currentSlide);
//     }
//     slideNext() {
//         this.currentSlide++;
//         if (this.currentSlide > this.slides.length - 1) {
//             this.currentSlide = 0;
//         }
//         this.changeSlide(this.currentSlide);
//     }
//     changeSlide(index) {
//         [...this.slides].forEach(function(slide) {
//             slide.classList.remove('slider-slide-active');
//         });

//         this.dots.forEach(function(dot) {
//             dot.classList.remove('slider-dots-element-active');
//         });
//         this.dots[index].classList.add('slider-dots-element-active');

//         this.currentSlide = index;

//         clearInterval(this.time);
//         this.time = setTimeout(function() {
//             this.slideNext();
//         }.bind(this));
//     }
// }


//wywołanie bez opcji
// const slide = new Slider('#slider1');



// Google Maps
//set your google maps parameters
var $latitude = 49.5849313,
    $longitude = 20.6682586,
    $map_zoom = 15;

//google map custom marker icon - .png fallback for IE11
var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';
    
//define the basic color of your map, plus a value for saturation and brightness
var	$main_color = '#b3c4bc',
    $saturation= -50,
    $brightness= 5;

//we define here the style of the map
var style= [
    {
        "featureType": "all",
        "elementType": "geometry",
        "stylers": [
            {
                "color": "#2b353a"
            },
            {
                "saturation": "-29"
            },
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "color": "#26282a"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "color": "#252e30"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "gamma": 0.01
            },
            {
                "lightness": 20
            },
            {
                "color": "#ffffff"
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.text.stroke",
        "stylers": [
            {
                "saturation": -31
            },
            {
                "lightness": -33
            },
            {
                "weight": 2
            },
            {
                "gamma": 0.8
            }
        ]
    },
    {
        "featureType": "all",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "landscape",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 30
            },
            {
                "saturation": 30
            }
        ]
    },
    {
        "featureType": "landscape.natural.landcover",
        "elementType": "labels.text.fill",
        "stylers": [
            {
                "visibility": "off"
            }
        ]
    },
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "saturation": 20
            }
        ]
    },
    {
        "featureType": "poi.business",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "off"
            },
            {
                "saturation": "0"
            },
            {
                "hue": "#0700ff"
            }
        ]
    },
    {
        "featureType": "poi.park",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 20
            },
            {
                "saturation": -20
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry",
        "stylers": [
            {
                "lightness": 10
            },
            {
                "saturation": -30
            }
        ]
    },
    {
        "featureType": "road",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "saturation": 25
            },
            {
                "lightness": 25
            }
        ]
    },
    {
        "featureType": "water",
        "elementType": "all",
        "stylers": [
            {
                "lightness": -20
            }
        ]
    }
];
    
//set google map options
var map_options = {
    center: new google.maps.LatLng($latitude - 0.002, $longitude),
    zoom: $map_zoom,
    panControl: false,
    zoomControl: false,
    mapTypeControl: false,
    streetViewControl: false,
    mapTypeId: google.maps.MapTypeId.ROADMAP,
    scrollwheel: false,
    styles: style,
}
//inizialize the map
var map = new google.maps.Map(document.getElementById('google-container'), map_options);
//add a custom marker to the map				
var marker = new google.maps.Marker({
    position: new google.maps.LatLng($latitude, $longitude),
    map: map,
    visible: true,
    icon: $marker_url,
});