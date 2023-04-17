localStorage.user1 = JSON.stringify( {
  name: 'ahmed',
  id: '2021018',
  level: 1,
});
localStorage.user2 = JSON.stringify( {
  name: 'mina',
  id: '2021117',
  level: 3,
});

function check(){
  const nmm=document.getElementById('nm');
  const iddd=document.getElementById('idd');
  const levl=document.getElementById('level');
  for(let i=0;i<2;i++){
    if(document.getElementById("txt").value==(JSON.parse(localStorage.getItem(localStorage.key(i))).id)){
      if((JSON.parse(localStorage.getItem(localStorage.key(i))).level)<3){
        //document.getElementById("dep").remove();
      }
      //let stud_level=localStorage.getItem(localStorage.key(i)).level;
      nmm.innerHTML=(JSON.parse(localStorage.getItem(localStorage.key(i))).name);
      iddd.innerHTML=(JSON.parse(localStorage.getItem(localStorage.key(i))).id);
      levl.innerHTML=(JSON.parse(localStorage.getItem(localStorage.key(i))).level);
    }
  }
  //return stud_level;
}
function check_ck(){
  for(let i=0;i<2;i++){
    if(document.getElementById("txt").value==(JSON.parse(localStorage.getItem(localStorage.key(i))).id)){
      if((JSON.parse(localStorage.getItem(localStorage.key(i))).level)<3){
        //document.getElementById("dep").remove();
        window.alert('you cannot choose department');
      }
    }
  }
}


//document.getElementById("mybutton").onclick = function(){
  //  myname = document.getElementById("txt").value;
    //if(myname==(localStorage.getItem(user1)).name){
      //console.log("gggg");
    //}
//}
//console.log(myname);
//if(myname==JSON.parse(localStorage.getItem(user1)).name){
  //  console.log('valid');
//}
//for(let i = 0; i < 2; i++){
  //  if(input==JSON.parse(localStorage.getItem(key(i))).name){
    //    document.write("valid");
    //}
//}
//var dmmm='ahmed';
//if((JSON.parse(localStorage.getItem('user1')).name)==myname){
  //console.log("gggg");
//}
//console.log(JSON.parse(localStorage.getItem('user1')).name);
