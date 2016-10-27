// $.getJSON('http://files.feed.xyz/London/feeds/test.json', function(json) {
//     $.each(json, function(i, value) {
//         $('#stage-10326').append('<div class="item-10326"><p class="red-10326">' + value.name + '</p><p><img src="' + value.picture + '"/></p><p class="red-10326">' + value.balance + '</p><p class="small-10326">' + value.about + '</p></div>');
//     });
// });


$(document).ready(function() {
    $.ajax({
        type: "GET",
        url: "http://www.ebay.com/rps/feed/v1.0/ebay-de",
        dataType: "xml",
        success: xmlParser
    });
});

function xmlParser(xml) {

    $(xml).find("item").first().text(function() {

        $("#title-10326").append('<div>' + $(this).find("title").text() + '</div>');


        $("#price-10326").append('<div class="red-10326 _price-10326">' + $(this).find("currency").text() + ' ' + $(this).find("price").text() + '</div>');


        $("#rpp-10326").append('<div class="small-10326 _red-color">UVP ' + $(this).find("currency").text() + ' <del>' + $(this).find("price").text() + '</del></div>');


        $("#img-10326").append('<img class="space-img-10326" src="' + $(this).find("image225").text() + '"/>');
   

    });

}
 