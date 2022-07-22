anime({
    targets:'.navbar-brand',
    scale:[2,1],
    opacity:[0,1],
    easeing: 'easeInOutExpo',
    delay: 500,
})

function validateForm() {
    let name =  document.getElementById('name').value;
    if (name == "") {
        document.querySelector('.status').innerHTML = "Name cannot be empty";
        return false;
    }
    let email =  document.getElementById('email').value;
    if (email == "") {
        document.querySelector('.status').innerHTML = "Email cannot be empty";
        return false;
    } else {
        let re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        if(!re.test(email)){
            document.querySelector('.status').innerHTML = "Email format invalid";
            return false;
        }
    }
    let subject =  document.getElementById('subject').value;
    if (subject == "") {
        document.querySelector('.status').innerHTML = "Subject cannot be empty";
        return false;
    }
    let message =  document.getElementById('message').value;
    if (message == "") {
        document.querySelector('.status').innerHTML = "Message cannot be empty";
        return false;
    }
    document.querySelector('.status').innerHTML = "Sending...";
  }

  $( document ).ready(function() {
   
    $('.dropdown-item').click(function(){
     $('.navbar div').removeClass('show');
  });  
  $('#nav-link').click(function(){
         $('.navbar div').removeClass('show');
  });
  $('#nav-link-contact').click(function(){
    $('.navbar div').removeClass('show');
});
 
   });   