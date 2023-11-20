


$('#UX-skillsHeading').on("click", function(){
    $('#UX-skillsCollapse').slideToggle();
  });

$('#UI-skillsHeading').on("click", function(){
    $('#UI-skillsCollapse').slideToggle();
  });

$('#Interpersonal-skillsHeading').on("click", function(){
    $('#Interpersonal-skillsCollapse').slideToggle();
  });

$('#Cognitive-skillsHeading').on("click", function(){
    $('#Cognitive-skillsCollapse').slideToggle();
  });

$('#Communication-skillsHeading').on("click", function(){
    $('#Communication-skillsCollapse').slideToggle();
  });

$('#Design-skillsHeading').on("click", function(){
    $('#Design-skillsCollapse').slideToggle();
  });

$('#Web-skillsHeading').on("click", function(){
    $('#Web-skillsCollapse').slideToggle();
  });

$('#Data-skillsHeading').on("click", function(){
    $('#Data-skillsCollapse').slideToggle();
  });

  $('#SpecAnalytics-skillsHeading').on("click", function(){
    $('#SpecAnalytics-skillsCollapse').slideToggle();
  });

$('#Survey-skillsHeading').on("click", function(){
    $('#Survey-skillsCollapse').slideToggle();
  });

$('#Recruitment-skillsHeading').on("click", function(){
    $('#Recruitment-skillsCollapse').slideToggle();
  });

$('#navButton-AboutMe').on("click", function(){
    $('#Recruitment-skillsCollapse').slideToggle();
  });


// Hide/Show Skills under SubHeadings


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

$("#navButton-AboutMe").click(function() {
    $('html, body').animate({
        scrollTop: $("#heroImg").offset().top
    }, 2000);
});

//$('#UX-skillsHeading').hover(
    //function(){
        //$(this).text('UX -');
    //},
    //function(){
        //$(this).text('UX +');
    //}
//);