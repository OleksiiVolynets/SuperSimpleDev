const form=document.querySelector('#products-main');
let array=JSON.parse(localStorage.getItem('list2'))||[];
displayProducts();
function displayProducts(){
  console.log('working22')
  let listProducts='';
  array.forEach((item)=>{
    listProducts+=` <div class="list-div">
       <div class='item-text'>${item.name}</div>
    <div class='item-text'>${item.calories}</div>
    <button class="btn delete-button" type="button">Delete</button>
      </div> `
    
  });
  document.querySelector('.js-list-div').innerHTML=listProducts;
  document.querySelectorAll('.delete-button').forEach((btn,index)=>{btn.addEventListener('click',()=>{
    console.log('delete-button')
    array=array.filter((item,indexar)=>indexar!==index);
    console.log(array)
    localStorage.setItem('list2',JSON.stringify(array));
    displayProducts();
  })})
}
form.addEventListener('submit',(event)=>{
  event.preventDefault();

  const formData=new FormData(form);

  const productName=formData.get('product-name');
  const productCalories=Number(formData.get('product-calories'));
  addItem(productName,productCalories);
  form.reset();
  

})
function addItem(pname,pcalories){
  console.log(pname,pcalories)
  array.push({name:pname,calories:pcalories})
  console.log(array)
  localStorage.setItem('list2',JSON.stringify(array))
  displayProducts();
}