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

 class Edit {
  constructor() {
    super();
    this.state ={
      fname : "",
      lname : "",
      id : "",
      gpa :"",
      email : "",
      date : "",
      gender : "",
      dept : '',
      status : "",
      mobile : "",
      redirectToTable : false,
      loading :false
    };

  }
  
 }

function save(){
    
    localStorage.setItem('students',JSON.stringify(students))
    const fname =document.getElementById("fname")
    const lname =document.getElementById("lname")
    const id =document.getElementById("ID")
    const gpa =document.getElementById("GPA")
    const status =document.getElementById("Status")
    const email =document.getElementById("email")
    const date =document.getElementById("date")
    const gender =document.getElementById("Gender")
    const mobile =document.getElementById("mobile")
   
    localStorage.removeItem('fname');
    localStorage.removeItem('lname');
    localStorage.removeItem('id');
    localStorage.removeItem('gpa');
    localStorage.removeItem('status');
    localStorage.removeItem('gender');
    localStorage.removeItem('date');
    localStorage.removeItem('mobile');
    localStorage.removeItem('email');
   
        localStorage.setItem('fname', fname.value);
        localStorage.setItem('lname', lname.value);
        localStorage.setItem('id', id.value);
        localStorage.setItem('gpa', gpa.value);
        localStorage.setItem('status', status.value);
        localStorage.setItem('gender', gender.value);
        localStorage.setItem('date', date.value);
        localStorage.setItem('mobile', mobile.value);
        localStorage.setItem('email', email.value);

        localStorage.getItem('students')[1].fname
        localStorage.getItem('students')[1].lname
        localStorage.getItem('students')[1].id
        localStorage.getItem('students')[1].gpa
        localStorage.getItem('students')[1].email
        localStorage.getItem('students')[1].date
        localStorage.getItem('students')[1].gender
        localStorage.getItem('students')[1].dept
        localStorage.getItem('students')[1].status
        localStorage.getItem('students')[1].mobile
        
   


}
console.log(JSON.stringify(localStorage))