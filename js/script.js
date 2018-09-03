// focus on the name input
 $( "#name" ).focus();
 // hide the other job text area
 $("#other-title").hide();
 // hide the shirt color when loaded
 $("#color option").hide()
 $("#colors-js-puns").hide()


// show the input feild when click "other"
$('#title').on('change', function() {
  if ($(this).val() === "other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
})

// When a new theme is selected from the "Design" menu, the "Color" field and drop down menu is updated.
$('#design').on('change', function() {
  if ($(this).val() === "js puns") {
    // “Color” drop down menu is hidden until a T-Shirt design is selected.
    $("#colors-js-puns").show()
    $("#color option").show()
    // hide unrelated color
    $("#color option[value='tomato'], #color option[value='steelblue'], #color option[value='dimgrey']").hide();
  } else if ($(this).val() === "heart js") {
    $("#colors-js-puns").show()
    $("#color option").show()
    $("#color option[value='cornflowerblue'], #color option[value='darkslategrey'], #color option[value='gold']").hide();
  } else {
    $("#colors-js-puns").hide()
  }
})


// append "Total:" and hide it
$(".activities").append("<div id=totalDiv>Total:$<span id=totalPayment>x</span></div>");
$("#totalDiv").hide();

// set the class name and value to labels and inputs for function creation
$(".activities label:eq(0)").addClass("label")
$(".activities label:eq(1)").addClass("tu9a12p label")
$(".activities label:eq(2)").addClass("tu1p4p label")
$(".activities label:eq(3)").addClass("tu9a12p label")
$(".activities label:eq(4)").addClass("tu1p4p label")
$(".activities label:eq(5)").addClass("we9a12p label")
$(".activities label:eq(6)").addClass("we1p4p label")
$(".activities label:eq(0) input").val(0)
$(".activities label:eq(1) input").val(1)
$(".activities label:eq(2) input").val(2)
$(".activities label:eq(3) input").val(3)
$(".activities label:eq(4) input").val(4)
$(".activities label:eq(5) input").val(5)
$(".activities label:eq(6) input").val(6)

var x = 0
//function to calculate and show the total pament
$(".activities input:checkbox").change(function(){

  if (this.checked) {
    //extract the last three strings
    x += parseInt($(this).parent().text().slice(-3));
  } else {
    x -= parseInt($(this).parent().text().slice(-3));
  }
  if (x === 0) {
    $("#totalDiv").hide();
  } else {
    $("#totalPayment").text(x)
    $("#totalDiv").show();
  }

  // loop through the labels, if the class name is the same as "this", but the value is not, diable the checkbox,
  // class name is the short version of class time
  for (var i = 0; i < $(".label").length; i ++) {

    let input = $(".label input");
    let label = $(".label")

    if (this.checked) {

      if ($(this).val() !== input[i].value && $(this).parent().prop("class") === label[i].className) {
        input[i].disabled = true;
      }

    } else {

      if ($(this).val() !== input[i].value && $(this).parent().prop("class") === label[i].className) {
        input[i].disabled = false;
      }
    }
  }
})

//credit card option is the default selected option
$("#payment option[value='credit card']").attr('selected', 'selected')
$("#payment option[value='select_method']").attr("disabled", "true")
//hide the other option when page loaded
$(".paypal").hide()
$(".bitcoin").hide()
//hide and show element based on selection
$('#payment').on('change', function() {
  if ($(this).val() === "paypal") {
    $(".paypal").show();
    $(".credit-card").hide();
    $(".bitcoin").hide();
  } else if ($(this).val() === "bitcoin") {
    $(".paypal").hide();
    $(".credit-card").hide();
    $(".bitcoin").show();
  } else if ($(this).val() === "credit card") {
    $(".paypal").hide();
    $(".credit-card").show();
    $(".bitcoin").hide();
  }
})

// set variables for form validation
var form  = document.getElementsByTagName('form')[0];
let inputText = document.getElementById('name');
let textLabel = document.getElementById('textLabel');
let email = document.getElementById('mail');
let emailLabel = document.getElementById('emailLabel');
var checkboxes = $("input[type='checkbox']")
$("label input[type='checkbox'][name='all']").parent().prepend("<label id='checkboxLabel'></label>")
let checkboxLabel = document.getElementById('checkboxLabel');
let ccNum = document.getElementById("cc-num")
let ccnumLabel = document.getElementById('ccnumlabel')
let zipCode = document.getElementById('zip');
let zipcodeLabel = document.getElementById('ziplabel')
let cvv = document.getElementById('cvv');
let cvvLabel = document.getElementById('ccvlabel')

email.addEventListener("input", function (event) {
  // Each time the user types something, check if the
  // email field is valid.
  if (!email.validity.valid) {
    // if the address is invalid, print the massage and change the color
    emailLabel.innerHTML = "Email:(Please provide a valid email address)";
    emailLabel.className = "active";
    } else {
    // otherwise, set it back to default
    emailLabel.innerHTML = "Email:";
    emailLabel.className = "inactive";
  }
}, false);

// litsen to the submit button
form.addEventListener("submit", function (event) {
  //the name input should not be empty
  if (!inputText.validity.valid) {
    textLabel.innerHTML = "Name:(Please provide your name)";
    textLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    textLabel.innerHTML = "Name:";
    textLabel.className = "inactive";
  }
  // the email input should not be empty and should be in right format
  if (!email.validity.valid) {
    emailLabel.innerHTML = "Email:(email address is required)";
    emailLabel.className = "active";
    event.preventDefault();
  } else {
    emailLabel.innerHTML = "Email:";
    emailLabel.className = "inactive";
  }
  // at least one check box should be checked
  if (!checkboxes.is(":checked")) {
    checkboxLabel.innerHTML="Please select an Activity";
    checkboxLabel.className = "active";
    event.preventDefault();
  } else {
    checkboxLabel.innerHTML="";
    checkboxLabel.className = "inactive";
  }
  // the credit card number should be valid, the pattern is setted in html file
  // which is a number between 13 and 16 digits
  if (!ccNum.validity.valid) {
    ccnumLabel.className = "active";
    event.preventDefault();
  } else {
    ccnumLabel.className = "inactive";
    ccnumLabel.innerHTML = "Card Number:"
  }
  //zip code should be a 5 digit number
  if (!zipCode.validity.valid) {
    zipcodeLabel.className = "active";
    event.preventDefault();
  } else {
    zipcodeLabel.className = "inactive";
  }
  //cvv should be a 3 digit number
  if (!cvv.validity.valid) {
    cvvLabel.className = "active";
    event.preventDefault();
  } else {
    cvvLabel.className = "inactive";
  }
}, false);
