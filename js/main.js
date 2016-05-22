$(window).load(function preloader() {
    var cards = new Array()
    function preload() {
        for (i = 0; i < preload.arguments.length; i++) {
            cards[i] = new Image()
            cards[i].src = preload.arguments[i]
        }
    }
    var i, urls = [];
    for(i = 1; i <= 30; i++)
        urls.push('img/chops/Chops-' + i + '.jpg');
    for(i = 1; i <= 30; i++)
        urls.push('img/hype/Hype-' + i + '.jpg');
    for(i = 1; i <= 30; i++)
        urls.push('img/riffs/Riffs-' + i + '.jpg');
    for(i = 1; i <= 30; i++)
        urls.push('img/gear/Gear-' + i + '.jpg');
    preload.apply(null, urls);
});
$(document).ready(function(){
    card1();
    setTimeout(function() {
      card2()
    }, 1000);
    setTimeout(function() {
      card3()
    }, 2000);
    setTimeout(function() {
      card4()
    }, 3000);
});
function card1(){
    var rand1 = Math.floor((Math.random()*30)+1);
	$(".hype").html("<img src='img/hype/Hype-" + rand1 + ".jpg'>");
	setTimeout(card1, 4000);
}
function card2(){
    var rand2 = Math.floor((Math.random()*30)+1);
	$(".chops").html("<img src='img/chops/Chops-" + rand2 + ".jpg'>");
   	setTimeout(card2, 4000);
}
function card3(){
    var rand3 = Math.floor((Math.random()*30)+1);
	$(".riffs").html("<img src='img/riffs/Riffs-" + rand3 + ".jpg'>");
	setTimeout(card3, 4000);
}
function card4(){
	var rand4 = Math.floor((Math.random()*30)+1);
	$(".gear").html("<img src='img/gear/Gear-" + rand4 + ".jpg'>");
	setTimeout(card4, 4000);
}