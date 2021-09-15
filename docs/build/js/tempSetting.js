/* eslint-disable semi */
$(function () {
  $('[data-toggle="tooltip"]').tooltip();
  $('div[class^=tpi-selectric]').find('select').selectric({
    arrowButtonMarkup: '<span class="arrow"></span>',
    maxHeight: 250
  });
  $('#queryData').hide();
  $('#queryPage').hide();

  $('#queryButton').on('click', function () {
    $('#queryData').show();
    $('#queryPage').show();
  });
  
});
