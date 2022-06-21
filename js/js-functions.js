$(document).ready(function(){
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
  
  //Faire apparaitre le bouton back to top quand on arrive en bas de la page
  
  
  //--------------------------------MODAL--------------------------------
  
  // Get the modal
  var modal = document.getElementById("myModal");
  
  // Get the image and insert it inside the modal - use its "alt" text as a caption
  var img = document.getElementById("myImg");
  var modalImg = document.getElementById("img01");
  var captionText = document.getElementById("caption");
  img.onclick = function(){
    modal.style.display = "block";
    modalImg.src = this.src;
    captionText.innerHTML = this.alt;
  }
  
  // Get the <span> element that closes the modal
  var span = document.getElementsByClassName("close")[0];
  
  // When the user clicks on <span> (x), close the modal
  span.onclick = function() { 
    modal.style.display = "none";
  }


// Get the modal
  $(document).ready(function){
    $("#myImg").click()
    $("#myModal").open("open")

  }

  
  //----------Filtres sur la galerie------------//
  
              $("#work a").on("click", function(e){
                  e.preventDefault()
                  
                  let filter = $(this).data("filter")
                
                  $(".picture").hide()
                  $("."+filter).addClass("picture-animee").show()
              })
          
              $("details").click(function(){
                  $("details[open]").removeAttr("open")
                  $(this).attr("open")
              })
  
  //----------NAV BURGER ----------------------//
  
  var nav = document.getElementById("topNav");
  var main = document.getElementById("main");
  var menu = document.getElementsByClassName("menuitems");
  var close = document.getElementById("closebtn");
  
  //default to measure if/else from
  nav.style.height = "50px";
  main.style.marginTop = "50px";
  for (i = 0; i < menu.length; i++){menu[i].style.marginTop="100px";};
  
  close.addEventListener("click", function(){
    var menuIcon = close.children;
    for (i = 0; i < menuIcon.length; i++){
    menuIcon[i].classList.toggle("active");
    }   
  });
  
  function navToggle() {	
      //to close
      if (nav.style.height <= "350px") {
      nav.style.height = "50px";
      main.style.marginTop = "50px";
      
          var i = 0;
          for (i = 0; i < menu.length; i++){
      menu[i].style.opacity="0.0";
      menu[i].style.marginTop="100px";
      };
          document.body.style.backgroundColor = "rgba(0,0,0,)";
      
      } 
      //to open
      else if (nav.style.height <= "50px") {
      nav.style.height = "350px";
      main.style.marginTop = "350px";
          var i = 0;
          for (i = 0; i < menu.length; i++){
      menu[i].style.opacity="1.0";
      menu[i].style.marginTop="0px";
      };
          document.body.style.backgroundColor = "rgba(0,0,0,)";
      
      }
  
  };