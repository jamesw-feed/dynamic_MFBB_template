$.getJSON('http://files.feed.xyz/London/feeds/test.json', function(json) {
    $.each(json, function(i, value) {
        $('#stage-10326').append('<div class="item-10326"><p>' + value.name + '</p><p><img src="' + value.picture + '"/></p><p>' + value.balance + '</p><p class="small">' + value.about + '</p><ul class="brands"></ul></div>');
        $ul = $('<ul class="brands"></ul>').appendTo('#ImageGallery');
        // $.each(value.brands, function(index, obj) {
        //     $ul.append('<li>' + obj.brand + '</li>');
        // })
    });
});
