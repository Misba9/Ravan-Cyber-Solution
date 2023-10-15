function validateEmail(email) {
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;

    if (!email.match(emailPattern)) {
        Swal.fire(
            'Oops!',
            'Invalid Email Address',
            'error'
          )
          return
    }
  }
document.getElementById("submit-btn").addEventListener("click",() => {
    let name = document.getElementById("name").value
    let phone = document.getElementById("phone").value
    let email = document.getElementById("email").value
    let text = document.getElementById("text").value

    // alert("hello")

    if(name == ""){
        Swal.fire(
            'Oops!',
            'Name cannot be empty',
            'error'
          )
          return
    }
    if(phone == ""){
        Swal.fire(
            'Oops!',
            'Phone cannot be empty',
            'error'
          )
          return
    }
    if(phone.length > 10){
        Swal.fire(
            'Oops!',
            'Phone number should be equal to 10 digits',
            'error'
          )
          return
    }
    if(phone.length < 10){
        Swal.fire(
            'Oops!',
            'Phone number should be equal to 10 digits',
            'error'
          )
          return
    }
    if(email == ""){
        Swal.fire(
            'Oops!',
            'Email cannot be empty',
            'error'
          )
          return
    }
    validateEmail(document.getElementById('email').value)
    if(text == ""){
        Swal.fire(
            'Oops!',
            'Message cannot be empty',
            'error'
          )
          return
    }

    $.ajax({
        url:"api/index.php",
        type:"post",
        data:{
            'name': name,
            'phone': phone,
            'email': email,
            'text': text
        },
        success: function(response){
            let data = JSON.parse(response)

            if(data.code == 200){
                Swal.fire(
                    'Hurray!',
                    'Request Submitted Successfully! The Admin Will Contact You With Few Hours...',
                    'success'
                  )
                    document.getElementById("name").value = ""
                    document.getElementById("phone").value = ""
                    document.getElementById("email").value = ""
                    document.getElementById("text").value = ""
                  return
            }else{
                Swal.fire(
                    'Oops!',
                    'Internal Server Error',
                    'error'
                  )
                  return
            }
        }
    })
})