$(document).ready(function() {
    var wordShowing = null;
    var next = null;
    var numWords = $('.rotating_words span').length
    setInterval(function () {
        var next= $('.rotating_words span.active').next();
        wordShowing = $('.rotating_words span.active');
        console.log(wordShowing.index());
        console.log(numWords);
        if (wordShowing.index() == (numWords -1)) {
            next = $('.rotating_words span').first();
        }
        wordShowing.removeClass('active');
        next.addClass('active');
    }, 3500);
});