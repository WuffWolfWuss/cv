$(window).scroll(function() {
    var hT = $('.top-container').offset().top,
    hH = $('.top-container').outerHeight(),
    wH = $(window).height(),
    wS = $(this).scrollTop();
    if(wS>hH){
      $("body").addClass("fixed");
    } else {
      $("body").removeClass("fixed");
    }
    // console.log("offset|height -container: "+ hT + " | " + hH);
    // console.log("window: " + wH +  "|" + wS);
});

$("li a").click(function(e){
  //console.log(e.target.id);
  $("li a").removeClass("active");
  $("#"+ e.target.id).addClass("active");
});

// hT = wH = screen height
//hH = container height
//wS = position of Scoll

$(window).scroll(function(){
  var current;
  if($(window).scrollTop() > $(window).height()){
    $(".navli").each(function(key, value){
      if($(window).scrollTop() >= value.offsetTop - 50 &&
                $(window).scrollTop() + 50 < (value.offsetTop + value.offsetHeight)){
        current = value.id;
        //console.log(current);
      }
    });

    $(".nav-link").each(function(key, value){
      value.classList.remove("active");
      if(value.classList.contains(current) && !value.classList.contains("active")){
        value.classList.toggle("active");
      }
    });
  } //end of main if
});
