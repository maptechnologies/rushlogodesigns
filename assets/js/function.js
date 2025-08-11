var validEmail;
var validPhone;
var validName;
var NameValue;
var PhoneValue;
var EmailValue;
var NameOnLogo = "";
var CustomerLocation =
  Intl?.DateTimeFormat()?.resolvedOptions()?.timeZone || "N/A";
var IpLo = "";
var openChatOnPopup;

fetch("https://api.ipify.org?format=json")
  .then((response) => response.json())
  .then((data) => {
    IpLo = data?.ip || "";
  });

function lengthControl(event) {
  document
    .getElementById(event.target.id)
    .setAttribute("style", "border:none; background-color: white;");
}

function validateName(nameValue) {
  if (nameValue == "") {
    validName = false;
    return false;
  } else {
    NameValue = nameValue;
    validName = true;
    return true;
  }
}

function validatePhone(phoneValue) {
  PhoneValue = phoneValue;
  var phoneRegex =
    /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/im;
  if (!phoneRegex.test(phoneValue)) {
    validPhone = false;
    return false;
  } else {
    PhoneValue = phoneValue;
    validPhone = true;
    return true;
  }
}

function validateEmail(emailValue) {
  var emailRegex =
    /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
  if (!emailRegex.test(emailValue)) {
    validEmail = false;
    return false;
  } else {
    EmailValue = emailValue;
    validEmail = true;
    return true;
  }
}

function submitForm(tagId, formName) {
  var form = document.querySelector("#" + tagId);

  var inputs = form.getElementsByTagName("input");
  for (var i = 0; i < inputs.length; i++) {
    if (inputs[i].name == "customer_name" && !validateName(inputs[i].value)) {
      inputs[i].setAttribute(
        "style",
        "border:2px solid #ef6e6e; background-color: #ffd3d3; border-radius: 3px"
      );
      inputs[i].focus();
      break;
    }
    if (inputs[i].name == "customer_email" && !validateEmail(inputs[i].value)) {
      inputs[i].setAttribute(
        "style",
        "border:2px solid #ef6e6e; background-color: #ffd3d3; border-radius: 3px"
      );
      inputs[i].focus();
      break;
    }

    var textArea = form.getElementsByTagName("textarea");
    for (let i = 0; i < textArea?.length; i++) {
      if (textArea[i].name == "name_on_logo") {
        NameOnLogo = textArea[i]?.value || "";
      }
    }

    if (inputs[i].name == "customer_phone" && !validatePhone(inputs[i].value)) {
      inputs[i].setAttribute(
        "style",
        "border:2px solid #ef6e6e; background-color: #ffd3d3; border-radius: 3px"
      );
      break;
    }
  }
  if (validEmail && validName && validPhone) {
    // fireMail();
    formSubmission();
  }
}

function showThankYou() {
  debugger;
  let url = window.location.origin + "/thankyou.php";
  window.location.assign(url);
}

function openTawkTo() {
  try {
    // window.Tawk_API.maximize();
    // zE("messenger", "open");
    $zopim.livechat.window.show();
  } catch (error) {
    console.log(error);
  }
}

var formSubmission = () => {
  $.ajax({
    method: "POST",
    url: "https://formsubmit.co/ajax/signup.rushlogodesigns@gmail.com",
    dataType: "json",
    accepts: "application/json",
    data: {
      Name: NameValue,
      "Email Address": EmailValue,
      "Name on Logo": NameOnLogo,
      "Phone Number": PhoneValue,
      "Customer Location": CustomerLocation,
      "Customer IP": IpLo,
    },
    success: (data) => {
      console.log("Data", data);
      showThankYou();
    },
    error: (err) => {
      console.log("Error", err);
      openChatOnPopup = confirm(
        "Due to the high demand for logos, we take more orders from chat, Use chat for free consultancy and place your order. Our experts are always available."
      );
      if (openChatOnPopup) {
        // window.Tawk_API.maximize();
        openTawkTo();
      }
    },
  });
};

let element = $("#btnctaId");

$(window).on("resize", function () {
  if ($(window).width() < 600) {
    // element.removeClass("btncta");
    element.removeClass("text-right");
    element.addClass("text-center");
  } else {
    element.addClass("text-right");
    element.removeClass("text-center");
  }
});

// function fireMail() {
//   Email.send({
//     SecureToken: "ee5cea0b-9fdb-4cef-9e2a-ed5241a40729",
//     To: "signup.rushlogodesigns@gmail.com",
//     From: "muneeb.sheikh8@gmail.com",
//     Subject: "New Signup Arrive on RushLogoDesigns",
//     Body: `Say hello to
//               <b>${NameValue}</b>
//               having email <b>${EmailValue}</b>
//               and phone number is <b>${
//                 PhoneValue ? PhoneValue : "not enter"
//               }</b>`,
//     // }).then((message) => showThankYou());
//   }).then((message) => alert(message));
// }

// SecureToken: "fe356f3c-c860-4474-bad8-d7e861c845b7",
// To: "signup.rushlogodesigns@gmail.com",
// From: "inforushlogodesigns@gmail.com",

// var form = document.getElementById(tagId);
// var formData = new FormData(form);
// var xhr = new XMLHttpRequest();
// xhr.open("POST", "thankyou.php", true);
// xhr.onreadystatechange = function () {
//   if (xhr.readyState === 4 && xhr.status === 200) {
//     console.log(xhr.responseText);
//   }
// };
// let mainData = {};

// for (let [key, value] of formData.entries()) {
//   console.log(key + ": " + value);
//   mainData[key] = value;
// }

// xhr.send(formData);

zE("webWidget:on", "chat:unreadMessages", function (number) {
  openTawkTo();
});
