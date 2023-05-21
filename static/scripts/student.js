/* const fname =document.getElementById("fname")
const lname =document.getElementById("lname")
const id =document.getElementById("ID")
const gpa =document.getElementById("GPA")
const studStatus =document.getElementById("Status")
const email =document.getElementById("email")
const date =document.getElementById("date")
const gender =document.getElementById("Gender")
const dept =document.getElementById("dept")
const mobile =document.getElementById("mobile")



// Get the id from the URL paramter
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const studentID = urlParams.get('id');

// get data from local storage
function getData(){
  let studentsInfo = JSON.parse(localStorage.getItem('students'))
  return studentsInfo;
}

function fillInputFields(){
  let data = getData();

  // console.log(data)
  
  if(data){
    // console.log(studentID)
    for(let i = 0 ; i < data.length;i++){
      let stud = data[i]

      if(stud.id === studentID){
    
        fname.value = stud.fname
        lname.value = stud.lname
        id.value = stud.id
        gpa.value = stud.gpa
        studStatus.value = stud.status
        email.value = stud.email
        date.value = stud.date
        gender.value = stud.gender
        dept.value = stud.dept
        mobile.value = stud.mobile
        // lname.textContent = stud.lname


        break;
      }
    }

  }

}

fillInputFields()







// save changes btn functionality onclick = "save()"

let form = document.querySelector("#edit")
form.addEventListener("submit", (e) => {

  console.log("clidk")
  e.preventDefault();
  // get the updated data
  const fname =document.getElementById("fname").value
  const lname =document.getElementById("lname").value
  const id =document.getElementById("ID").value
  const gpa =document.getElementById("GPA").value
  const studStatus =document.getElementById("Status").value
  const email =document.getElementById("email").value
  const date =document.getElementById("date").value
  const gender =document.getElementById("Gender").value
  const dept =document.getElementById("dept").value
  const mobile =document.getElementById("mobile").value


  let data = getData();
  
  
  if(data){
    for(let i = 0 ; i < data.length;i++){
      
  
      if(data[i].id === studentID){

        // console.log(id)
        
        newStudData = {
          ...data[i],
          fname : fname,
          lname : lname,
          id : id,
          gpa : gpa,
          email : email,
          date : date,
          gender : gender,
          dept : dept,
          status : studStatus,
          mobile : mobile,
        }
        console.log(newStudData)


        data[i] = newStudData
  
  
      }
    }


    // console.log(data)

    localStorage.setItem('students',JSON.stringify(data))

    let savedMsg = document.createElement("p");
    savedMsg.textContent = "Saved successfully"
    savedMsg.classList.add("success")
    form.appendChild(savedMsg)


    const url = `table.html`;
    window.location.href = url;
  }
})

let deleteBtn=document.querySelector('.delete');
deleteBtn.addEventListener('click',function(){
  let data=getData()
  const newStud=[]
  for (let i = 0 ; i < data.length;i++) {
    const element = data[i];
    if(data[i].id !== studentID){
      newStud.push(data[i]);
    }
  }
  localStorage.setItem('students',JSON.stringify(newStud))
  const url = `table.html`;
    window.location.href = url;
}) */
