// Mobile Nav

function openNav() {
    document.getElementById("mySidenav").style.width = "100%";
  }
  
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
  }
  
  // End Mobile Nav
  
  
  // Owl Carousel
  
  $(document).ready(function () {
    $(".owl-carousel").owlCarousel();
  });
  
  $(".owl-carousel").owlCarousel({
    loop: true,
    margin: 20,
    responsiveClass: true,
    responsive: {
      0: {
        items: 1,
        nav: true,
      },
      600: {
        items: 3,
        nav: true,
      },
      1000: {
        items: 3,
        nav: true,
        loop: false,
      },
    },
  });
  owl.on('mousewheel', '.owl-stage', function (e) {
      if (e.deltaY>0) {
          owl.trigger('next.owl');
      } else {
          owl.trigger('prev.owl');
      }
      e.preventDefault();
  });
  
  // End Owl Carousel
  
  
  