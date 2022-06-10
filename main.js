let arr = [];

function init(){
    let book_app = document.getElementById("bookApp");
    book_app.addEventListener("click", function(){
        bookedApp();
        document.getElementById("bookApp").style.display = "none";
        document.getElementById("book1").style.display = "none";
        document.getElementById("book2").style.display = "none";
        document.getElementById("book3").style.display = "none";
        document.getElementById("book4").style.display = "none";
        document.getElementById("book5").style.display = "none";
        document.getElementById("book6").style.display = "none";
        document.getElementById("book7").style.display = "none";
        document.getElementById("book8").style.display = "none";
        document.getElementById("book9").style.display = "none";
        document.getElementById("book10").style.display = "none";
        document.getElementById("book11").style.display = "none";
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
        document.getElementById("submitForm").style.display = "none";
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

    document.getElementById("confirmation").style.display = "block";
    addText(arr);

    let cancelApp = document.getElementById("cancelApp");
    cancelApp.addEventListener("click", function(){
        let confirmTitle = document.getElementById("confirmTitle");
        confirmTitle.innerHTML = `<img src="/vikrantkumar_seg3125_project1/Images/wrong.png" alt="check" height="50" width="50"></img>` + "Booking Canceled";
        let showAlert = document.getElementById("showAlert");
        showAlert.classList = "alert alert-danger";
        document.getElementById("resApp").disabled = true;
    });

    let resApp = document.getElementById("resApp");
    resApp.addEventListener("click", function(){
        document.getElementById("bookApp").style.display = "block";
        document.getElementById("book1").style.display = "block";
        document.getElementById("book2").style.display = "block";
        document.getElementById("book3").style.display = "block";
        document.getElementById("book4").style.display = "block";
        document.getElementById("book5").style.display = "block";
        document.getElementById("book6").style.display = "block";
        document.getElementById("book7").style.display = "block";
        document.getElementById("book8").style.display = "block";
        document.getElementById("book9").style.display = "block";
        document.getElementById("book10").style.display = "block";
        document.getElementById("book11").style.display = "block";
        document.getElementById("confirmation").style.display = "none";
    });
   arr = []
}


function addText(){
    console.log(arr)
    document.getElementById("insertService").innerHTML = "";
    document.getElementById("insertCustomer").innerHTML = "";
    document.getElementById("insertDate").innerHTML = "";
    document.getElementById("insertExpert").innerHTML = "";

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



