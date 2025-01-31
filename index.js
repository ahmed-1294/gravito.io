// $('.slick-carosel').slick({
  //   dots: false,
  //   autoplay: true,
  //   infinite: false,
  //   speed: 300,
  //   slidesToShow: 1,
  //   slidesToScroll: 5,
  //   responsive: [
  //     {
  //       breakpoint: 1024,
  //       settings: {
  //         slidesToShow: 3,
  //         slidesToScroll: 3,
  //         infinite: true,
  //         dots: true
  //       }
  //     },
  //     {
  //       breakpoint: 600,
  //       settings: {
  //         slidesToShow: 2,
  //         slidesToScroll: 2
  //       }
  //     },
  //     {
  //       breakpoint: 480,
  //       settings: {
  //         slidesToShow: 1,
  //         slidesToScroll: 1
  //       }
  //     }
      
  //   ]
  // });



  // $('.').slick({
  //   slidesToShow: 5,
  //   slidesToScroll: 1,
  //   autoplay: false,
  //   autoplaySpeed: 1000,
  //   dots:true,
  // });


  // menu

  const menubtn = document.getElementById("hamburger");
  const menulist = document.getElementById("menu");
  
  let flag = true;
  
  menubtn.addEventListener("click", () => {
    console.log("clicked");
  
    menulist.style.display="block"
  
    if (flag) {
      menulist.style.display = "block";
      flag = false;
    } else {
      menulist.style.display = "none";
      flag = true;
    }
  
    
  });