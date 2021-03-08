$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		$('.header-title').css({
			'transform': 'translate(0px,' + scroll / 3 + '%)'
		});
        $('.splash .img').css({
			'filter': 'blur(' + scroll / 50 + 'px)'
		});
});
