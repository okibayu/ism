	var firstSeatLabel = 1;

	$(document).ready(function() {
		var $cart = $('#selected-seats'),
			$counter = $('#counter'),
			$total = $('#total'),
			sc = $('#seat-map').seatCharts({
			map: [
				'____b[,D]b[,E]',
				'____b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]b[,C]_b[,D]b[,E]',
				'b[,A]b[,B]___',
				'b[,A]b[,B]___',
			],

			seats: {
				a: {
					price   : 150000,
					classes : 'first-class', //your custom CSS class
					category: 'Kelas Ekonomi',
					
				},
				b: {
					price   : 100000,
					classes : 'economy-class', //your custom CSS class
					category: 'Kelas Ekonomi',
				}
				
			},
			naming : {
				top : false,
				getLabel : function (character, row, column) {
					return firstSeatLabel++;
				},
			},

			legend : {
				node : $('#legend'),
			    items : [
			    	[ 'a', 'focused',   'Aktif'],
					[ 'b', 'selected',   'Terpilih'],
					[ 'b', 'available',   'Tersedia'],
					[ 'b', 'unavailable', 'Tidak Tersedia']
			    ]					
			},

			click: function () {
				
				if (this.data().classes == 'first-class' & this.status() == 'available') {
					$('<li><div class="alert alert-warning fade show p-2 m-2" role="alert"><button type="button" class="close cancel-cart-item" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">\&times;<\/span><\/button><h5 class="text-3 font-weight-bold">Passenger <span id="counter">'+$counter.text()+'<\/h5><\/span>'+this.data().category+'<br><h5 class=text-3>Kursi No: '+this.settings.label+''+data('seatId', this.settings.id)+'<\/h5><\/div><\/li>')
						.attr('id', 'cart-item-'+this.settings.id)
						.data('seatId', this.settings.id)
						.appendTo($cart); 
					
					$counter.text(sc.find('selected').length+1);
					$total.text(recalculateTotal(sc)+this.data().price);
					
					return 'selected';
			} else if (this.data().classes == 'economy-class' & this.status() == 'available') {
					$('<li><div class="alert alert-primary fade show p-2 m-2" role="alert"><button type="button" class="close cancel-cart-item" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">\&times;<\/span><\/button><h5 class="text-3 font-weight-bold">Passenger <span id="counter">'+$counter.text()+'<\/h5><\/span>'+this.data().category+'<br><h5 class=text-3>Kursi No: '+this.settings.label+''+this.settings.id+'<\/h5><\/div><\/li>')
						.attr('id', 'cart-item-'+this.settings.id)
						.data('seatId', this.settings.id)
						.appendTo($cart); 
					
					$counter.text(sc.find('selected').length+1);
					$total.text(recalculateTotal(sc)+this.data().price);
					
					return 'selected'; 
						
				} else if (this.status() == 'selected') {
					//update the counter
					$counter.text(sc.find('selected').length-1);
					//and total
					$total.text(recalculateTotal(sc)-this.data().price);
				
					//remove the item from our cart
					$('#cart-item-'+this.settings.id).remove();
				
					//seat has been vacated
					return 'available';
				} else if (this.status() == 'unavailable') {
					//seat has been already booked
					return 'unavailable';
				} else {
					return this.style();
				}
			}
		});

		//this will handle cancel link clicks
		$('#selected-seats').on('click', '.cancel-cart-item', function () {
			//let's just trigger Click event on the appropriate seat, so we don't have to repeat the logic here
			sc.get($(this).parents('li:first').data('seatId')).click();
		});

		//let's pretend some seats have already been booked
		sc.get(['1_2', '4_1', '7_1', '7_2']).status('unavailable');
		sc.get(['1_5', '2_6', '4_6', '7_5']).status('unavailable');

});

function recalculateTotal(sc) {
	var total = 0;

	//basically find every selected seat and sum its price
	sc.find('selected').each(function () {
		total += this.data().price;
	});
	
	return total;
}