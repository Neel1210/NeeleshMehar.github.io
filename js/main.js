(function($) {
    "use strict";

    function portfolio_init() {
        var portfolio_grid = $('#portfolio_grid'),
            portfolio_filter = $('#portfolio_filters');
        if (portfolio_grid) {
            portfolio_grid.shuffle({ speed: 450, itemSelector: 'figure' });
            $('.site-main-menu').on("click", "a", function(e) { portfolio_grid.shuffle('update'); });
            portfolio_filter.on("click", ".filter", function(e) {
                portfolio_grid.shuffle('update');
                e.preventDefault();
                $('#portfolio_filters .filter').parent().removeClass('active');
                $(this).parent().addClass('active');
                portfolio_grid.shuffle('shuffle', $(this).attr('data-group'));
            });
        }
    }
    
    $(function() {
        $('#contact-form').validator();
        $('#contact-form').on('submit', function(e) {

            let data=$(this).serialize();
            var formData = new URLSearchParams(data);
            var name = formData.get('name');
            var mail = formData.get('email');
            var message = formData.get('message');
            alert(name+"\n"+mail+"\n"+message);



            // Email.send({
            //     Host: "smtp.gmail.com",
            //     Username: "1210neelesh@gmail.com",
            //     Password: "8CB99C635C6DE5D557024CBEFB87CE973178",
            //     To: 'neelesh1210@icloud.com',
            //     From: "1210neelesh@gmail.com",
            //     Subject: 'Message from '+name,
            //     Body:  ''+message+"\n\nEmail -"+mail,
            //   }).then(function (message) {
            //       alert("Mail sent successfully "+message)
            //     });
            // alert("mail sent successfully")
            // import * as nodemailer from '../node_modules/nodemailer/lib/nodemailer';
            const transporter = nodemailer.createTransport({
                host: 'smtp.elasticemail.com', // Use the appropriate SMTP service (e.g., 'Gmail', 'Outlook', 'Yahoo', etc.)
                port: 2525,
                auth: {
                  user: '1210neelesh@gmail.com', // Your email address
                  pass: '' // Your email password or application-specific password
                }
            });

            const mailOptions = {
                from: '1210neelesh@gmail.com', // Sender's email address
                to: 'contact@neeleshmehar.in', // Receiver's email address
                subject: 'Message from '+name, // Email subject
                text: ''+message+"\n\nEmail -"+mail // Email body (plain text)
              };

            transporter.sendMail(mailOptions, function(error, info) {
                alert("Sending");
                if (error) {
                  console.error('Error:', error);
                  alert(error);
                } else {
                  alert('Email sent:', info.response);
                  console.log('Email sent:', info.response);
                   var messageAlert = 'alert-' + name; var messageText = message; var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>'; if (messageAlert && messageText) { $('#contact-form').find('.messages').html(alertBox); if (messageAlert == "alert-success") { $('#contact-form')[0].reset(); } }
                }
              });
        });
        

        // function sendEmail() {
        //     Email.send({
        //       Host: "smtp.gmail.com",
        //       Username: "1210neelesh@gmail.com",
        //       Password: "wmbucelvfpzzdrxo",
        //       To: 'contact@neeleshmehar.in',
        //       From: "1210neelesh@gmail.com",
        //       Subject: 'Message from '+name,
        //       Body:  ''+message+"\n\nEmail -"+mail,
        //     })
        //       .then(function (message) {
        //         alert("mail sent successfully")
        //       });
        //   }

        // const transporter = nodemailer.createTransport({
        //     service: 'Gmail', // Use the appropriate SMTP service (e.g., 'Gmail', 'Outlook', 'Yahoo', etc.)
        //     auth: {
        //       user: '1210neelesh@gmail.com', // Your email address
        //       pass: 'your_password' // Your email password or application-specific password
        //     }
        // });

        // const mailOptions = {
        //     from: '1210neelesh@gmail.com', // Sender's email address
        //     to: 'contact@neeleshmehar.in', // Receiver's email address
        //     subject: 'Message from', // Email subject
        //     text: 'This is a test email sent from Node.js using Nodemailer.' // Email body (plain text)
        //   };

        // transporter.sendMail(mailOptions, function(error, info) {
        //     if (error) {
        //       console.error('Error:', error);
        //     } else {
        //       console.log('Email sent:', info.response);
        //     }
        //   });

        // $('#contact-form').validator();
        // $('#contact-form').on('submit', function(e) {
        //     if (!e.isDefaultPrevented()) {
        //         var url = "https://script.google.com/macros/s/AKfycbxlTtuUdsFgfcKUOlcJOQmrOuuyqq_aQFBCL7neQECBnMnWepKXob_9Yv73DTfP146u/exec";
        //         $.ajax({
        //             type: "POST",
        //             url: url,
        //             data: $(this).serialize(),
        //             success: function(data) { var messageAlert = 'alert-' + data.type; var messageText = data.message; var alertBox = '<div class="alert ' + messageAlert + ' alert-dismissable"><button type="button" class="close" data-dismiss="alert" aria-hidden="true">&times;</button>' + messageText + '</div>'; if (messageAlert && messageText) { $('#contact-form').find('.messages').html(alertBox); if (messageAlert == "alert-success") { $('#contact-form')[0].reset(); } } }
        //         });
        //         return false;
        //     }
        // });
    });
    
    function mobileMenuHide() { var windowWidth = $(window).width(); if (windowWidth < 1024) { $('.site-nav').addClass('mobile-menu-hide'); } }
    $(document).ready(function() {
        var $portfolio_container = $("#portfolio_grid");
        $portfolio_container.imagesLoaded(function() { setTimeout(function() { portfolio_init(this); }, 500); });
        $(' #portfolio_grid > figure > a ').each(function() { $(this).hoverdir(); });
        $('.menu-toggle').click(function() { $('.site-nav').toggleClass('mobile-menu-hide'); });
        $(".testimonials.owl-carousel").owlCarousel({ nav: true, items: 1, loop: true, navText: false, margin: 10, });
        setTimeout(function() {
            var $container = $(".blog-masonry");
            $container.masonry();
        }, 500);
        $('.site-main-menu').on("click", "a", function(e) {
            var $container = $(".blog-masonry");
            $container.masonry();
        });
        $('.lightbox').magnificPopup({
            type: 'image',
            removalDelay: 300,
            mainClass: 'mfp-fade',
            image: { titleSrc: 'title' },
            iframe: {
                markup: '<div class="mfp-iframe-scaler">' +
                    '<div class="mfp-close"></div>' +
                    '<iframe class="mfp-iframe" frameborder="0" allowfullscreen></iframe>' +
                    '<div class="mfp-title mfp-bottom-iframe-title"></div>' +
                    '</div>',
                patterns: { youtube: { index: 'youtube.com/', id: 'v=', src: '//www.youtube.com/embed/%id%?autoplay=1' }, vimeo: { index: 'vimeo.com/', id: '/', src: '//player.vimeo.com/video/%id%?autoplay=1' }, gmaps: { index: '//maps.google.', src: '%id%&output=embed' } },
                srcAction: 'iframe_src',
            },
            callbacks: { markupParse: function(template, values, item) { values.title = item.el.attr('title'); } },
        });
    });
    $(window).on('load', function() { $(".preloader").fadeOut("slow"); });
    $(window).on('resize', function() { mobileMenuHide(); });
    $('.site-main-menu').on("click", "a", function(e) { mobileMenuHide(); });
})(jQuery);