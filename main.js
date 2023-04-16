let students = [
    {
      fname : "mohamed",
      lname : "hesham",
      id : "20210313",
      gpa : 3.6,
      email : "mohamed@gmail.com",
      date : "12-19-2003",
      gender : "Male",
      dept : 'CS',
      status : "Active",
      mobile : "0120000321",
    },
    {
      fname : "mazen",
      lname : "mahmoud",
      id : "20211003",
      gpa : 3.7,
      email : "mazen@gmail.com",
      date : "2002-06-01",
      gender : "Male",
      dept : 'IT',
      status : "Inactive",
      mobile : "0110000441",
    }
  ]
  localStorage.setItem('students',JSON.stringify(students))
 const fname =document.getElementById("fname")
 const lname =document.getElementById("lname")
 const id =document.getElementById("ID")
 const gpa =document.getElementById("GPA")
 const status =document.getElementById("Status")
 const email =document.getElementById("email")
 const date =document.getElementById("date")
 const gender =document.getElementById("Gender")
 const dept =document.getElementById("dept")
 const mobile =document.getElementById("mobile")

 fname.value=JSON.parse(localStorage.getItem('students'))[1].fname
 lname.value=JSON.parse(localStorage.getItem('students'))[1].lname
 id.value=JSON.parse(localStorage.getItem('students'))[1].id
 gpa.value=JSON.parse(localStorage.getItem('students'))[1].gpa
 email.value=JSON.parse(localStorage.getItem('students'))[1].email
 date.value=JSON.parse(localStorage.getItem('students'))[1].date
 gender.value=JSON.parse(localStorage.getItem('students'))[1].gender
 dept.value=JSON.parse(localStorage.getItem('students'))[1].dept
 status.value=JSON.parse(localStorage.getItem('students'))[1].status
 mobile.value=JSON.parse(localStorage.getItem('students'))[1].mobile


function save(){
    var studs =students[1];
    document.getElementById('fname').value=studs.fname;
   document.getElementById('lname').value=studs.lname
    document.getElementById('ID').value=studs=id
    document.getElementById('GPA').value=studs.gpa
    document.getElementById('Status').value=studs.status
  document.getElementById('email').value=studs.email
    document.getElementById('date').value=studs.date
    document.getElementById('Gender').value=studs.gender
    document.getElementById('mobile').value=studs.mobile
   

        localStorage.setItem('fname', fname);
        localStorage.setItem('lname', lname);
        localStorage.setItem('id', id);
        localStorage.setItem('gpa', gpa);
        localStorage.setItem('status', status);
        localStorage.setItem('gender', gender);
        localStorage.setItem('date', date);
        localStorage.setItem('mobile', mobile);
        localStorage.setItem('email', email);
        
   


}
console.log(JSON.stringify(localStorage))