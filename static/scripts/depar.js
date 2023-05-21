const nm = document.getElementById('nm');
const iddd = document.getElementById('idd');
const level = document.getElementById('level');
const chosenDept = document.getElementById('dep')



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
    alert('saved successfully')
  }
  else{
    alert("your level is not allowed to assign department")
  }

  localStorage.setItem('students',JSON.stringify(data))
})
