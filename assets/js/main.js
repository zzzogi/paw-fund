// page preloader
jQuery(window).on('load', function () { jQuery("#preloader").fadeOut(500); });

//Menu Droup Down on hover
$('.dropdown').hover(function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeIn(50);
}, function () {
    $(this).find('.dropdown-menu').stop(true, true).delay(50).fadeOut(50);
});

//On Scroll Header fixed to top
$(window).scroll(function () {
    if ($(window).scrollTop() >= 50) {
        $('header').addClass('fixed-top smooth');
    }
    else {
        $('header').removeClass('fixed-top smooth');
    }
});

// Get all the dropdown from document
document.querySelectorAll('.dropdown-toggle').forEach(dropDownFunc);

// Dropdown Open and Close function
function dropDownFunc(dropDown) {
    console.log(dropDown.classList.contains('click-dropdown'));

    if (dropDown.classList.contains('click-dropdown') === true) {
        dropDown.addEventListener('click', function (e) {
            e.preventDefault();

            if (this.nextElementSibling.classList.contains('dropdown-active') === true) {
                // Close the clicked dropdown
                this.parentElement.classList.remove('dropdown-open');
                this.nextElementSibling.classList.remove('dropdown-active');

            } else {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');
            }
        });
    }

    if (dropDown.classList.contains('hover-dropdown') === true) {

        dropDown.onmouseover = dropDown.onmouseout = dropdownHover;

        function dropdownHover(e) {
            if (e.type == 'mouseover') {
                // Close the opend dropdown
                closeDropdown();

                // add the open and active class(Opening the DropDown)
                this.parentElement.classList.add('dropdown-open');
                this.nextElementSibling.classList.add('dropdown-active');

            }

            // if(e.type == 'mouseout'){
            //     // close the dropdown after user leave the list
            //     e.target.nextElementSibling.onmouseleave = closeDropdown;
            // }
        }
    }
};

// Listen to the doc click
window.addEventListener('click', function (e) {

    // Close the menu if click happen outside menu
    if (e.target.closest('.dropdown-container') === null) {
        // Close the opend dropdown
        closeDropdown();
    }

});

// Close the openend Dropdowns
function closeDropdown() {
    console.log('run');

    // remove the open and active class from other opened Dropdown (Closing the opend DropDown)
    document.querySelectorAll('.dropdown-container').forEach(function (container) {
        container.classList.remove('dropdown-open')
    });

    document.querySelectorAll('.dropdown-menu').forEach(function (menu) {
        menu.classList.remove('dropdown-active');
    });
}

// close the dropdown on mouse out from the dropdown list
document.querySelectorAll('.dropdown-menu').forEach(function (dropDownList) {
    // close the dropdown after user leave the list
    dropDownList.onmouseleave = closeDropdown;
});

//back to top button
$("#back-top").hide();
$(window).scroll(function () {

    if ($(this).scrollTop() > 900) {
        $("#back-top").fadeIn()
    } else {
        $("#back-top").fadeOut()
    }
});
$("#back-top a").click(function () {
    $("body,html").animate({ scrollTop: 0 }, 800); return false
})

// Flihgt Banner Slider
$('#carouselBanner').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 1
        }
    }
})

// Holidays Banner Slider
$('#carouselHolidays').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 3
        }
    }
})

//promo Slider
$('#carouselPromo').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: true,
    navText: ["<i class='bi bi-arrow-left-short'></i>", "<i class='bi bi-arrow-right-short'></i>"],
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 4
        }
    }
});

//special offer Slider
$('#carouselOffer').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//testimonial slider
$('#carouselReview').owlCarousel({
    center: true,
    loop: true,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 2
        },
        1000: {
            items: 3
        }
    }
});

//partner Slider
$('#carouselPartner').owlCarousel({
    loop: true,
    margin: 15,
    autoplay: true,
    autoplayTimeout: 5000,
    autoplayHoverPause: true,
    nav: false,
    responsiveClass: true,
    responsive: {
        0: {
            items: 1
        },
        767: {
            items: 3
        },
        1000: {
            items: 5
        }
    }
});

// tour gallery Banner Slider
$('#carouselBannerGallery').owlCarousel({
    loop: true,
    autoplay: true,
    margin: 10,
    nav: false,
    dots: false,
    responsive: {
        0: {
            items: 1
        },
        600: {
            items: 1
        },
        1000: {
            items: 4
        }
    }
})

// Progress bar
var wind = $(window);
wind.on('scroll', function () {
    $(".skill-progress .progres").each(function () {
        var bottom_of_object = $(this).offset().top + $(this).outerHeight();
        var bottom_of_window = $(window).scrollTop() + $(window).height();
        var myVal = $(this).attr('data-value');
        if (bottom_of_window > bottom_of_object) {
            $(this).css({
                width: myVal
            });
        }
    });
});

// duration slider Depart
$(function () {
    $("#duration-range").slider({
        range: true,
        min: 1,
        max: 24,
        values: [1, 25],
        slide: function (event, ui) {
            $("#duration").val("Hrs" + ui.values[0] + " - Hrs " + ui.values[1]);
        }
    });
    $("#duration").val("Hrs" + $("#duration-range").slider("values", 0) +
        " - Hrs" + $("#duration-range   ").slider("values", 1));
});

// duration slider Arival
$(function () {
    $("#duration-rangeArv").slider({
        range: true,
        min: 1,
        max: 24,
        values: [1, 25],
        slide: function (event, ui) {
            $("#durationArv").val("Hrs" + ui.values[0] + " - Hrs " + ui.values[1]);
        }
    });
    $("#durationArv").val("Hrs" + $("#duration-rangeArv").slider("values", 0) +
        " - Hrs" + $("#duration-rangeArv   ").slider("values", 1));
});

// price range slider
$(function () {
    $("#slider-range").slider({
        range: true,
        min: 130,
        max: 500,
        values: [130, 250],
        slide: function (event, ui) {
            $("#amount").val("$" + ui.values[0] + " - $" + ui.values[1]);
        }
    });
    $("#amount").val("$" + $("#slider-range").slider("values", 0) +
        " - $" + $("#slider-range").slider("values", 1));
});

// Date calender oneway
// Travel Data calender
$(function () {
    $("#datepicker").datepicker();
    $("#datepicker1").datepicker({ numberOfMonths: 2 });
    //multi city calender
    $("#datepicker2").datepicker();
    $("#datepicker3").datepicker();
    // all activity css
    $("#datepicker4").datepicker();
    $("#datepicker5").datepicker();
    $("#datepicker6").datepicker();
});

// video frame open popup
jQuery(document).ready(function ($) {
    // Define App Namespace
    var popup = {
        // Initializer
        init: function () {
            popup.popupVideo();
        },
        popupVideo: function () {

            $('.video_model').magnificPopup({
                type: 'iframe',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            });

            // Image Gallery Popup
            $('.gallery_container').magnificPopup({
                delegate: 'a',
                type: 'image',
                mainClass: 'mfp-fade',
                removalDelay: 160,
                preloader: false,
                fixedContentPos: false,
                gallery: {
                    enabled: true
                }
            });

        }
    };
    popup.init($);
});

// Add active class to the current button (highlight it)
$(function () {
    $('.navbar-nav li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
    $('.navbar-nav li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
});
// Add active class to the current button (highlight it)
$(function () {
    $('#dashboard li a').filter(function () { return this.href == location.href }).parent().addClass('active').siblings().removeClass('active')
    $('#dashboard li a').click(function () {
        $(this).parent().addClass('active').siblings().removeClass('active')
    })
});

// botstrap tooltip
var tooltipTriggerList = [].slice.call(document.querySelectorAll('[data-bs-toggle="tooltip"]'))
var tooltipList = tooltipTriggerList.map(function (tooltipTriggerEl) {
    return new bootstrap.Tooltip(tooltipTriggerEl)
})