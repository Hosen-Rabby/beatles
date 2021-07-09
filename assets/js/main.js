// (function ($) {
// 	"use strict";

//     jQuery(document).ready(function($){


//         $(".embed-responsive iframe").addClass("embed-responsive-item");
//         $(".carousel-inner .item:first-child").addClass("active");
        
//         $('[data-toggle="tooltip"]').tooltip();


//         $(".new-slider").owlCarousel({
//         	    loop:true,
// 			    margin:10,
// 			    nav:true,
// 			    items:1,
//                 autoPlay:true,
//                 navText:['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
//                 dots: true,
//         });

        


//     });


//     jQuery(window).load(function(){

        
//     });


// }(jQuery));	



$(document).ready(function(){
  $("#hide").click(function(){
    $(".nav_items").toggle(
        // margin-left:100px;
        );
  });
  // $("#hide").click(function(){
  //   $("#nav").show();
  // });
});