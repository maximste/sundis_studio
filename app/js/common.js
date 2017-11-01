$(function() {
	$('#my-menu').mmenu({
		extensions: [ 'theme-white', 'effect-menu-slide', 'pagedim-white' ],
		navbar: {
			title: '<img src="img/SunDis.png" alt="Мастерская SunDis">'
		},
		offCanvas: {
			position: 'right'
		},
		scrollBugFix: {
			fix: 'true'
		},
		pageScroll: {
			scroll: 'true',
			scrollOffset: '50'
		}
	});

	var api = $('#my-menu').data('mmenu');
	api.bind('open:finish', function() {
		$('.hamburger').addClass('is-active');
	});
	api.bind('close:finish', function() {
		$('.hamburger').removeClass('is-active');
	});

	//добавление span в заголовок и выделение его цветом
	$('section .h2').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});
	
	$('section .h3').each(function() {
		var ths = $(this);
		ths.html(ths.html().replace(/^(\S+)/, '<span>$1</span>'));
	});

	$('.reviews').owlCarousel({
		loop: true,
		items: 1,
		smartSpeed: 700,
		nav: true,
		navText: ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
	});

	$("#instagram").instagramGet({
		"user_id": "1833112907",
		"access_token": "1833112907.ba4c844.3dea714ddd65462f803bcc70c237731e",
		"count": 6
	});

	$('select').selectize({
		create: true,
		sortField: 'text'
	});
	
	$('.top').click(function() {
		$('html, body').stop().animate({scrollTop: 0}, 'slow', 'swing');
	});
	$(window).scroll(function() {
		if ($(this).scrollTop() > $(window).height()) {
			$('.top').addClass("active");
		} else {
			$('.top').removeClass("active");
		};
	});
	
	//E-mail Ajax Send
	$("form.callback").submit(function() { //Change
		var th = $(this);
		$.ajax({
			type: "POST",
			url: "/mail.php", //Change
			data: th.serialize()
		}).done(function() {
			$(th).find('.success').addClass('active').css("display", "flex").hide().fadeIn();
			setTimeout(function() {
				$(th).find('.success').removeClass('active').fadeOut();
				th.trigger("reset");
			}, 1000);
		});
		return false;
	});
});

$(window).on('load', function() {
	$('.preloader').delay(1000).fadeOut('slow');
});