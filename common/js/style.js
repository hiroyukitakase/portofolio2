const $submitBtn = $('#js-submit')
$('#form input,#form textarea').on('change', function () {
if (
$('#name').val() !== "" &&
$('#mail').val() !== "" &&
$('#content').val() !== "" &&
$('#privacyCheck').prop('checked') === true &&
$('.js-radio_01').prop('checked') === true || $('.js-radio_02').prop('checked') === true || $('.js-radio_03').prop('checked') === true || $('.js-radio_04').prop('checked') === true
) {
$submitBtn.prop('disabled', false);

} else {
$submitBtn.prop('disabled', true);
}
});

$('#form').submit(function (event) {
  var formData = $('#form').serialize();
  $.ajax({
    url: "https://docs.google.com/forms/u/0/d/e/1FAIpQLSd9YX4VnAuZFnchgveXxxoY3fFr1RB6gokpcVxjvAfkljq5bQ/formResponse",
    data: formData,
    type: "POST",
    dataType: "json",
    statusCode: {
      0: function () {
        $(".end-message").slideDown();
        $(".contact-form-btn").fadeOut();
        //window.location.href = "thanks.html";
      },
      200: function () {
        $(".false-message").slideDown();
      }
    }
  });
  event.preventDefault();
});




$('.humberger').on('click', function () {
    $('.humberger, .drawer').toggleClass('show');
    $('.drawer-mask').toggleClass('show');
    $('.js-drawer-item').css({
      opacity: 0
    })
    .each(function(i) {
      $(this).delay(150 * i).animate({
        opacity: 1
      });
    });
});
$('.drawer-mask').on('click', function () {
  $('.humberger, .drawer').toggleClass('show');
    $('.drawer-mask').toggleClass('show');
});
$('.js-about-scroll').click(function () {
  var p = $(".js-about-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-work-scroll').click(function () {
  var p = $(".js-work-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-culture-scroll').click(function () {
  var p = $(".js-culture-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-topic-scroll').click(function () {
  var p = $(".js-topic-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-contact-scroll').click(function () {
  var p = $(".js-contact-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-vision-scroll').click(function () {
  var p = $(".js-vision-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-message-scroll').click(function () {
  var p = $(".js-message-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
$('.js-company-scroll').click(function () {
  var p = $(".js-company-base").eq(0).offset().top;
  $('body,html').animate({
    scrollTop: p
  }, "swing");
  $('.humberger, .drawer').toggleClass('show');
  $('.drawer-mask').toggleClass('show');
  return false;
});
