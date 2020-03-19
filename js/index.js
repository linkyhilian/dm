$(document).ready(function(){
  $(".navbar-toggler, .overlay, #main_navbar .icon").on("click",function (){
    $(".mobileMenu, .overlay").toggleClass("open");
  });
});

$(document).ready(function(){
  $(".navbar-toggler, .overlay, #main_navbar .icon").on("click",function (){
    $("nav div.mobileMenu").toggleClass("bg-white");
    
  });
});
