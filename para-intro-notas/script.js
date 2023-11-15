$(window).load(function() {
  
  $("h1").animate({ 
    top:"20%", opacity:"1" 
   },1100,function() {
		
    $(".init").animate({ 
      width:"60px" 
     }, 600, function() {
			
       $("p").fadeIn( 
         600, function () {
				
         $("#hover-me").fadeIn( 
           700, function() {
				});
		  
       });
	  
     });
	
   });

});