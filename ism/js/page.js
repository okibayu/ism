// Progress bar
$(".progress-bar").animate({
    width: "100%"
}, 5000); 

//Search Form
$(function() {
    'use strict';
    // Trains Depart Date
    $('#trainsDepart').daterangepicker({
        singleDatePicker: true,
        minDate: moment(),
        autoUpdateInput: true,
    }, function(chosen_date) {
        $('#trainsDepart').val(chosen_date.format('MM-DD-YYYY'));
    });

    // Trains Return Date
    $('#trainsReturn').daterangepicker({
        singleDatePicker: true,
        minDate: moment(),
        autoUpdateInput: true,
    }, function(chosen_date) {
        $('#trainsReturn').val(chosen_date.format('MM-DD-YYYY'));
    });
    // Price Range
    $("#slider-range").slider({
        range: true,
        min: 500000,
        max: 5000000,
        values: [800000, 4500000],
        slide: function(event, ui) {
            $("#amount").val("Rp " + ui.values[0] + " - Rp " + ui.values[1]);
        }
    });
    $("#amount").val("Rp " + $("#slider-range").slider("values", 0) +
        " - Rp " + $("#slider-range").slider("values", 1));
});

// Tooltip
$(document).ready(function() {
    $('[data-toggle="tooltip"]').tooltip({
        boundary: 'window'
    });
});

// Wagon Chair & Mp Selected
$('.w-list').on('click', function() {
    $('#wagon-name').html($(this).find('a').html());
});

$('#collapsex').on('click',function(){
  $('.collapse').collapse('hide');
});

//Carousel menu selection
$( document ).ready(function() {
  var CLASS_CAROUSEL    = '#cr-wagon';
  var CLASS_INDICATORS  = '.w-list';
  var CLASS_ACTIVE      = CLASS_INDICATORS + '> a.active';
  var selectCarousel    = $(CLASS_CAROUSEL); 

  selectCarousel.on('slide.bs.carousel', function (e) {
    var indexTarget = $(e.relatedTarget).index();
    indexTarget = indexTarget - indexTarget % 1;
    
    var selectTarget = $(CLASS_INDICATORS + '> a[data-slide-to="' + indexTarget + '"]');
    if ( !selectTarget.hasClass('active') ) {
      $(CLASS_ACTIVE).removeClass('active');
      selectTarget.addClass('active');
      $('.collapse').collapse('show');
      $('#wagon-name').html($('.w-list a.active').html());      
    }
  });
});

// Carousel controls
var carouselLength = $('.carousel-item').length - 1;
if (carouselLength) {
    $('.carousel-control-next').removeClass('d-none');
}

$('.carousel').carousel({
    interval: false,
    wrap: false
}).on('slide.bs.carousel', function (e) {
    // First one
    if (e.to == 0) {
        $('.carousel-control-prev').addClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
    } // Last one
    else if (e.to == carouselLength) {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').addClass('d-none');
    } // The rest
    else {
        $('.carousel-control-prev').removeClass('d-none');
        $('.carousel-control-next').removeClass('d-none');
    }
});

//Change Seat 
function changeSeat() {
  var x = document.getElementById("selected").innerHTML = "P3";
  document.getElementById("selected").value;
  $('.collapse').collapse('hide');
  }
