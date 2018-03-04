$(window).on("load", function() {
  var generalBtn = $(".general-btn");
  var businessBtn = $(".business-btn");
  var mediaBtn = $(".media-btn");

  function isEmail(email) {
    var regex = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/;
    return regex.test(email);
  }

  function isName(name) {
    var regex = /^[a-zA-Z]+(([',. -][a-zA-Z ])?[a-zA-Z]*)*$/g;
    return regex.test(name);
  }

  function sending(form) {
    $.ajax({
      type: "POST",
      url: $(form).attr("action"),
      data: $(form).serialize()
    }).done(function() {
      $(".contact-form").hide();
      $(".thanks-modal").show();
      $(".contact-form")
        .find("input")
        .val("");
      $('.contact-form').trigger("reset");
    });
    return false;
  }
  
  generalBtn.on("click", function(event) {
    event.preventDefault();

    var validEmail = false;
    var validName = false;
    var validSurname = false;

    var personName = $(".general-input-name").val();
    var personSurname = $(".general-input-surname").val();
    var emailAddress = $(".general-input-email").val();

    if (!isEmail(emailAddress)) {
      $(".general-input-email").addClass("form-check-error");
      validEmail = false;
    } else {
      $(".general-input-email").removeClass("form-check-error");
      validEmail = true;
    }

    if (!isName(personName)) {
      $(".general-input-name").addClass("form-check-error");
      validName = false;
    } else {
      $(".general-input-name").removeClass("form-check-error");
      validName = true;
    }

    if (!isName(personSurname)) {
      $(".general-input-surname").addClass("form-check-error");
      validSurname = false;
    } else {
      $(".general-input-surname").removeClass("form-check-error");
      validSurname = true;
    }

    if (validEmail == true && validName == true && validSurname == true) {
      sending($(".general-form"));
    }
  });
  businessBtn.on("click", function(event) {
    event.preventDefault();

    var validEmail = false;
    var validName = false;
    var validSurname = false;

    var personName = $(".business-input-name").val();
    var personSurname = $(".business-input-surname").val();
    var emailAddress = $(".business-input-email").val();

    if (!isEmail(emailAddress)) {
      $(".business-input-email").addClass("form-check-error");
      validEmail = false;
    } else {
      $(".business-input-email").removeClass("form-check-error");
      validEmail = true;
    }

    if (!isName(personName)) {
      $(".business-input-name").addClass("form-check-error");
      validName = false;
    } else {
      $(".business-input-name").removeClass("form-check-error");
      validName = true;
    }

    if (!isName(personSurname)) {
      $(".business-input-surname").addClass("form-check-error");
      validSurname = false;
    } else {
      $(".business-input-surname").removeClass("form-check-error");
      validSurname = true;
    }

    if (validEmail == true && validName == true && validSurname == true) {
      sending($(".business-form"));
    }
  });
  mediaBtn.on("click", function(event) {
    event.preventDefault();

    var validEmail = false;
    var validName = false;
    var validSurname = false;

    var personName = $(".media-input-name").val();
    var personSurname = $(".media-input-surname").val();
    var emailAddress = $(".media-input-email").val();

    if (!isEmail(emailAddress)) {
      $(".media-input-email").addClass("form-check-error");
      validEmail = false;
    } else {
      $(".media-input-email").removeClass("form-check-error");
      validEmail = true;
    }

    if (!isName(personName)) {
      $(".media-input-name").addClass("form-check-error");
      validName = false;
    } else {
      $(".media-input-name").removeClass("form-check-error");
      validName = true;
    }

    if (!isName(personSurname)) {
      $(".media-input-surname").addClass("form-check-error");
      validSurname = false;
    } else {
      $(".media-input-surname").removeClass("form-check-error");
      validSurname = true;
    }

    if (validEmail == true && validName == true && validSurname == true) {
      sending($('.media-form'));
    }
  });
});


  $('.thanks-modal__close').click(function() { 
    $(".thanks-modal").hide();
    $(".contact-form").show();
  });
  $(document).mouseup(function (e) { 
    var popup = $(".thanks-modal");
    if (e.target!=popup[0]&&popup.has(e.target).length === 0){
      $(".thanks-modal").hide();
      $(".contact-form").show();
      }
  });