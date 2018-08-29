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
// $('ul').append('<li>Append List Item</li>')
// $('ul').prepend('<li>Prepend List Item</li>')
// $('.para1').appendTo('.para2');
// $('.para1').prependTo('.para2');
// $('ul').before('<h4>Hello</h4>')
// $('ul').after('<h4>World</h4>')
// $('ul').empty();
// $('ul').detach();
// $('a').attr('target', '_blank')


// $('#newItem').keyup(function(e){
//   var code = e.which;
//   if(code === 13){
//     e.preventDefault();
//     $('ul').append('<li>' +e.target.value +'</li>');

//   }
// })

// var myArr = ['Brad', 'Kelley', 'Nate', 'Jose'];

// $.each(myArr, function(i, val){
//   $('#users').append('<li>'+val+'</li')
// })

// var newArr = $('ul#list li').toArray();
// $.each(newArr, function(i, val){
//   console.log(val.innerHTML);
// })

// Effect and Animation

$('#btnFadeOut').click(function(){
  $('#box').fadeOut(2000, function(){
    $('#btnFadeOut').text('Its Gone')
  });
})

$('#btnFadeIn').click(function(){
  $('#box').fadeIn();
})

$('#btnFadeTog').click(function(){
  $('#box').fadeToggle();
})

$('#btnSlideUp').click(function(){
  $('#box').slideUp(2000);
})

$('#btnSlideDown').click(function(){
  $('#box').slideDown(2000);
})

$('#btnSlideTog').click(function(){
  $('#box').slideToggle(2000);
})

$('#btnStop').click(function(){
  $('#box').stop();
})


$('#moveRight').click(function(){
  $('#box2').animate({
    left: 500
  });
})

$('#moveLeft').click(function(){
  $('#box2').animate({
    left: 0
  });
})

$('#moveAround').click(function(){
  var box = $('#box2');
  box.animate({
    left: 300
  })
  box.animate({
    top: 300
  })
  box.animate({
    left: 0,
    top: 300
  })
  box.animate({
    left: 0,
    top: 0
  })
})