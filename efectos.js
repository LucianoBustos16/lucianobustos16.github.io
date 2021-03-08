$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		$('.header-title').css({
			'transform': 'translate(0px,' + scroll / 3 + '%)'
		});
        $('.gradient').css({
			'opacity': (.7 - scroll/100)
		});
});
