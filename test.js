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

// $('#btn1').dblclick(function(){
//   $('.para1').toggle();
// })

// $('#btn1').hover(function(){
//   $('.para1').toggle();
// })

// $(document).on('mousemove', function(e){
//   $('#coords').html('Coords: Y: '+e.clientY+ ' X: '+e.clientX );
// })

// DOM manipulation

// $('p.para1').css({color:'red',background:'#ccc'});
// // $('p.para2').addClass('myClass');
// // $('p.para2').removeClass('myClass');
// $('#btn1').click(function(){
//   $('p.para2').toggleClass('myClass');
// })
// $('#myDiv').text('Hello World');
$('ul').append('<li>Append List Item</li>')
$('ul').prepend('<li>Prepend List Item</li>')
$('.para1').appendTo('.para2');
$('.para1').prependTo('.para2');