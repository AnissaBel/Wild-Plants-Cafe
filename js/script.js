$(document).ready(function(){
       
    $('#myModal').bind('mouseenter touchstart', function(e) {
        var current = $(window).scrollTop();
        $(window).scroll(function(event) {
            $(window).scrollTop(current);
        });
    });
    $('#myModal').bind('mouseleave touchend', function(e) {
        $(window).off('scroll');
    });


    $("#top, #logobig").on("click", function(){
           
        $('html, body').animate({
            scrollTop: $("body").offset().top
        }, 800);
    })

  // Add smooth scrolling to all links
  $("a").on('click', function(event) {
    
    // Make sure this.hash has a value before overriding default behavior
    if (this.hash !== "") {
        // Prevent default anchor click behavior
        event.preventDefault();

        
        // Store hash
        
        var hash = this.hash;

        // Using jQuery's animate() method to add smooth page scroll
        // The optional number (800) specifies the number of milliseconds it takes to scroll to the specified area
        $('html, body').animate({
            scrollTop: $(hash).offset().top
        }, 800, function(){
    
            // Add hash (#) to URL when done scrolling (default click behavior)
            window.location.hash = hash;
        });
        
    } // End if
  });
});

function myFunction(x) {
    x.classList.toggle("change");
}


/* ---------------SCROLL TO REVEAL---------------------------*/


  /* Every time the window is scrolled ... */
$(window).scroll( function(){

/* Check the location of each desired element */
$('.fade').each( function(i){
  
  var bottom_of_object = $(this).position().top + $(this).outerHeight() - 50;
  var bottom_of_window = $(window).scrollTop() + $(window).height();
  
  /* If the object is completely visible in the window, fade it it */
  if( bottom_of_window >= bottom_of_object ){
      $(this).animate({'opacity':'1'},800);
  }
});

});

/* ---------------FADE IN GAUCHE ICONES COMPETENCES---------------------------*/


  //Faire apparaitre le bouton back to top quand on arrive en bas de la page


  //--------------------------------MODAL--------------------------------

  $(".picture").click(function(){
      
          
          // Get the modal
          var modal = $("#myModal");


          // Get the image and insert it inside the modal - use its "alt" text as a caption
          var img = $(this).find("img");
          var modalImg = $("#img01");
          var captionText = $("#caption");

          
          modal.delay(900).fadeIn(1000);
          modalImg.attr("src", img.attr("src"));
          captionText.html(img.attr("alt"));

        

          // When the user clicks on <span> (x), close the modal
          $(".close").click(function() { 
              $(this).parent("#myModal").fadeOut()
          })

          
      
      
    })


  //----------Filtres sur la galerie------------//

              $("#filters a").on("click", function(e){
                  e.preventDefault()
                  
                  let filter = $(this).data("filter")
              
                  $(".picture").hide()
                  $("."+filter).addClass("picture-animee").show()
              })
          
          

  //----------NAV BURGER ----------------------//

  var nav = document.getElementById("topNav");
  var main = document.getElementById("main");
  var menu = document.getElementsByClassName("menuitems");
  var close = document.getElementById("closebtn");


  //default to measure if/else from
  nav.style.height = "60px";
  main.style.marginTop = "60px";
  for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};

  close.addEventListener("click", function(){
      var menuIcon = close.children;
      for (i = 0; i < menuIcon.length; i++){
          menuIcon[i].classList.toggle("active");
      }   
  });

  function navToggle() {	
      //to close
      if (nav.style.height <= "280px") {
          nav.style.height = "60px";
          main.style.marginTop = "60px";
      
          var i = 0;
          for (i = 0; i < menu.length; i++){
              menu[i].style.opacity="0.0";
              menu[i].style.marginTop="100px";
          };
          document.body.style.backgroundColor = "rgba(0,0,0,)";
      
      } 
      //to open
      else if (nav.style.height <= "60px") {
          nav.style.height = "280px";
          main.style.marginTop = "0px";
          var i = 0;
          for (i = 0; i < menu.length; i++){
              menu[i].style.opacity="1.0";
              menu[i].style.marginTop="0px";
          };
          document.body.style.backgroundColor = "rgba(0,0,0,)";
      
      }

      $(".menuitems").on("click", function(){
          $("#closebtn span").removeClass("active")
          

      });

  };
