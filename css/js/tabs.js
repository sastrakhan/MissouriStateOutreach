$('.tabs > ul li a').on('click', function(){
	var that = $(this),
		tabs = that.parent().parent().parent(),
		target = $.trim(that.attr('href').substring(1)),
		items = tabs.find('ul li');

	items.removeClass('selected').find('a[href="#' + target + '"]').parent().addClass('selected');

	tabs.find('.tab').show();
	tabs.find('.tab:not(".' + target + '")').hide();
});

