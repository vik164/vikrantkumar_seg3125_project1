


function init(){
    let book_app = document.getElementById("bookApp");
    book_app.addEventListener("click", function(){
        bookedApp();
    });
}

function bookedApp(){
    let arr = [];
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let phone_number = document.getElementById("phonenumber");
    let email = document.getElementById("email");
    let service = document.getElementById("pickoneService");
    let expert = document.getElementById("pickoneExpert");
    let time = document.getElementById("pickoneTime");

    arr.push(fname.value)
    arr.push(lname.value);
    arr.push(phone_number.value);
    arr.push(email.value);
    arr.push(service.value);
    arr.push(expert.value);
    arr.push(time.value);

    fname.value ="";
    lname.value ="";
    phone_number.value ="";
    email.value ="";
    service.value ="";
    expert.value ="";
    time.value ="";
    console.log(arr)

}































