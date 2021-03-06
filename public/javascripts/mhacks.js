//page starts with listener disabled
$('#prog').toggle()

var foreheadGirth
var calculatingGirth = false

//array of keys with assigned values used for calculating distance between keys
var key_store = {
  '`': {
    position: 0,
    pressed: false
  },
  '1': {
    position: 0.6,
    pressed: false
  },
  '2': {
    position: 1.6,
    pressed: false
  },
  '3': {
    position: 2.6,
    pressed: false
  },
  '4': {
    position: 3.6,
    pressed: false
  },
  '5': {
    position: 4.6,
    pressed: false
  },
  '6': {
    position: 5.6,
    pressed: false
  },
  '7': {
    position: 6.6,
    pressed: false
  },
  '8': {
    position: 7.6,
    pressed: false
  },
  '9': {
    position: 8.6,
    pressed: false
  },
  '0': {
    position: 9.6,
    pressed: false
  },
  '-': {
    position: 10.6,
    pressed: false
  },
  '=': {
    position: 11.6,
    pressed: false
  },
  'tab': {
    position: 0,
    pressed: false
  },
  'q': {
    position: 1,
    pressed: false
  },
  'w': {
    position: 2,
    pressed: false
  },
  'e': {
    position: 3,
    pressed: false
  },
  'r': {
    position: 4,
    pressed: false
  },
  't': {
    position: 5,
    pressed: false
  },
  'y': {
    position: 6,
    pressed: false
  },
  'u': {
    position: 7,
    pressed: false
  },
  'i': {
    position: 8,
    pressed: false
  },
  'o': {
    position: 9,
    pressed: false
  },
  'p': {
    position: 10,
    pressed: false
  },
  '[': {
    position: 11,
    pressed: false
  },
  ']': {
    position: 12,
    pressed: false
  },
  '\\': {
    position: 13,
    pressed: false
  },
  'caps_lock': {
    position: 0,
    pressed: false
  },
  'a': {
    position: 1.3,
    pressed: false
  },
  's': {
    position: 2.3,
    pressed: false
  },
  'd': {
    position: 3.3,
    pressed: false
  },
  'f': {
    position: 4.3,
    pressed: false
  },
  'g': {
    position: 5.3,
    pressed: false
  },
  'h': {
    position: 6.3,
    pressed: false
  },
  'j': {
    position: 7.3,
    pressed: false
  },
  'k': {
    position: 8.3,
    pressed: false
  },
  'l': {
    position: 9.3,
    pressed: false
  },
  ';': {
    position: 10.3,
    pressed: false
  },
  "'": {
    position: 11.3,
    pressed: false,
  },
  'shift': {
    position: 0,
    pressed: false
  },
  'z': {
    position: 1.7,
    pressed: false
  },
  'x': {
    position: 2.7,
    pressed: false
  },
  'c': {
    position: 3.7,
    pressed: false
  },
  'v': {
    position: 4.7,
    pressed: false
  },
  'b': {
    position: 5.7,
    pressed: false
  },
  'n': {
    position: 6.7,
    pressed: false
  },
  'm': {
    position: 7.7,
    pressed: false
  },
  ',': {
    position: 8.7,
    pressed: false
  },
  '.': {
    position: 9.7,
    pressed: false
  },
  '/': {
    position: 10.7,
    pressed: false
  },
}

$('#startbutton').click(function() {
  // $('#hatlink').empty();
  calculatingGirth = true // set girth flag for animate
  animate(1)
  $('#startbutton').attr('disabled','disabled').text('Measuring in progress...') // startbutton is disabled while countdown begins
  $('#instructions').text("Smash the front of your face on the keyboard.")       // on-screen instructions are given

  //timer beings
  $('#prog').slideDown()
  moveProgressBar(0)     // start progress animation bar at 0%

})


// When any key gets pressed, "pressed" is set to true
$('*').keypress(function(e) {
  var key = String.fromCharCode(e.charCode).toLowerCase()
  key_store[key]['pressed'] = true
})

function calculateGirth() {
  //convert keyboard distance to distance in centimeters
  var CONVERSIONFACTOR = 1.875;
  var foreheadCentimeters = foreheadGirth * CONVERSIONFACTOR;
  var circumference = foreheadCentimeters * 4;
  var size = calculateSize(circumference);

  if (size.fitted != null){
    $('#instructions').text('Your fitted hat size is: ' + size.fitted + '\n' + 'Your easyFit size is ' +  size.easyFit);
    // $('#hatlink').append( "<h3><a href='" + size.link + "'>Buy one here</a></h3>");
  }else{
    $('#instructions').text('Your fitted hat size could not be accurately read, please try again.');
    // $('#hatlink').empty();
  }

  $('#startbutton').removeAttr('disabled','disabled').text('Measure Again?')
  calculatingGirth = false
}

/*
 * Give life to the man and his keyboard
 */
function animate(dir) {
  $('#face').transition({ y: 35 + 'px' })
    .transition({ rotate: dir * 50 })
    .transition({ x: dir * 60 + 'px', complete: function() {
      if (calculatingGirth)
        animate(dir * -1)
    }
  })
}


function getMinMax() {
  var max, min

  for (key in key_store) {
    if (key_store[key]['pressed']) {
      if (typeof min === 'undefined' || (key_store[key]['position'] < min))
        min = key_store[key]['position']
      if (typeof max === 'undefined' || (key_store[key]['position'] > max))
        max = key_store[key]['position']
    }
    key_store[key]['pressed'] = false
  }
  foreheadGirth = max - min
  calculateGirth()
}


function moveProgressBar(i) {
  setTimeout(function() {
    $('#prog .meter').attr('style', 'width: ' + i + '%')
    if (i < 100)
      moveProgressBar(i + 0.25)
    else
      getMinMax()
  }, 12.5)
}
