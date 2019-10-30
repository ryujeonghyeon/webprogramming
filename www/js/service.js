$(".textoverlay").mouseenter(function(){
    console.log("1111");
    $(".textoverlay").css({"visibility":"visible", "color":"blue","transform":"translateY(50%)"});
    
}).mouseleave(function(){
    console.log("1111");
    $(".textoverlay").css({"visibility":"visible", "color":"blue","transform":"translateY(0%)"});
})