
const array=JSON.parse(localStorage.getItem('key4'))||[];
const divDisplay=document.querySelector('.js-div');
displayList();
function displayList(){
  let todoListHTML='';
  array.forEach((item,index)=>{
    todoListHTML +=`
    <div>${item.name}</div>
    <div>${item.date}</div>
   
    <button class="delete-button js-delete-button">Delete</button>
     `;
  })
 
  divDisplay.innerHTML=todoListHTML

  document.querySelectorAll('.js-delete-button').forEach((deleteButton,index)=>{
    deleteButton.addEventListener('click',()=>{
    array.splice(index,1)
    displayList(); 
    localStorage.setItem('key4',JSON.stringify(array));
    })

  })
}

document.querySelector('.js-add-button').addEventListener('click',()=>{
  addList();
})
const plan=document.querySelector('input');
const date=document.querySelector('.datetime')
function addList(){
  array.push({name:plan.value,date:date.value});
  localStorage.setItem('key4',JSON.stringify(array))
  plan.value=""
  console.log(array);
  displayList();


}