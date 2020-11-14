$(function(){

  $('.zar-sidebar-kiri, .zar-sidebar-kanan').css({ height: $(window).innerHeight() + 'px' });

  $(window).on('resize', function(){
    $('.zar-sidebar-kiri, .zar-sidebar-kanan').css({ height: $(window).innerHeight() + 'px' });
  });

});

document.onreadystatechange = function () {
if (document.readyState === "complete") {
console.log(document.readyState);
document.getElementById("PreLoaderBar").style.display = "none";
}
}
