  <script src="https://maxcdn.bootstrapcdn.com/bootstrap/3.3.6/js/bootstrap.min.js" integrity="sha384-0mSbJDEHialfmuBBQP6A4Qrprq5OVfW37PRR3j5ELqxss1yVqOtnepnHVP9aJ7xS" crossorigin="anonymous"></script>


  $("#contactForm").validator().on("submit", function (event) {
      if (event.isDefaultPrevented()) {
        submitMSG(false, "Did you fill in the form properly?");
        }
    else {
          // everything looks good!
          event.preventDefault();
          submitForm();
      }
  });

  function submitForm(){
    // Initiate Variables With Form Content
    var name = $("#name").val();
    var email = $("#email").val();
    var message = $("#message").val();


$.ajax({
      type: "POST",
      url: "php/form-process.php",
      data: "name=" + name + "&email=" + email + "&message=" + message,
      success : function(text){
          if (text == "success"){
              formSuccess();
          } else {
              formError();
              submitMSG(false,text);
          }
      }
  });



function formSuccess(){
  $("#contactForm")[0].reset();
  submitMSG(true, "Message Submitted!");
}



function submitMSG(valid, msg){
        var msgClasses;
    if(valid){
        msgClasses = "h3 text-center tada animated text-success";
    } else {
        msgClasses = "h3 text-center text-danger";
    }
    $("#msgSubmit").removeClass().addClass(msgClasses).text(msg);
}
