var body_bg = 'linear-gradient(45deg, rgba(216,255,222,1) 10%, rgba(211,227,255,1) 90%)';
var button1_bg = 'linear-gradient(90deg, #3F2B96 0%, #A8C0FF 100%)';
var button2_bg = 'linear-gradient(-45deg, #1CB5E0 0%, #000851 100%)';
var button3_bg = 'linear-gradient(90deg, #9ebd13 0%, #008552 100%)';
var button4_bg = 'linear-gradient(-45deg, #d53369 0%, #daae51 100%)';

$('a.button').on('mouseover', function() {
	$('.logo').addClass('white');
	$('.logo h3').css('color','white');
	$('.intro h3').css('color','white');
	if($(this).hasClass('button-1')) {
		$('body').css('background', button1_bg);
		$('.some-stuff').addClass('show');
	} 
	if($(this).hasClass('button-2')) {
		$('body').css('background', button2_bg);
		$('.other-stuff').addClass('show');
	}
	if($(this).hasClass('button-3')) {
		$('body').css('background', button3_bg);
		$('.more-stuff').addClass('show');
	}
	if($(this).hasClass('button-4')) {
		$('body').css('background', button4_bg);
		$('.rare-stuff').addClass('show');
	}
});

$('.button').on('mouseout', function() {
	$('body').css('background',body_bg);
	$('.logo').removeClass('white');
	$('.logo h3').css('color','#444');
	$('.intro h3').css('color','#444');
	$('.some-stuff').removeClass('show');
	$('.other-stuff').removeClass('show');
	$('.more-stuff').removeClass('show');
	$('.rare-stuff').removeClass('show');
});