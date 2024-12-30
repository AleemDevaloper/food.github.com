$('dosument').ready (function (){

    
        $('.c-slider').slick({
            slidesToShow: 4,
            slidesToScroll: 1,
            arrows: false,
            dots:false,
            responsive: [
                {
                  breakpoint: 1400,
                  settings: {
                    slidesToShow: 3,
                    slidesToScroll: 4,
                    infinite: true,
                    dots: true
                  }
                },
                {
                  breakpoint: 992,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
                {
                  breakpoint: 800,
                  settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                  }
                },
               
                {
                  breakpoint: 769,
                  settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1
                  }
                }
            ]
        });
   



    const toggleButton = document.getElementById('read');
    const myParagraph = document.getElementById('n-hide');
    
   
    toggleButton.addEventListener('click', () => {
        if (myParagraph.style.display === 'none') {
            myParagraph.style.display = 'block';
            
        } else {
            myParagraph.style.display = 'none';
            
        }
    });
       
    

    
})
