// Main Template

(function ($) {
"use strict";	

// Flights Dropdown
$('#flightTravellersClass').on('click', function() {
    $('.travellers-dropdown').slideToggle('fast');
	/* Change value of Travellers and Class */
	$('.qty-spinner, .flight-class').on('change', function() {
    var ids = ['flightAdult', 'flightChildren', 'flightInfants'];
	var totalCount = ids.reduce(function (prev, id) {
		return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
    var fc = $('input[name="flight-class"]:checked  + label').text();
    $('#flightTravellersClass').val(totalCount + ' - ' + fc);
	}).trigger('change');
});
	
// Trains Dropdown
$('#trainTravellersClass').on('click', function() {
	$('.travellers-dropdown').slideToggle('fast');
	/* Change value of Travellers and Class */
	$('.qty-spinner, #train-class').on('change', function() {
	var ids = ['trainAdult', 'trainChildren', 'trainInfants'];
	var totalCount = ids.reduce(function (prev, id) {
		return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
	var fc = $('#train-class option:selected').text();
	
	$('#trainTravellersClass').val(totalCount + ' - ' + fc);
	}).trigger('change');
});
	
// Hotels Dropdown
$('#hotelsTravellersClass').on('click', function() {
	$('.travellers-dropdown').slideToggle('fast');
	/* Change value of People */
	$('.qty-spinner').on('change', function() {
	var ids = ['adult', 'children'];
	var totalCount = ids.reduce(function (prev, id) {
		return parseInt($('#' + id + '-travellers').val()) + prev}, 0)+ ' ' +'People';
		
	var idsRoom = ['hotels-rooms'];
	var totalCountRoom = idsRoom.reduce(function (prev, id) {
		return parseInt($('#hotels-rooms').val()) + prev}, 0)+ ' ' +'Room';
	
	$('#hotelsTravellersClass').val(totalCountRoom + ' / ' + totalCount);
	}).trigger('change');
});
	
// Hide dropdown
$(document).on('click', function(event) {
if (!$(event.target).closest(".travellers-class").length) {
    $(".travellers-dropdown").hide();
	}
	$('.submit-done').on('click', function() {
	    $('.travellers-dropdown').fadeOut(function() {
	        $(this).hide();
	    });
	});
});

// Tooltips
$('[data-toggle=\'tooltip\']').tooltip({container: 'body'});

$('#back-to-top').on("click", function() {
	$('html, body').animate({scrollTop:0}, 'slow');
	return false;
});

$('.smooth-scroll a').on("click", function() {
    var sectionTo = $(this).attr('href');
    $('html, body').animate({
      scrollTop: $(sectionTo).offset().top - 50}, 600);
});

// Scroll to top
$(function () {
	$(window).on('scroll', function(){
		if ($(this).scrollTop() > 150) {
			$('#back-to-top').fadeIn();
		} else {
			$('#back-to-top').fadeOut();
		}
	});
});

})(jQuery);