function tableSearch() {
    let input, filter, table, th, td, i, txtValue;
    // initilaizing variables
    input = document.getElementById("myInput");
    filter = input.value.toUpperCase();
    table = document.getElementById("myTable");
    tr = table.getElementsByTagName("tr");

    for (let i = 0; i < tr.length; i++) {
        td = tr[i].getElementsByTagName("td")[1]; // will search for first row
        if (td) {
            txtValue = td.textContent || td.innerText;
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            }
            else {
                tr[i].style.display = "none";
            }
        }
    }
}



let tableBody = document.querySelector("tbody")
// Get Data from local Storage
function getData(){
  let studentsInfo = JSON.parse(localStorage.getItem('students'))
  return studentsInfo;
}

function addDataToTablet(){

  let data = getData();
  console.log(data)
  if(data){
    let table = ``;
    for(let i = 0 ; i < data.length; i++){
      table += `
        <tr>
          <td>${data[i].id}</td>
          <td>${data[i].fname} ${data[i].lname}</td>
          <td>${data[i].gpa}</td>
          <td>${data[i].level}</td>
          <td>
           ${data[i].status}
          </td>
        </tr>
      `
    }
    tableBody.innerHTML = table;

  }
}



addDataToTablet()

const rows = document.querySelectorAll('table tr');

rows.forEach(function(row) {
  row.addEventListener('click', function(event) {
    const cells = event.target.parentElement.querySelectorAll('td');
    const id = cells[0].textContent;

    
    const url = `edit.html?id=${id}`;
    window.location.href = url;

    
    console.log(id);
  });
});


/*
const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
const id = urlParams.get('id');
console.log(id);

*/