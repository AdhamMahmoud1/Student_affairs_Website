const nm = document.getElementById('nm');
const iddd = document.getElementById('idd');
const level = document.getElementById('level');
const chosenDept = document.getElementById('dep')


console.log('h')

let data = JSON.parse(localStorage.getItem('students'))





const enteredID = document.getElementById('txt')

let searchBtn = document.querySelector('#mybutton')

searchBtn.addEventListener('click', ()=>{
  
  
  
  
  
  for(let i = 0 ; i < data.length;i++){
    // console.log(data[i].id)
   
    if(data[i].id === enteredID.value){
      // console.log(enteredID)

      console.log(data[i].id)
      nm.textContent = data[i].fname + ' ' + data[i].lname;
      iddd.textContent = data[i].id
      level.textContent = data[i].level

      chosenDept.value = data[i].dept
    }
  }


  localStorage.setItem('students',JSON.stringify(data))
})



let submitBtn = document.querySelector('#submit-btn')

submitBtn.addEventListener('click', ()=>{

  if(level.textContent  === "level 3"){
    for(let i = 0 ; i < data.length;i++){
      // console.log(data[i].id)

      if(data[i].id === enteredID.value){
        // console.log(enteredID)

        data[i].dept = chosenDept.value
      }
     
    }
  }
  else{
    alert("your level is not allowed to assign department")
  }

  localStorage.setItem('students',JSON.stringify(data))
})
