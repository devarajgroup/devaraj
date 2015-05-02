$('.slick').slick({
  autoplay: true,
  autoplaySpeed: 5000,
  pauseOnHover: false,
  pauseOnDotsHover: false,
  dots: true,
  arrows: false,
  centerMode: true,
  slidesToShow: 3,
  variableWidth: true,
  responsive: [
    {
      breakpoint: 1024,
      settings: {
        slidesToShow: 3,
        slidesToScroll: 3,
        infinite: true,
        dots: true
      }
    },
    {
      breakpoint: 900,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1
      }
    }
  ]
})
