/* eslint-disable semi */
$(function () {
  $('.chartshow').load('chart.html');
  $('div[class^=tpi-selectric]').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });
  $('#startDate').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  });
  $('#endDate').datepicker({
    language: 'zh-TW',
    format: 'yyyy/mm/dd',
    clearBtn: true,
    orientation: 'bottom auto',
    autoclose: true
  });


  $('#queryData').hide();

  $('#queryButton').on('click', function () {
    $('#queryData').show();
  });

});


openChart =function(displayModal){
  $('#dialog-chart').modal(displayModal);
}
