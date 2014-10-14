$(document).ready(function(){
$(function() {
 $.fn.scrollToTop = function() {
  $(this).hide().removeAttr("href");
  if ($(window).scrollTop() >= "250") $(this).fadeIn("slow")
  var scrollDiv = $(this);
  $(window).scroll(function() {
   if ($(window).scrollTop() <= "250") $(scrollDiv).fadeOut("slow")
   else $(scrollDiv).fadeIn("slow")
  });
  $(this).click(function() {
   $("html, body").animate({scrollTop: 0}, "slow")
  })
 }
});
$(function() {
 $("#Go_Top").scrollToTop();
});
$(document).ready(function(){
  $(".group1").colorbox({rel:'group1'});
  $(".group2").colorbox({rel:'group2'});
  
  $('.bxslider').bxSlider({
 auto: false,
  minSlides: 4,
  maxSlides: 4,
  slideWidth: 220,
  moveSlides: 4,
  slideMargin: 20
});
$('.bxslider2').bxSlider({
auto: true,
minSlides: 3,
maxSlides: 3,
moveSlides: 3,
slideWidth: 220,
slideMargin: 25
});
    $('.bxslider3').bxSlider({
     auto: true,
  minSlides: 4,
  maxSlides: 4,
  moveSlides: 3,
  slideWidth: 195,
  slideMargin: 20
});
  $('ul.navbar li a').click(function(){
  
    var el = $(this).attr('href');
    var elWrapped = $(el);
    
    scrollToDiv(elWrapped,40);
    
    return false;
  
  });
  
  function scrollToDiv(element,navheight){
  
    
  
    var offset = element.offset();
    var offsetTop = offset.top;
    var totalScroll = offsetTop-navheight;
    
    $('body,html').animate({
        scrollTop: totalScroll
    }, 500);
  
  }
  $('#sliderform').submit(function(e) {
    this.submit();
    setTimeout(function() {
    alert("Сообщение отправлено");
    return(false);
    }, 100);
});
  //$('#myModalPhone').modal('show');
  
    $('#inputform').submit(function(e) {
    this.submit();
    setTimeout(function() {
    alert("Сообщение отправлено");
    return(false);
    }, 100);
});
    $('#mapform').submit(function(e) {
    this.submit();
    setTimeout(function() {
    alert("Сообщение отправлено");
    return(false);
    }, 100);
});
    $('#lightblueform').submit(function(e) {
    this.submit();
    setTimeout(function() {
    alert("Сообщение отправлено");
    return(false);
    }, 100);
});
  
});
var h_hght = 100; // высота шапки
  var h_mrg = 0;    // отступ когда шапка уже не видна
  $(function(){
   $(window).scroll(function(){
      var top = $(this).scrollTop();
      var elem = $('#top_nav');
      if (top+h_mrg < h_hght) {
       /*elem.css('top', (h_hght-top));*/
       $(".menubar").removeClass("top_nav");
      } else {
       /*elem.css('top', h_mrg);*/
        $(".menubar").addClass("top_nav");
      }
    });
  });

// MEIN HERZ BRENNT tududuff tudududuff

$('#sliderform .send').on('click', function(e){
  // e.preventDefault();
  // alert('MEIN HERZ');
  

});

});