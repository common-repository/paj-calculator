/* eslint-disable no-eval */
console.log('no-eval')
/* eslint-disable no-eval */

jQuery(document).ready(function () {
  var displayBox = document.getElementById('display')
  var hasEvaluated = false

  // CHECK IF 0 IS PRESENT. IF IT IS, OVERRIDE IT, ELSE APPEND VALUE TO DISPLAY
  function clickNumbers (val) {
    if (displayBox.innerHTML === '0' || (hasEvaluated === true && !isNaN(displayBox.innerHTML))) {
      displayBox.innerHTML = val
    } else {
      displayBox.innerHTML += val
    }
    hasEvaluated = false
  }

  // PLUS MINUS
  jQuery('#plus_minus').click(function () {
    if (eval(displayBox.innerHTML) > 0) {
      displayBox.innerHTML = '-' + displayBox.innerHTML
    } else {
      displayBox.innerHTML = displayBox.innerHTML.replace('-', '')
    }
  })

  // ON CLICK ON NUMBERS
  jQuery('#clear').click(function () {
    displayBox.innerHTML = '0'
    jQuery('#display').css('font-size', '80px')
    jQuery('#display').css('margin-top', '110px')
    jQuery('button').prop('disabled', false)
  })
  jQuery('#one').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(1)
  })
  jQuery('#two').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(2)
  })
  jQuery('#three').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(3)
  })
  jQuery('#four').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(4)
  })
  jQuery('#five').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(5)
  })
  jQuery('#six').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(6)
  })
  jQuery('#seven').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(7)
  })
  jQuery('#eight').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(8)
  })
  jQuery('#nine').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(9)
  })
  jQuery('#zero').click(function () {
    checkLength(displayBox.innerHTML)
    clickNumbers(0)
  })
  jQuery('#decimal').click(function () {
    if (displayBox.innerHTML.indexOf('.') === -1 ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('+') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('-') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('×') !== -1) ||
      (displayBox.innerHTML.indexOf('.') !== -1 && displayBox.innerHTML.indexOf('÷') !== -1)) {
      clickNumbers('.')
    }
  })

  // OPERATORS
  jQuery('#add').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '+'
  })
  jQuery('#subtract').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '-'
  })
  jQuery('#multiply').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '×'
  })
  jQuery('#divide').click(function () {
    evaluate()
    checkLength(displayBox.innerHTML)
    displayBox.innerHTML += '÷'
  })
  jQuery('#square').click(function () {
    var num = Number(displayBox.innerHTML)
    num = num * num
    checkLength(num)
    displayBox.innerHTML = num
  })
  jQuery('#sqrt').click(function () {
    var num = parseFloat(displayBox.innerHTML)
    num = Math.sqrt(num)
    displayBox.innerHTML = Number(num.toFixed(5))
  })
  jQuery('#equals').click(function () {
    evaluate()
    hasEvaluated = true
  })

  // EVAL FUNCTION
  function evaluate () {
    displayBox.innerHTML = displayBox.innerHTML.replace(',', '')
    displayBox.innerHTML = displayBox.innerHTML.replace('×', '*')
    displayBox.innerHTML = displayBox.innerHTML.replace('÷', '/')
    if (displayBox.innerHTML.indexOf('/0') !== -1) {
      jQuery('#display').css('font-size', '70px')
      jQuery('#display').css('margin-top', '124px')
      jQuery('button').prop('disabled', false)
      jQuery('.clear').attr('disabled', false)
      displayBox.innerHTML = 'Division by 0 is undefined!' 
    }
    var evaluate = eval(displayBox.innerHTML)
    if (evaluate.toString().indexOf('.') !== -1) {
      evaluate = evaluate.toFixed(5)
    }
    checkLength(evaluate)
    displayBox.innerHTML = evaluate
  }

  // CHECK FOR LENGTH & DISABLING BUTTONS
  function checkLength (num) {
    if (num.toString().length > 7 && num.toString().length < 14) {
      jQuery('#display').css('font-size', '35px')
      jQuery('#display').css('margin-top', '174px')
    } else if (num.toString().length > 16) {
      num = 'Infinity'
      jQuery('button').prop('disabled', true)
      jQuery('.clear').attr('disabled', false)
    }
  }

  // TRIM IF NECESSARY
  function trimIfNecessary () {                                                 file = 'standard ignore' // eslint-disable-line
    var length = displayBox.innerHTML.length
    if (length > 7 && length < 14) {
      jQuery('#display').css('font-size', '35px')
      jQuery('#display').css('margin-top', '174px')
    } else if (length > 14) {
      displayBox.innerHTML = 'Infinity'
      jQuery('button').prop('disabled', true)
      jQuery('.clear').attr('disabled', false)
    }
  }
})
