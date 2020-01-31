import React from 'react';
import moment from 'moment';
import PageHeader from './PageHeader';
import Contents from './Contents';

class ContentTrainBooked extends React.Component {

  componentDidMount() {
    const $ = window.$;
    // Trains
    $('#trainTravellersClass').on('click', function() {
      $('.travellers-dropdown').slideToggle('fast');
      
      $('.qty-spinner, #train-class').on('change', function() {
      var ids = ['trainAdult', 'trainChildren', 'trainInfants'];
      var totalCount = ids.reduce(function (prev, id) {
        return parseInt($('#' + id + '-travellers').val()) + prev}, 0);
      var fc = $('#train-class option:selected').text();
      $('#trainTravellersClass').val(totalCount + ' - ' + fc);
      }).trigger('change');
      });
      // End Trains
  
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
  
    // Trains Depart Date
    $('#trainsDepart').daterangepicker({
      singleDatePicker: true,
      minDate: moment(),
      autoUpdateInput: false,
      opens: 'right',
      linkedCalendars: true
      }, function(start) {
      $('#trainsDepart').val(start.format('MM-DD-YYYY'));
      });
        
      // Trains Return Date
      $('#trainsReturn').daterangepicker({
      singleDatePicker: true,
      minDate: moment(),
      autoUpdateInput: false,
      opens: 'left',
      linkedCalendars: true
      }, function(end) {
      $('#trainsReturn').val(end.format('MM-DD-YYYY'));
      });
  
      this.$el = $(this.el);
  
      this.handleClick = this.handleClick;
      this.$el.on('click', this.handleClick);
  
      this.handleChange = this.handleChange;
      this.$el.on('change', this.handleChange);
  
      this.slideToggle = this.slideToggle;
      this.$el.slideToggle('fast', this.handleClick);
      
    }
  
    componentWillUnmount() {
      this.$el.off('change', this.handleChange);
      this.$el.off('click', this.handleClick);
    }

    render() {
      return ( 
        <section id="content">    
            <PageHeader />
            <div className="container">
              <Contents />
            </div>
        </section>
      )
    }
}

export default ContentTrainBooked