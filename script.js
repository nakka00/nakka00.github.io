$(function() {

  // アコーディオン
  $('.faq-list-item').click(function() {
    if ($(this).find('.answer').hasClass('answer-active')) {
      $(this).find('.answer').removeClass('answer-active');
      $(this).find('.answer').slideUp();
      $('span').html("+");
    } else {
      $(this).find('.answer').addClass('answer-active');
      $(this).find('.answer').slideDown();
      $('span').html("-");
    }
  });
  
});
