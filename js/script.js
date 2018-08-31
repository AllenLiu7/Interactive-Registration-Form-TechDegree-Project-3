
 $( "#name" ).focus();
 $("#other-title").hide();


$('#title').on('change', function() {
  if ($(this).val() === "other") {
    $("#other-title").show();
  } else {
    $("#other-title").hide();
  }
})


$('#design').on('change', function() {
  $("#color option").show()
  if ($(this).val() === "js puns") {
    $("#color option[value='tomato'], #color option[value='steelblue'], #color option[value='dimgrey']").hide();
  } else if ($(this).val() === "heart js") {
    $("#color option[value='cornflowerblue'], #color option[value='darkslategrey'], #color option[value='gold']").hide();
  }
})



var x = 0
$(".activities").append("<div id=totalDiv>Total:$<span id=totalPayment>x</span></div>");
$("#totalDiv").hide();

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
//$(".label:eq(0) input").attr("disabled", true);

$(".activities input:checkbox").change(function(){

  if (this.checked) {
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


$("form fieldset:eq(3)").addClass("paymentFeild")
$("form fieldset:eq(3) div:eq(4)").addClass("payPal")
$("form fieldset:eq(3) div:eq(5)").addClass("bitCoin")

$("#payment option[value='credit card']").attr('selected', 'selected')
$("#payment option[value='select_method']").attr("disabled", "true")

$(".payPal").hide()
$(".bitCoin").hide()

$('#payment').on('change', function() {
  if ($(this).val() === "paypal") {
    $(".payPal").show();
    $(".credit-card").hide();
    $(".bitCoin").hide();
  } else if ($(this).val() === "bitcoin") {
    $(".payPal").hide();
    $(".credit-card").hide();
    $(".bitCoin").show();
  } else if ($(this).val() === "credit card") {
    $(".payPal").hide();
    $(".credit-card").show();
    $(".bitCoin").hide();
  }
})

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


form.addEventListener("submit", function (event) {

  if (inputText.validity.valueMissing) {
    textLabel.innerHTML = "Name: Please type your name";
    textLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    textLabel.innerHTML = "Name:";
    textLabel.className = "inactive";
  }

  if (!email.validity.valid) {
    emailLabel.innerHTML = "Email: Please type your email with correct format";
    emailLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    emailLabel.innerHTML = "Email:";
    emailLabel.className = "inactive";
  }

  if (!checkboxes.is(":checked")) {
    checkboxLabel.innerHTML="Please select at least one option";
    checkboxLabel.className = "active";
    checkboxes.className = "invalid";
    event.preventDefault();
  } else {
    checkboxLabel.innerHTML="";
    checkboxLabel.className = "inactive";
    checkboxes.className = "valid";
  }

  if (!ccNum.validity.valid) {
    ccnumLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    ccnumLabel.className = "inactive";
  }

  if (zipCode.validity.valueMissing) {
    zipcodeLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    zipcodeLabel.className = "inactive";
  }

  if (cvv.validity.valueMissing) {
    cvvLabel.className = "active";
    // prevent the form from being sent by canceling the event
    event.preventDefault();
  } else {
    cvvLabel.className = "inactive";
  }
}, false);
