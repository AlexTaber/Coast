$(document).ready(function(){
  $('.info-icon').on('click', toggleInfo)
})

function toggleInfo() {
  $('.info').slideToggle();
}