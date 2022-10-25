$(document).ready(function(){
    $(".slider").slick({
        dots: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        speed: 1000,
        responsive: [
            {
                breakpoint: 1260,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                }     
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }     
            }
        ]
    });
});