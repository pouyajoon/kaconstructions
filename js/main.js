$(function() {



	function resize() {
		var docWidth = $(document).width();
		var div1Width = $('#left').outerWidth();
		var div2Width = docWidth - div1Width - 45;
		$('#right').css('width', div2Width);
	}


	function animateLi($container, action, interval) {
		$container.hide().each(function(i, li) {
			setTimeout(function() {
				$(li).show().css('opacity', 1).addClass('animated ' + action);
			}, i * interval);
		});
	}

	// $('#leftMenu li').show().addClass('animated flipInX');

	$('#domaines li').css('opacity', 0);
	
	// animateLi($('.nostravaux li'), 'flipInY', 150);


	$('#expertises li').css('opacity', 0);
	$('ul.engagements li').css('opacity', 0);

	// $('ul.engagements li').hide();
	// $('ul.engagements img').hide();	

	setTimeout(function() {
		animateLi($('ul.engagements li.level1'), 'bounceInUp', 250);
		animateLi($('ul.engagements li.level2'), 'bounceInDown', 500);
		animateLi($('ul.engagements li.level3'), 'bounceInUp', 0);

		animateLi($('#expertises li'), 'bounceInUp', 150);
		animateLi($('#domaines li'), 'flipInY', 150);

	}, 500);

	// setTimeout(function(){
	// 	$('ul.engagements li img').show().addClass('animated flipInX');
	// }, 1750);


	$('h1').addClass('animated bounceInRight');

	$('p.comment').hide();
	$('ul.services li').hide();
	setTimeout(function() {
		animateLi($('ul.services.left li'), 'bounceInLeft', 100);
		animateLi($('ul.services.right li'), 'bounceInRight', 100);

		$('p.comment').show().addClass('animated bounceInUp');

	}, 250);

	$('#menu a').click(function(e) {
		var link = $(this).attr('href');
		$('#right').addClass('animated bounceOutRight');
		setTimeout(function() {
			document.location.href = link;
		}, 850)
		e.preventDefault();
		return false;
	});

	$('div.textZone').show().addClass('animated bounceInLeft');
	$('div.textZoneFull').show().addClass('animated bounceInLeft');

	// if ($('.nostravaux img').length > 0) {
	// 	$('.nostravaux img').each(function(i, img) {
	// 		var src = $(this).attr('src');
	// 		$(this).attr('title', '<img src="' + src + '"/>');
	// 	});
	// 	$('.nostravaux img').tooltip({
	// 		showURL: false,
	// 		fade: 250
	// 	});
	// }

});


var _gaq = _gaq || [];
_gaq.push(['_setAccount', 'UA-XXXXX-X']);
_gaq.push(['_trackPageview']);

(function() {
	var ga = document.createElement('script');
	ga.type = 'text/javascript';
	ga.async = true;
	ga.src = ('https:' == document.location.protocol ? 'https://ssl' : 'http://www') + '.google-analytics.com/ga.js';
	var s = document.getElementsByTagName('script')[0];
	s.parentNode.insertBefore(ga, s);
})();