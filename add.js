

document.getElementById("stud").addEventListener("submit", function (event) {
    event.preventDefault();
    var fname = document.getElementById("fname").value;
    var lname = document.getElementById("lname").value;
    var id = document.getElementById("id").value;
    var email = document.getElementById("mail").value;
    var phone = document.getElementById("phone").value;
    var gender = document.getElementById("gender").value;
    var level = document.getElementById("level").value;
    var department = document.getElementById("dep").value;
    var birth = document.getElementById("bdate").value;

    var students = {
        fname: fname,
        lname: lname,
        id: id,
        email: email,
        phone: phone,
        gender: gender,
        level: level,
        department: department,
        birth: birth
    };
    let data = JSON.parse(localStorage.getItem("students"));
    if (!data) {
        data = [];
    }
    data.push(students);

    localStorage.setItem("students", JSON.stringify(data));
});
