
const array=JSON.parse(localStorage.getItem('key4'))||[];
const divDisplay=document.querySelector('.js-div');
displayList();
function displayList(){
  let todoListHTML='';
  for(let i=0;i<array.length;i++){
    todoListHTML +=`
    <div>${array[i].name}</div>
    <div>${array[i].date}</div>
   
    <button onclick="array.splice(${i},1)
    displayList(); localStorage.setItem('key4',JSON.stringify(array))" class="delete-button">Delete</button>
     `;
  }
  divDisplay.innerHTML=todoListHTML
}


const plan=document.querySelector('input');
const date=document.querySelector('.datetime')
function addList(){
  array.push({name:plan.value,date:date.value});
  localStorage.setItem('key4',JSON.stringify(array))
  plan.value=""
  console.log(array);
  displayList();


}
