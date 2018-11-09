console.clear();
const lg = window.matchMedia( "(min-width: 992px)" );


var navigation = document.getElementById('navigation');
var hamburger  = document.getElementById('hamburger');
var menu = document.getElementById('menu');
var aaa = menu.getElementsByTagName('a');
var flag = false;

var previewScrollPos = window.pageYOffset;

var myVar;

function myFunction() {
    myVar = setTimeout(showPage, 3);
}

function showPage() {
  document.getElementById("loader").style.display = "none";
  document.getElementById("load-wrapper").style.display = "block";
}


window.addEventListener('scroll', hidenav);
hamburger.addEventListener('click', togglenav);
    
function hidenav() {
    var currentScrollPos = window.pageYOffset;
    if (!navigation.classList.contains('isOpen')) {
        if (previewScrollPos > currentScrollPos) {
            if (lg.matches) {
                navigation.style.top = '55px';
            }
            else {
                navigation.style.top = '0';
            }
        }
        else {
            if (lg.matches) {
                navigation.style.top = '-55px';
            }
            else {
                navigation.style.top = '-75px';
            }
        }
        previewScrollPos = currentScrollPos;
    }
}

function togglenav() {
    var spans = hamburger.getElementsByTagName('span');
    
    navigation.classList.toggle('isOpen');
    
    for (var i = 0; i < spans.length; i++) {
        spans[i].classList.toggle('animate');
    }
    
    if (menu.clientHeight == 0) {
        if (lg.matches) {
            menu.style.height = '82vh';
        }
        else {
            menu.style.height = '100vh';
        }
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
}

    
var links = document.getElementsByClassName('scroll-link');
// var manuLinks = document.getElementsByClassName('menu-link');

for (var i = 0; i < links.length; i++) {
    links[i].addEventListener('click', scroll, false);
    if (links[i].classList.contains('menu-link')) {
        links[i].addEventListener('click', hidenav, false);
        links[i].addEventListener('click', togglenav, false);
    }
}

function scroll(e) {
    e.preventDefault();
    var id = this.getAttribute('href').replace('#', '');
    var target = document.getElementById(id).getBoundingClientRect().top;
    flag = true;
    animateScroll(target);
}
function animateScroll(targetHeight) {
    targetHeight = document.body.scrollHeight - window.innerHeight > targetHeight + scrollY ? 
        targetHeight : document.body.scrollHeight - window.innerHeight;
    var initialPosition = window.scrollY;
    var SCROLL_DURATION = 30;
    var step_x = Math.PI / SCROLL_DURATION;
    var step_count = 0;
    requestAnimationFrame(step);
    function step() {
        if (step_count < SCROLL_DURATION) {
            requestAnimationFrame(step);
            step_count++;
            window.scrollTo(0, initialPosition + targetHeight * 0.25 * Math.pow((1 - Math.cos(step_x * step_count)), 2));
        }
    }
}


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


// Google Maps
//set your google maps parameters
var $latitude = 49.5849313,
    $longitude = 20.6682586,
    $map_zoom = 15;

//google map custom marker icon - .png fallback for IE11
var is_internetExplorer11= navigator.userAgent.toLowerCase().indexOf('trident') > -1;
var $marker_url = ( is_internetExplorer11 ) ? 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location.png' : 'https://s3-us-west-2.amazonaws.com/s.cdpn.io/148866/cd-icon-location_1.svg';

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
                "weight": 1
            },
            {
                "gamma": 1
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
        "featureType": "landscape.man_made",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.fill",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-37"
            },
            {
                "gamma": "1.27"
            }
        ]
    },
    {
        "featureType": "landscape.man_made",
        "elementType": "geometry.stroke",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "weight": "2"
            },
            {
                "saturation": "-100"
            },
            {
                "lightness": "-37"
            },
            {
                "gamma": "1.27"
            }
        ]
    },
   
    {
        "featureType": "poi",
        "elementType": "geometry",
        "stylers": [
            {
                "visibility": "on"
            },
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
        "featureType": "road.highway",
        "elementType": "all",
        "stylers": [
            {
                "visibility": "on"
            },
            {
                "hue": "#ff1800"
            },
            {
                "saturation": "2"
            },
            {
                "lightness": "2"
            },
            {
                // "weight": "0.75"
            }
        ]
    },
    {
        "featureType": "road.arterial",
        "elementType": "labels.icon",
        "stylers": [
            {
                "visibility": "on"
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
            },
            {
                "weight": 2.75
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
            },
            {
                "weight": 1.75
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
    center: new google.maps.LatLng($latitude, $longitude),
    zoom: $map_zoom,
    panControl: false,
    zoomControl: true,
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