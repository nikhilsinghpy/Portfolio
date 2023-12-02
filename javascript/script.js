function togglePopup()
{
    document.getElementById("popup-1").classList.toggle("active");
    
}
window.onscroll =() =>{
let header = document.querySelector('.header');
header.classList.toggle('sticky',window.scrollY >100)


$('.navbar').removeClass('active');
  $('#menu_icon').removeClass('bx-x');
}

$(document).ready(function() {
$('#menu_icon').click(function() {
  $(this).toggleClass('bx-x');
  $('.navbar').toggleClass('active');
});
});

document.getElementById("switch").addEventListener("change", function() {
  let darkmode = document.getElementById("darkmodeswitch");
  document.body.classList.toggle("darktheme")
});


window.onload = () =>{
  let currentdate = new Date();
  let currenttime = currentdate.getHours();
  console.log(currenttime)
  if(currenttime > 19){
      document.body.classList.toggle("darktheme")
  }
  else{
    console.log("its too early for darkmodee");
  }
}

