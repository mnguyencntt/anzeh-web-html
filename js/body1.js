/* AAAA */
window._wpemojiSettings = {
		"baseUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/72x72\/",
		"ext": ".png",
		"svgUrl": "https:\/\/s.w.org\/images\/core\/emoji\/2.3\/svg\/",
		"svgExt": ".svg",
		"source": {
			"concatemoji": "http:\/\/consulting.stylemixthemes.com\/wp-includes\/js\/wp-emoji-release.min.js?ver=4.8"
		}
	};
	! function(a, b, c) {
		function d(a) {
			var b, c, d, e, f = String.fromCharCode;
			if (!k || !k.fillText) return !1;
			switch (k.clearRect(0, 0, j.width, j.height), k.textBaseline = "top", k.font = "600 32px Arial", a) {
				case "flag":
					return k.fillText(f(55356, 56826, 55356, 56819), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 56826, 8203, 55356, 56819), 0, 0), c = j.toDataURL(), b === c && (k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 56128, 56423, 56128, 56418, 56128, 56421, 56128, 56430, 56128, 56423, 56128, 56447), 0, 0), b = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55356, 57332, 8203, 56128, 56423, 8203, 56128, 56418, 8203, 56128, 56421, 8203, 56128, 56430, 8203, 56128, 56423, 8203, 56128, 56447), 0, 0), c = j.toDataURL(), b !== c);
				case "emoji4":
					return k.fillText(f(55358, 56794, 8205, 9794, 65039), 0, 0), d = j.toDataURL(), k.clearRect(0, 0, j.width, j.height), k.fillText(f(55358, 56794, 8203, 9794, 65039), 0, 0), e = j.toDataURL(), d !== e
			}
			return !1
		}

		function e(a) {
			var c = b.createElement("script");
			c.src = a, c.defer = c.type = "text/javascript", b.getElementsByTagName("head")[0].appendChild(c)
		}
		var f, g, h, i, j = b.createElement("canvas"),
			k = j.getContext && j.getContext("2d");
		for (i = Array("flag", "emoji4"), c.supports = {
				everything: !0,
				everythingExceptFlag: !0
			}, h = 0; h < i.length; h++) c.supports[i[h]] = d(i[h]), c.supports.everything = c.supports.everything && c.supports[i[h]], "flag" !== i[h] && (c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && c.supports[i[h]]);
		c.supports.everythingExceptFlag = c.supports.everythingExceptFlag && !c.supports.flag, c.DOMReady = !1, c.readyCallback = function() {
			c.DOMReady = !0
		}, c.supports.everything || (g = function() {
			c.readyCallback()
		}, b.addEventListener ? (b.addEventListener("DOMContentLoaded", g, !1), a.addEventListener("load", g, !1)) : (a.attachEvent("onload", g), b.attachEvent("onreadystatechange", function() {
			"complete" === b.readyState && c.readyCallback()
		})), f = c.source || {}, f.concatemoji ? e(f.concatemoji) : f.wpemoji && f.twemoji && (e(f.twemoji), e(f.wpemoji)))
	}(window, document, window._wpemojiSettings);
	
	
/* <![CDATA[ */
var wc_add_to_cart_params = {
	"ajax_url": "\/wp-admin\/admin-ajax.php",
	"wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
	"i18n_view_cart": "View cart",
	"cart_url": "http:\/\/consulting.stylemixthemes.com\/shop\/cart\/",
	"is_cart": "",
	"cart_redirect_after_add": "no"
};
/* ]]> */


var a2a_config = a2a_config || {};
a2a_config.callbacks = a2a_config.callbacks || [];
a2a_config.templates = a2a_config.templates || {};


var ajaxurl = 'http://consulting.stylemixthemes.com/wp-admin/admin-ajax.php';


var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}


var htmlDiv = document.getElementById("rs-plugin-settings-inline-css");
var htmlDivCss = "";
if (htmlDiv) {
	htmlDiv.innerHTML = htmlDiv.innerHTML + htmlDivCss;
} else {
	var htmlDiv = document.createElement("div");
	htmlDiv.innerHTML = "<style>" + htmlDivCss + "</style>";
	document.getElementsByTagName("head")[0].appendChild(htmlDiv.childNodes[0]);
}


/******************************************
-	PREPARE PLACEHOLDER FOR SLIDER	-
******************************************/
var setREVStartSize = function() {
	try {
		var e = new Object,
			i = jQuery(window).width(),
			t = 9999,
			r = 0,
			n = 0,
			l = 0,
			f = 0,
			s = 0,
			h = 0;
		e.c = jQuery('#rev_slider_4_1');
		e.gridwidth = [1170];
		e.gridheight = [574];

		e.sliderLayout = "fullscreen";
		e.fullScreenAutoWidth = 'off';
		e.fullScreenAlignForce = 'off';
		e.fullScreenOffsetContainer = '';
		e.fullScreenOffset = '';
		if (e.responsiveLevels && (jQuery.each(e.responsiveLevels, function(e, f) {
				f > i && (t = r = f, l = e), i > f && f > r && (r = f, n = e)
			}), t > r && (l = n)), f = e.gridheight[l] || e.gridheight[0] || e.gridheight, s = e.gridwidth[l] || e.gridwidth[0] || e.gridwidth, h = i / s, h = h > 1 ? 1 : h, f = Math.round(h * f), "fullscreen" == e.sliderLayout) {
			var u = (e.c.width(), jQuery(window).height());
			if (void 0 != e.fullScreenOffsetContainer) {
				var c = e.fullScreenOffsetContainer.split(",");
				if (c) jQuery.each(c, function(e, i) {
					u = jQuery(i).length > 0 ? u - jQuery(i).outerHeight(!0) : u
				}), e.fullScreenOffset.split("%").length > 1 && void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 ? u -= jQuery(window).height() * parseInt(e.fullScreenOffset, 0) / 100 : void 0 != e.fullScreenOffset && e.fullScreenOffset.length > 0 && (u -= parseInt(e.fullScreenOffset, 0))
			}
			f = u
		} else void 0 != e.minHeight && f < e.minHeight && (f = e.minHeight);
		e.c.closest(".rev_slider_wrapper").css({
			height: f
		})

	} catch (d) {
		console.log("Failure at Presize of Slider:" + d)
	}
};

setREVStartSize();

var tpj = jQuery;

var revapi4;
tpj(document).ready(function() {
	if (tpj("#rev_slider_4_1").revolution == undefined) {
		revslider_showDoubleJqueryError("#rev_slider_4_1");
	} else {
		revapi4 = tpj("#rev_slider_4_1").show().revolution({
			sliderType: "standard",
			jsFileLocation: "http://anzeh.com/js/",
			sliderLayout: "fullscreen",
			dottedOverlay: "none",
			delay: 9000,
			navigation: {
				keyboardNavigation: "off",
				keyboard_direction: "horizontal",
				mouseScrollNavigation: "off",
				mouseScrollReverse: "default",
				onHoverStop: "off",
				arrows: {
					style: "",
					enable: true,
					hide_onmobile: true,
					hide_under: 1200,
					hide_onleave: false,
					tmp: '',
					left: {
						h_align: "left",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					},
					right: {
						h_align: "right",
						v_align: "center",
						h_offset: 20,
						v_offset: 0
					}
				}
			},
			visibilityLevels: [1240, 1024, 778, 480],
			gridwidth: 1170,
			gridheight: 574,
			lazyType: "none",
			shadow: 0,
			spinner: "spinner0",
			stopLoop: "off",
			stopAfterLoops: -1,
			stopAtSlide: -1,
			shuffle: "off",
			autoHeight: "off",
			fullScreenAutoWidth: "off",
			fullScreenAlignForce: "off",
			fullScreenOffsetContainer: "",
			fullScreenOffset: "",
			disableProgressBar: "on",
			hideThumbsOnMobile: "off",
			hideSliderAtLimit: 0,
			hideCaptionAtLimit: 0,
			hideAllCaptionAtLilmit: 0,
			debugMode: false,
			fallbacks: {
				simplifyAll: "off",
				nextSlideOnWindowFocus: "off",
				disableFocusListener: false,
			}
		});
	}
}); /*ready*/


jQuery(document).ready(function($) {
	var screenWidth = $(window).width();
	if (screenWidth < 1140) {
		var defaultWidth = screenWidth;
	} else {
		var defaultWidth = 1140;
	}
	var marginLeft = (screenWidth - defaultWidth) / 2;

	$('#particles_596e5760cf376').css({
		'width': screenWidth + 'px',
		'margin-left': '-' + marginLeft + 'px'
	});

	particlesJS('particles_596e5760cf376',

		{
			"particles": {
				"number": {
					"value": 120,
					"density": {
						"enable": true,
						"value_area": 800
					}
				},
				"color": {
					"value": "#ffffff"
				},
				"opacity": {
					"value": 0.5,
					"random": false,
					"anim": {
						"enable": false,
						"speed": 1,
						"opacity_min": 0.1,
						"sync": false
					}
				},
				"size": {
					"value": 8,
					"random": true,
					"anim": {
						"enable": false,
						"speed": 40,
						"size_min": 0.1,
						"sync": false
					}
				},
				"line_linked": {
					"enable": true,
					"distance": 150,
					"color": "#ffffff",
					"opacity": 0.4,
					"width": 1
				},
				"move": {
					"enable": true,
					"speed": 6,
					"direction": "none",
					"random": false,
					"straight": false,
					"out_mode": "out",
					"attract": {
						"enable": false,
						"rotateX": 600,
						"rotateY": 1200
					}
				}
			},
			"interactivity": {
				"detect_on": "canvas",
				"events": {
					"onhover": {
						"enable": true,
						"mode": "grab"
					},
					"onclick": {
						"enable": true,
						"mode": "push"
					},
					"resize": true
				}
			},
			"retina_detect": true
		}

	);
});


jQuery(document).ready(function($) {
	var counter_596e5761056ce = new countUp("counter_596e5761056ce", 0, 321, 0, 2.5, {
		useEasing: true,
		useGrouping: false,
		prefix: '',
		suffix: ''
	});
	$(window).scroll(function() {
		if ($("#counter_596e5761056ce").is_on_screen()) {
			counter_596e5761056ce.start();
		}
	});
});


jQuery(document).ready(function($) {
	var counter_596e576106d81 = new countUp("counter_596e576106d81", 0, 27, 0, 2.5, {
		useEasing: true,
		useGrouping: false,
		prefix: '',
		suffix: ''
	});
	$(window).scroll(function() {
		if ($("#counter_596e576106d81").is_on_screen()) {
			counter_596e576106d81.start();
		}
	});
});


jQuery(document).ready(function($) {
	var counter_596e576107ee6 = new countUp("counter_596e576107ee6", 0, 125, 0, 2.5, {
		useEasing: true,
		useGrouping: false,
		prefix: '',
		suffix: ''
	});
	$(window).scroll(function() {
		if ($("#counter_596e576107ee6").is_on_screen()) {
			counter_596e576107ee6.start();
		}
	});
});


jQuery(document).ready(function($) {
	var counter_596e576109389 = new countUp("counter_596e576109389", 0, 100, 0, 2.5, {
		useEasing: true,
		useGrouping: false,
		prefix: '',
		suffix: '%'
	});
	$(window).scroll(function() {
		if ($("#counter_596e576109389").is_on_screen()) {
			counter_596e576109389.start();
		}
	});
});


jQuery(document).ready(function($) {
	"use strict";
	var partners_carousel_596e576111854 = $("#partners_carousel_596e576111854");
	var slickRtl = false;

	if ($('body').hasClass('rtl')) {
		slickRtl = true;
	}


	partners_carousel_596e576111854.slick({
		rtl: slickRtl,
		dots: false,
		infinite: true,
		arrows: true,
		prevArrow: "<div class=\"slick_prev\"><i class=\"fa fa-chevron-left\"></i></div>",
		nextArrow: "<div class=\"slick_next\"><i class=\"fa fa-chevron-right\"></i></div>",
		autoplaySpeed: 5000,
		autoplay: false,
		slidesToShow: 2,
		cssEase: "cubic-bezier(0.455, 0.030, 0.515, 0.955)",
		responsive: [{
			breakpoint: 769,
			settings: {
				slidesToShow: 1
			}
		}]
	});
});


jQuery(document).ready(function($) {
	$(window).load(function() {
		var owlRtl = false;
		if ($('body').hasClass('rtl')) {
			owlRtl = true;
		}
		$("#owl-596e57612465a").owlCarousel({
			rtl: owlRtl,
			dots: false,
			autoplayTimeout: 5000,
			smartSpeed: 250,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 4
				},
				980: {
					items: 5
				},
				1199: {
					items: 6
				}
			}
		});
	});
});


jQuery(document).ready(function($) {
	google.maps.event.addDomListener(window, 'load', init);
	var map_596e57613a15d, markers = [],
		gmarkers = [],
		owl_596e57613a071 = $("#owl_596e57613a071"),
		default_marker_icon = 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/markers/map-marker-skin_default.png';
	$("#skin_color span").on('click', function() {
		for (var i = 0; i < gmarkers.length; i++) {
			if ($(this).attr('id') == 'skin_default') {
				gmarkers[i].setIcon('http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/markers/map-marker-skin_default.png');
			} else {
				gmarkers[i].setIcon('http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/markers/map-marker-' + $(this).attr('id') + '.png');
			}
		}
	});

	function init() {
		var mapStyles = [{
			"featureType": "administrative",
			"elementType": "labels.text.fill",
			"stylers": [{
				"color": "#444444"
			}]
		}, {
			"featureType": "landscape",
			"elementType": "all",
			"stylers": [{
				"color": "#f2f2f2"
			}]
		}, {
			"featureType": "poi",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "road",
			"elementType": "all",
			"stylers": [{
				"saturation": -100
			}, {
				"lightness": 45
			}]
		}, {
			"featureType": "road.highway",
			"elementType": "all",
			"stylers": [{
				"visibility": "simplified"
			}]
		}, {
			"featureType": "road.arterial",
			"elementType": "labels.icon",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "transit",
			"elementType": "all",
			"stylers": [{
				"visibility": "off"
			}]
		}, {
			"featureType": "water",
			"elementType": "all",
			"stylers": [{
				"color": "#6c98e1"
			}, {
				"visibility": "on"
			}]
		}];


		var mapOptions = {
			zoom: 11,
			zoomControlOptions: {
				position: google.maps.ControlPosition.LEFT_TOP
			},
			streetViewControl: false,
			scrollwheel: false,
			styles: mapStyles

		};
		var mapElement = document.getElementById('stm-gmap-596e57613a111');
		map_596e57613a15d = new google.maps.Map(mapElement, mapOptions);

		owl_596e57613a071.on('initialized.owl.carousel', function() {
			consulting_setMarkers();
		});

		var owlRtl = false;

		if ($('body').hasClass('rtl')) {
			owlRtl = true;
		}

		owl_596e57613a071.owlCarousel({
			rtl: owlRtl,
			dotsContainer: '#owl-nav-596e57613a0c3',
			items: 3,
			margin: 70,
			loop: true,
			responsive: {
				0: {
					items: 1
				},
				768: {
					items: 2
				},
				992: {
					items: 3
				}
			},
			onTranslated: function() {
				consulting_setMarkers();
			},
			onInitialize: function(event) {
				if ($('.owl-stage-outer .owl-item').length <= 1) {
					this.settings.loop = false;
				}
			}
		});
	}

	function consulting_setMarkers() {
		var latlngbounds = new google.maps.LatLngBounds();
		markers = [];
		owl_596e57613a071.find('.owl-item.active').each(function(i) {
			markers.push([parseFloat($(this).find('.item').data('lat')), parseFloat($(this).find('.item').data('lng')), $(this).find('.item').data('title')]);
		});
		for (i = 0; i < gmarkers.length; i++) {
			gmarkers[i].setMap(null);
		}
		for (var i = 0; i < markers.length; i++) {
			var marker_array = markers[i];
			marker = new google.maps.Marker({
				position: {
					lat: marker_array[0],
					lng: marker_array[1]
				},
				icon: default_marker_icon,
				map: map_596e57613a15d,
				title: marker_array[2]
			});
			latlngbounds.extend(new google.maps.LatLng(marker_array[0], marker_array[1]));
			gmarkers.push(marker);
			addInfoWindow(marker, marker_array[2], marker_array[0]);
		}
		map_596e57613a15d.fitBounds(latlngbounds);

		if (markers.length === 1) {
			var listener = google.maps.event.addListener(map_596e57613a15d, "idle", function() {
				map_596e57613a15d.setZoom(11);
				google.maps.event.removeListener(listener);
			});
		}
	}

	function addInfoWindow(marker, title, lat) {

		var infowindow = new google.maps.InfoWindow({
			content: '<h6>' + title + '</h6>',
			pixelOffset: new google.maps.Size(0, 20)
		});

		google.maps.event.addListener(marker, 'mouseover', function() {
			infowindow.open(map_596e57613a15d, marker);
			$('[data-lat="' + lat + '"]').addClass("focused");
		});

		google.maps.event.addListener(marker, 'mouseout', function() {
			infowindow.close(map_596e57613a15d, marker);
			$('[data-lat="' + lat + '"]').removeClass("focused");
		});

		$(".item").on("mouseenter", function() {
			if (parseFloat(marker.getPosition().lat()) === parseFloat($(this).data('lat'))) {
				infowindow.open(map_596e57613a15d, marker);
			}
		});

		$(".item").on("mouseleave", function() {
			if (parseFloat(marker.getPosition().lat()) === parseFloat($(this).data('lat'))) {
				infowindow.close(map_596e57613a15d, marker);
			}
		});
	}
});


(function() {
	if (!window.mc4wp) {
		window.mc4wp = {
			listeners: [],
			forms: {
				on: function(event, callback) {
					window.mc4wp.listeners.push({
						event: event,
						callback: callback
					});
				}
			}
		}
	}
})();


jQuery(document).ready(function($) {
	"use strict";

	$("#frontend_customizer_button").on('click', function() {
		if ($("#frontend_customizer").hasClass('open')) {
			$("#frontend_customizer").removeClass('open');
			$(this).find('.fa').removeClass('fa-spin');
		} else {
			$("#frontend_customizer").addClass('open');
			$(this).find('.fa').addClass('fa-spin');
		}
	});

	$('#main').on('click', function(kik) {
		if (!$(kik.target).is('#frontend_customizer, #frontend_customizer *') && $('#frontend_customizer').is(':visible')) {
			$("#frontend_customizer").removeClass('open');
			$(this).find('.fa').removeClass('fa-spin');
		}
	});

	var activeDemo = 'index.html';
	$(".customizer-demo_list ul li:first a").addClass("active");
	$(".customizer-demo_list ul li a").each(function() {
		if ($(this).attr("href") === activeDemo) {
			$(".customizer-demo_list ul li a").removeClass("active");
			var current_demo_text = $(this).text();
			$(".current_demo_text").empty();
			$(".current_demo_text").append(current_demo_text);
			$(this).addClass("active");
		}
	});

	var $base_url = 'index.html';

	$(window).each(function() {
		if ($base_url === activeDemo) {
			$(".header_styles_list ul li:nth-child(2) a").addClass("active");
		}
	});

	$(".header_styles_list ul li a").each(function() {
		if ($(this).attr("href") === activeDemo) {
			var current_header_style_text = $(this).text();
			$(".current_header_style_text").empty();
			$(".current_header_style_text").append(current_header_style_text);
			$(this).addClass("active");
		}
	});

	$(window).on("click", function() {
		$(".current_demo").removeClass("open");
		$(".current_demo").parent().find("ul").slideUp();
		$(".current_header_style").removeClass("open");
		$(".current_header_style").parent().find("ul").slideUp();
	});

	$(".current_demo").on("click", function() {
		$(this).toggleClass("open");
		$(this).parent().find("ul").slideToggle();
		return false;
	});

	$(".current_header_style").on("click", function() {
		$(this).toggleClass("open");
		$(this).parent().find("ul").slideToggle();
		return false;
	});

	var layout = '';

	$(document).on("mouseover", ".customizer-demo_list ul li", function() {
		if ($(".customizer-demos").length) {
			$(".customizer-demos").css("top", $(this).position().top + "px").addClass("active");

			layout = $(this).data("layout");
			$(".customizer-demos .screen").removeClass("active");
			$("#" + layout).addClass("active");

			var $listScreen = $("#" + layout + " a");
			if ($listScreen.attr("data-loaded") === "false") {

				var stmSrc = $listScreen.attr("data-img");
				$listScreen.append('<img src="' + stmSrc + '" />');

				$listScreen.attr("data-loaded", "true");
			}
		}
	});

	$(document).on("mouseout", ".customizer-demo_list ul li", function() {
		if ($(".customizer-demos").length) {
			$(".customizer-demos").removeClass("active");
		}
	});


	$("#skin_color span").on('click', function() {
		var style_id = $(this).attr('id');
		$("#skin_color .active").removeClass("active");
		$(this).addClass("active");
		$("#custom_style").remove();
		$.removeCookie('site_skin', {
			path: '/'
		});
		if (style_id != 'skin_default') {
			$("#custom_style").remove();
			$("head").append('<link rel="stylesheet" id="custom_style" href="http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/css/layout_1/' + style_id + '.css" type="text/css" media="all">');
			$.cookie('site_skin', style_id, {
				expires: 7,
				path: '/'
			});
			if ($("body").hasClass('header_style_2') || $("body").hasClass('header_style_4')) {
				$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark_' + style_id + '.svg');
				$(".footer_logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_' + style_id + '.svg');
			} else {
				$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_' + style_id + '.svg');
				$(".footer_logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_' + style_id + '.svg');
			}
			$(".mobile_header .logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark_' + style_id + '.svg');
		} else {
			if ($("body").hasClass('header_style_2') || $("body").hasClass('header_style_4')) {
				$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark.svg');
				$(".footer_logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_default.svg');
			} else {
				$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_default.svg');
				$(".footer_logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_default.svg');
			}
			$(".mobile_header .logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark.svg');
		}
	});

	if ($.cookie('site_skin')) {
		$("#skin_color #" + $.cookie('site_skin')).addClass("active");
		if ($.cookie('site_skin') != 'skin_default') {
			$("head").append('<link rel="stylesheet" id="custom_style" href="http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/css/layout_1/' + $.cookie('site_skin') + '.css" type="text/css" media="all">');
		}
		$("#skin_color #" + $.cookie('site_skin')).addClass("active");
		if ($("body").hasClass('header_style_2') || $("body").hasClass('header_style_4')) {
			$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark_' + $.cookie('site_skin') + '.svg');
		} else {
			$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_' + $.cookie('site_skin') + '.svg');
		}
		$(".footer_logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_' + $.cookie('site_skin') + '.svg');
		$(".mobile_header .logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark_' + $.cookie('site_skin') + '.svg');
	} else {
		$("#skin_color #skin_default").addClass("active");
	}


	if ($.cookie('navigation_type') && $.cookie('navigation_type') == 'sticky_header') {
		$("body").addClass('sticky_header sticky_menu');
	} else {
		$("body").removeClass('sticky_header sticky_menu');
	}

	$("#navigation_type").on("click", function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$("body").removeClass('sticky_header sticky_menu');
			$.cookie('navigation_type', 'static_header', {
				expires: 7,
				path: '/'
			});
		} else {
			$(this).addClass('active');
			$("body").addClass('sticky_header sticky_menu');
			$.cookie('navigation_type', 'sticky_header', {
				expires: 7,
				path: '/'
			});
		}
	});

	if ($("body").hasClass("sticky_header")) {
		$("#navigation_type").addClass("active");
	} else {
		$("#navigation_type").removeClass("active");
	}


	if ($.cookie('site_layout') && $.cookie('site_layout') == 'boxed') {
		$("#site_layout").addClass('active');
		$("body").addClass('boxed_layout');
		$(".customizer_bg_image").slideDown();
		$('body').removeClass('boxed_bg_image_default boxed_bg_image_pattern');
		if ($("#bg_images span.active").hasClass('image_type')) {
			$('body').addClass('boxed_bg_image_default');
		} else {
			$('body').addClass('boxed_bg_image_pattern');
		}
		$('body').css({
			'background-image': 'url(' + $("#bg_images span.active").attr('data-image') + ')'
		});
	}

	$("#site_layout").on("click", function() {
		if ($(this).hasClass('active')) {
			$(this).removeClass('active');
			$("body").removeClass('boxed_layout');
			$.removeCookie('site_layout', {
				path: '/'
			});
			$(".customizer_bg_image").slideUp();
		} else {
			$(this).addClass('active');
			$("body").addClass('boxed_layout');
			$.cookie('site_layout', 'boxed', {
				expires: 7,
				path: '/'
			});
			$(".customizer_bg_image").slideDown();
			$('body').removeClass('boxed_bg_image_default boxed_bg_image_pattern');
			if ($("#bg_images span.active").hasClass('image_type')) {
				$('body').addClass('boxed_bg_image_default');
			} else {
				$('body').addClass('boxed_bg_image_pattern');
			}
			$('body').css({
				'background-image': 'url(' + $("#bg_images span.active").attr('data-image') + ')'
			});
		}
	});

	$("#bg_images span").on('click', function() {
		$("#bg_images .active").removeClass("active");
		$(this).addClass("active");
		$('body').removeClass('boxed_bg_image_default boxed_bg_image_pattern');
		if ($(this).hasClass('image_type')) {
			$('body').addClass('boxed_bg_image_default');
		} else {
			$('body').addClass('boxed_bg_image_pattern');
		}
		$('body').css({
			'background-image': 'url(' + $(this).attr('data-image') + ')'
		});
	});

	$("select[name='header_style']").on("change", function() {
		window.location.href = $(this).val();
	});

	$("#demos_switcher option").each(function() {
		if (window.location.href.indexOf($(this).attr("demo-url")) != -1) {
			$(this).attr("selected", "selected");
		}
	});

	$("select[name='demos_switcher']").on("change", function(e) {
		var $sitePreloader = $(".stm-site-preloader");
		window.location.href = $(this).find("option:selected").attr('demo-url');
		$('body').addClass("stm-demo-changed");
		if ($sitePreloader.length && !$sitePreloader.hasClass("active")) {
			$sitePreloader.addClass("active");
		}
	});

	$("select[name='demos_switcher']").on('select2:open', function(e) {
		var selectClass = e.currentTarget.dataset.class;
		if (typeof(selectClass) != 'undefined') {
			$('.select2-container--open').addClass(selectClass);
		}
	});

	$("select[name='demos_switcher']").on('select2:close', function(e) {
		if ($(".customizer-demos").length) {
			$(".customizer-demos").removeClass("active");
		}
	});

	if ($("body").hasClass('header_style_5') || $("body").hasClass('header_style_7')) {
		$(".logo img").attr('src', 'http://consulting.stylemixthemes.com/wp-content/themes/consulting/assets/images/tmp/logo_dark.svg');
	}
	if ($("body").hasClass('header_style_1')) {
		$("select[name='header_style'] option.header_style_1").attr("selected", "selected");
	} else if ($("body").hasClass('header_style_3')) {
		$("select[name='header_style'] option.header_style_3").attr("selected", "selected");
	} else if ($("body").hasClass('header_style_4')) {
		$("select[name='header_style'] option.header_style_4").attr("selected", "selected");
	} else if ($("body").hasClass('header_style_5')) {
		$("select[name='header_style'] option.header_style_5").attr("selected", "selected");
	} else if ($("body").hasClass('header_style_6')) {
		$("select[name='header_style'] option.header_style_6").attr("selected", "selected");
	} else if ($("body").hasClass('header_style_7')) {
		$("select[name='header_style'] option.header_style_7").attr("selected", "selected");
	} else {
		$("select[name='header_style'] option.header_style_2").attr("selected", "selected");
	}

});


(function() {
	function addEventListener(element, event, handler) {
		if (element.addEventListener) {
			element.addEventListener(event, handler, false);
		} else if (element.attachEvent) {
			element.attachEvent('on' + event, handler);
		}
	}

	function maybePrefixUrlField() {
		if (this.value.trim() !== '' && this.value.indexOf('http') !== 0) {
			this.value = "http://" + this.value;
		}
	}

	var urlFields = document.querySelectorAll('.mc4wp-form input[type="url"]');
	if (urlFields && urlFields.length > 0) {
		for (var j = 0; j < urlFields.length; j++) {
			addEventListener(urlFields[j], 'blur', maybePrefixUrlField);
		}
	} /* test if browser supports date fields */
	var testInput = document.createElement('input');
	testInput.setAttribute('type', 'date');
	if (testInput.type !== 'date') {

		/* add placeholder & pattern to all date fields */
		var dateFields = document.querySelectorAll('.mc4wp-form input[type="date"]');
		for (var i = 0; i < dateFields.length; i++) {
			if (!dateFields[i].placeholder) {
				dateFields[i].placeholder = 'YYYY-MM-DD';
			}
			if (!dateFields[i].pattern) {
				dateFields[i].pattern = '[0-9]{4}-(0[1-9]|1[012])-(0[1-9]|1[0-9]|2[0-9]|3[01])';
			}
		}
	}

})();


function revslider_showDoubleJqueryError(sliderID) {
	var errorMessage = "Revolution Slider Error: You have some jquery.js library include that comes after the revolution files js include.";
	errorMessage += "<br> This includes make eliminates the revolution slider libraries, and make it not work.";
	errorMessage += "<br><br> To fix it you can:<br>&nbsp;&nbsp;&nbsp; 1. In the Slider Settings -> Troubleshooting set option:  <strong><b>Put JS Includes To Body</b></strong> option to true.";
	errorMessage += "<br>&nbsp;&nbsp;&nbsp; 2. Find the double jquery.js include and remove it.";
	errorMessage = "<span style='font-size:16px;color:#BC0C06;'>" + errorMessage + "</span>";
	jQuery(sliderID).show().html(errorMessage);
}


jQuery(document).ready(function(jQuery) {
	jQuery.datepicker.setDefaults({
		"closeText": "Close",
		"currentText": "Today",
		"monthNames": ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"],
		"monthNamesShort": ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"],
		"nextText": "Next",
		"prevText": "Previous",
		"dayNames": ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"],
		"dayNamesShort": ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"],
		"dayNamesMin": ["S", "M", "T", "W", "T", "F", "S"],
		"dateFormat": "MM d, yy",
		"firstDay": 1,
		"isRTL": false
	});
});


/* <![CDATA[ */
var booked_js_vars = {
	"ajax_url": "http:\/\/consulting.stylemixthemes.com\/wp-admin\/admin-ajax.php",
	"profilePage": "",
	"publicAppointments": "",
	"i18n_confirm_appt_delete": "Are you sure you want to cancel this appointment?",
	"i18n_please_wait": "Please wait ...",
	"i18n_wrong_username_pass": "Wrong username\/password combination.",
	"i18n_fill_out_required_fields": "Please fill out all required fields.",
	"i18n_guest_appt_required_fields": "Please enter your name to book an appointment.",
	"i18n_appt_required_fields": "Please enter your name, your email address and choose a password to book an appointment.",
	"i18n_appt_required_fields_guest": "Please fill in all \"Information\" fields.",
	"i18n_password_reset": "Please check your email for instructions on resetting your password.",
	"i18n_password_reset_error": "That username or email is not recognized."
};
/* ]]> */


/* <![CDATA[ */
var wpcf7 = {
	"apiSettings": {
		"root": "http:\/\/consulting.stylemixthemes.com\/wp-json\/",
		"namespace": "contact-form-7\/v1"
	},
	"recaptcha": {
		"messages": {
			"empty": "Please verify that you are not a robot."
		}
	}
};
/* ]]> */


/* <![CDATA[ */
var sb_instagram_js_options = {
	"sb_instagram_at": ""
};
/* ]]> */


/* <![CDATA[ */
var woocommerce_params = {
	"ajax_url": "\/wp-admin\/admin-ajax.php",
	"wc_ajax_url": "\/?wc-ajax=%%endpoint%%"
};
/* ]]> */


/* <![CDATA[ */
var wc_cart_fragments_params = {
	"ajax_url": "\/wp-admin\/admin-ajax.php",
	"wc_ajax_url": "\/?wc-ajax=%%endpoint%%",
	"fragment_name": "wc_fragments_b4cec779d62ae4868215a22610fbba17"
};
/* ]]> */


/* <![CDATA[ */
var mc4wp_forms_config = [];
/* ]]> */