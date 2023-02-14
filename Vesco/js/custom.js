/*===============================================
                    SERVICES
==============================================*/
$(function () {
  //Abbiamo inizializzato il plug-in WoW
  new WOW().init();
});

/*===============================================
                    WORK
==============================================*/
$(function () {
  //Inizialiazziamo il plug-in Magnific Popup
  $("#work").magnificPopup({
    delegate: "a", //Cliccando sull'immagine ci fa aprire il pop-up
    type: "image",
    gallery: {
      //Abilita la galleria una volta che abbiamo aperto l'immagine
      enabled: true,
    },
  });
});

/*===============================================
                    TEAM
==============================================*/
$(function () {
  //Inizialiazziamo il plug-in Owl Carousel
  $("#team-members").owlCarousel({
    items: 3,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    //Impostazione responsive per il carosello
    responsive: {
      //Breakpoint (da 0px in su)
      0: {
        items: 1,
      },
      //Breakpoint (da 480px in su)
      480: {
        items: 2,
      },
      //Breakpoint (da 768px in su)
      768: {
        items: 3,
      },
    },
  });
});

/*===============================================
                    TESTIMONIALS
==============================================*/
$(function () {
  //Inizialiazziamo il plug-in Owl Carousel
  $("#customers-testimonials").owlCarousel({
    items: 1,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
  });
});

/*===============================================
                    STATS
==============================================*/
$(function () {
  //Inizialiazziamo il plugin Counter-UP
  $(".counter").counterUp({
    delay: 10,
    time: 2000,
  });
});

/*===============================================
                    CLIENTS
==============================================*/
$(function () {
  //Inizialiazziamo il plug-in Owl Carousel
  $("#clients-list").owlCarousel({
    items: 6,
    autoplay: true,
    smartSpeed: 700,
    loop: true,
    autoplayHoverPause: true,
    //Impostazione responsive per il carosello
    responsive: {
      //Breakpoint (da 0px in su)
      0: {
        items: 1,
      },
      //Breakpoint (da 480px in su)
      480: {
        items: 3,
      },
      //Breakpoint (da 768px in su)
      768: {
        items: 5,
      },
      //Breakpoint (da 992px in su)
      992: {
        items: 6,
      },
    },
  });
});

/*===============================================
                    NAVIGATION
==============================================*/
$(function () {
  //Andiamo a mostrare o nascondere il BG della navbar in ATF
  $(window).scroll(function () {
    if ($(this).scrollTop() < 50) {
      //Hide navigation bar
      $("nav").removeClass("vesco-top-nav");
      $("#back-to-top").fadeOut();
    } else {
      //Show navigation bar
      $("nav").addClass("vesco-top-nav");
      $("#back-to-top").fadeIn();
    }
  });
});

//Smooth scrolling
$(function () {
  //Rendiamo più smooth l'animazione di scorrimento cliccando sui link della nav
  $("a.smooth-scroll").click(function (event) {
    //Previene l'apertura dei link una volta cliccati
    event.preventDefault();
    //Prende/ritorna l'id come #about, #work (se il link viene cliccato)
    var section = $(this).attr("href");
    //Selezioniamo i tag body e html per inserire l'animazione
    $("html, body").animate(
      {
        //Va a richiamare la sezione che viene cliccata, portando all'inizio della stessa
        scrollTop: $(section).offset().top - 64,
        //Il 1250 va ad impostare la durata dell'animazione (in millisecondi)
      },
      1250,
      "easeInOutExpo"
    );
  });
});

// Chiusura del menu al click degli elementi al suo interno
$(function () {
  $(".navbar-collapse ul li a").on("click touch", function () {
    $(".navbar-toggle").click();
  });
});
