jQuery(function($){



var $form = $('#leForm');
var $url = $form.find('#putImgUrl');
var $fCTop = $form.find('#putCaptionTop');
var $fCBot = $form.find('#putCaptionBottom');
var $eCTop = $('#captionTop');
var $eCBot = $('#captionBottom');
var $bin = $('#imageBin');
var imgTail = '<img src="';
var imgHead = '" alt="" id="memeIsMe">';

$form.submit(function(e){
  e.preventDefault();
  var url = $url.val();
  var tCTop = $fCTop.val();
  var tCBot = $fCBot.val();
  var imgReady = imgTail + url + imgHead;
  $('#memeIsMe').remove();
  $bin.prepend(imgReady);
 // var imgWidth = $('#memeIsMe').width();
 // $bin.width(imgWidth);
 // console.log('sisiimgWidth  = '+ imgWidth);
  $eCTop.text(tCTop);
  $eCBot.text(tCBot);
})



});

