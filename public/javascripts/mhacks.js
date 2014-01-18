

//page starts with listener disabled
keypress.stop_listening()

var foreheadGirth

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

  //keypress starts listening for keys when startbutton is pressed
  keypress.listen();
  //startbutton is disabled while countdown begins
  $('#startbutton').attr('disabled','disabled').text('HOLD ON');
  //on-screen instructions are given
  $('#instructions').text("Smash the front of your face on the keyboard.")

  //countdown from 10 to allow user to know he needs to press his face.
  var k = 8
  var interval = setInterval(function() {
    $('#countdown').text("You have " + k + " seconds")
    console.log(k--)
  }, 1000)
  //timer beings
  setTimeout(function() {
  var max, min
  for (i in key_store) {
    if (key_store[i]['pressed']) {
      console.log('pressed', i)
      if (typeof min === 'undefined' || (key_store[i]['position'] < min))
        min = key_store[i]['position']
      if (typeof max === 'undefined' || (key_store[i]['position'] > max))
        max = key_store[i]['position']
      }
      key_store[i]['pressed'] = false
    }
    if (typeof foreheadGirth === "undefined") {
      foreheadGirth = max - min
      calculateGirth()
    }

    clearInterval(interval)
    //start button is enabled after countdown ends
    $('#startbutton').removeAttr('disabled').text('Start measuring"')
  }, 10000);

  //used for tesing keypress recognition
  keypress.sequence_combo("up up down down left right left right b a enter", function() {
    document.body.innerText = 'konami code'
  })
})

//used for testing keypress recognition
keypress.combo("shift s", function() {
  document.body.innerText = 'shift s'
  console.log("You pressed shift and s")
})


// When any key gets pressed, "pressed" is set to true
$('*').keypress(function(e) {
  var key = String.fromCharCode(e.charCode)
  key_store[key]['pressed'] = true
})

function calculateGirth() {
  //convert keyboard distance to distance in centimeters
  var CONVERSIONFACTOR = 1.875;
  var foreheadCentimeters = foreheadGirth * CONVERSIONFACTOR
  var circumference = foreheadCentimeters * 4

  $('#instructions').text('Your head circumference is: ' + circumference +
    ' centimeters');
}
