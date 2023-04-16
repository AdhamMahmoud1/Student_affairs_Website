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