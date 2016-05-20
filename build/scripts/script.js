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

    var $contactForm = $('#contact_form');
    $contactForm.submit(function(e) {
        e.preventDefault();
        $.ajax({
           url: '//formspree.io/burke.cf@gmail.com',
           method: 'POST',
           data: $(this).serialize(),
           dataType: 'json',
           beforeSend: function() {
              $contactForm.append('<div class="alert alert--loading">Sending message…</div>');
           },
           success: function(data) {
              $contactForm.find('.alert--loading').hide();
              $contactForm.append('<div class="alert alert--success">Message sent!</div>');
           },
           error: function(err) {
              $contactForm.find('.alert--loading').hide();
              $contactForm.append('<div class="alert alert--error">Ops, there was an error.</div>');
           }
        });
    });
});