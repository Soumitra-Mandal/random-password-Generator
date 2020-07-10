$(document).ready(function(){
  $('[data-toggle="tooltip"]').tooltip();
});

list = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz1234567890!@#$%^&*()-_+=?><,.;{/[]}`~:'

length = 10;



$("#btn").on('click',() =>{
  var random = '';
  while(random.length<=length){
    random = random + list[Math.floor(Math.random() * 89)];
  }
  $('#txt').text(random);
  $('img').attr('data-original-title','copy to clipboard').tooltip('show');

});

$('img').on('click',() => {
  var copyText =$('#txt');
  copyText.select();
  document.execCommand("copy");
$('img').attr('data-original-title','copied!').tooltip('show');
});
