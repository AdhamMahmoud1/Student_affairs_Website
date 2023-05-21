console.log("j")



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
  var date = document.getElementById("bdate").value;
  var gpa = document.getElementById("gpa").value;
  var studStatus = document.getElementById("active").value;
  
  
  
  // var studStatus = document.getElementById("gba").value;
  
  var student = {
      fname : fname,
      lname : lname,
      id : id,
      gpa : gpa,
      email : email,
      date : date,
      gender : gender,
      dept : department,
      status : studStatus,
      mobile : phone,
      level: level,
  };
  
  // console.log(student)
  console.log(student)

  let data = JSON.parse(localStorage.getItem("students"));
  if (!data) {
    data = [];
  }
  data.push(student);

  localStorage.setItem("students", JSON.stringify(data));

  const url = 'table.html';
    window.location.href = url;
});