$('document').ready(function () {
  const amenities = {};
  $('INPUT[type="checkbox"]').change(function () {
    const amenityId = $(this).attr('data-id');
    const amenityName = $(this).attr('data-name');

    if ($(this).is(':checked')) {
      amenities[amenityId] = amenityName;
    } else {
      delete amenities[amenityId];
    }
    $('.amenities H4').text(Object.values(amenities).join(', '));
  });
});
