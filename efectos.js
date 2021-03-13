$(window).scroll(function(){
	var scroll = $(window).scrollTop();
		$('.header-title').css({
			'transform': 'translate(0px,' + scroll / 3 + '%)'
		});
        $('.gradient').css({
			'opacity': (.7 - scroll/1000)
		});
        $('.splash .img').css({
			'filter': 'blur(' + scroll / 100 + 'px)'
		});
});

$(window).scroll(function(){
	var windowWidth = $(window).width();
		var scroll = $(window).scrollTop();

		$('.last-new article').css({
			'transform': 'translate(0px, -' + scroll / 15 + '%)'
		});
});


 var swiper = new Swiper('.swiper-container', {
	slidesPerView: 2,
	spaceBetween: 20,
	freeMode: true,
	pagination: {
	  el: '.swiper-pagination',
	  clickable: true,
	},
	breakpoints: {
	  640: {
		slidesPerView: 3,
		spaceBetween: 30,
	  },
	  768: {
		slidesPerView: 3,
		spaceBetween: 40,
	  },
	  1024: {
		slidesPerView: 3,
		spaceBetween: 50,
	  },
	}
  });
