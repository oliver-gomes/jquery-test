//Selectors

// $('h1#heading1').hide();
// $('p span').css('color', 'red');
// $('ul#list li:first').css('color', 'BLUEVIOLET');
// $('ul#list li:last').css('color', 'DEEPPINK');
// $('ul#list li:even').css('background-color', 'MEDIUMAQUAMARINE');
// $('ul#list li:odd').css('background-color', 'BISQUE');
// $('ul#list li:nth-child(3n').css('list-style', 'none');
// $(':text').hide();
// $('[href]').css('color', 'red')
// $('[href="http://yahoo.com"]').css('color', 'green');
// $('*').hide();

//Events

// $('#btn1').click(function(){
//   alert('Button Clicked!');
// })
// or
// $('#btn1').on('click', function(){
//   $('.para1').toggle();
// })
// $('#btn2').on('click', function(){
//   $('.para1').show();
// })

$('#btn1').dblclick(function(){
  $('.para1').toggle();
})