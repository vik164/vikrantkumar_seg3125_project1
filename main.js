let arr = [];

function init(){
    let book_app = document.getElementById("bookApp");
    book_app.addEventListener("click", function(){
        bookedApp();

    });
}

function init_contact(){
    let submit = document.getElementById("submitForm");
    submit.addEventListener("click", function(){
        document.getElementById("firstname").value = "";
        document.getElementById("lastname").value = "";
        document.getElementById("phonenumber").value = "";
        document.getElementById("email").value = "";
        document.getElementById("pickone").value = "";
        document.getElementById("comment").value = ""; 
        document.getElementById("showSubmit").style.display = "block";
        document.getElementById("con1").style.display = "none";
        document.getElementById("con2").style.display = "none";
        document.getElementById("con3").style.display = "none";
        document.getElementById("con4").style.display = "none";
        document.getElementById("con5").style.display = "none";
        document.getElementById("con6").style.display = "none";
        document.getElementById("con7").style.display = "none";

    });
}

function bookedApp(){
    let fname = document.getElementById("firstname");
    let lname = document.getElementById("lastname");
    let phone_number = document.getElementById("phonenumber");
    let email = document.getElementById("email");
    let service = document.getElementById("pickoneService");
    let expert = document.getElementById("pickoneExpert");
    let time = document.getElementById("pickoneTime");
    let comment = document.getElementById("comment");
    let day = document.getElementById("pickoneDay");
    let month = document.getElementById("pickoneMonth");
    let year = document.getElementById("pickoneYear");

    arr.push(fname.value)
    arr.push(lname.value);
    arr.push(phone_number.value);
    arr.push(email.value);
    arr.push(service.options[service.selectedIndex].text);
    arr.push(expert.options[expert.selectedIndex].text);
    arr.push(time.options[time.selectedIndex].text);
    arr.push(day.options[day.selectedIndex].text);
    arr.push(month.options[month.selectedIndex].text);
    arr.push(year.options[year.selectedIndex].text);
    
    // fname.value ="";
    // lname.value ="";
    // phone_number.value ="";
    // email.value ="";
    // service.value ="";
    // expert.value ="";
    // time.value ="";
    // comment.value =""
    // day.value = ""
    // month.value = ""
    // year.value = "2022"
    console.log(arr)

    document.getElementById("confirmation").style.display = "block";
    document.getElementById("bookApp").disabled = true;
    addText(arr);

    let cancelApp = document.getElementById("cancelApp");
    cancelApp.addEventListener("click", function(){
        let confirmTitle = document.getElementById("confirmTitle");
        confirmTitle.innerHTML = `<img src="/Images/wrong.png" alt="check" height="50" width="50"></img>` + "Booking Canceled";
        let showAlert = document.getElementById("showAlert");
        showAlert.classList = "alert alert-danger";
        document.getElementById("bookApp").disabled = true;
    });
    
}




function addText(){
    console.log(arr)
    let insertService = document.getElementById("insertService");
    let insertCustomer = document.getElementById("insertCustomer");
    let insertDate = document.getElementById("insertDate");
    let insertExpert = document.getElementById("insertExpert");

    insertCustomer.innerHTML += arr[0] + " " + arr[1] + "<br>";
    insertCustomer.innerHTML += arr[2] + "<br>";
    insertCustomer.innerHTML += arr[3] + "<br>";
    insertDate.innerHTML += arr[8] + " " + arr[7] + ", " + arr[9] + " @ " + arr[6];
    insertService.innerHTML += arr[4];
    insertExpert.innerHTML += arr[5];

    
}





























