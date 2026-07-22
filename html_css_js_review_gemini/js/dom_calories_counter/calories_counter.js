
const form = document.querySelector('#js-calc-form');
const dataInfo=JSON.parse(localStorage.getItem('kaloTrack'));
const macros=JSON.parse(localStorage.getItem('KaloTrackMacros'));
const clearBTN=document.querySelector('.js-clear-button')
if(dataInfo){
  const {age,height,weight,gender,activity,plan}=dataInfo;
  document.querySelector("input[name='age']").value=age
  document.querySelector("input[name='height']").value=height
  document.querySelector("input[name='weight']").value=weight
  document.querySelector("select[name='gender']").value=gender
  document.querySelector("select[name='activity']").value=activity
  document.querySelector("select[name='plan']").value=plan
  CalculateCalories(weight, height, age, gender, activity);


}
if(macros){
  const { calories, protein, carbs, fats }=macros;
  document.querySelector('.js-number-calories').innerHTML = Math.round(calories);
  document.querySelector('.js-number-protein').innerHTML = Math.round(protein);
  document.querySelector('.js-number-carbs').innerHTML = Math.round(carbs);
  document.querySelector('.js-number-fats').innerHTML = Math.round(fats);
}


function CalculateCalories(weight, height, age, gender, activity) {
  let calories = 0;
  if (gender === 'male') {
    calories = (10 * weight + 6.25 * height - 5 * age + 5) * activity;
  } else if (gender === 'female') {
    calories = (10 * weight + 6.25 * height - 5 * age - 161) * activity;
  }
  return calories;
}

function CalculateMacros(calories, weight, plan) {
  let protein = 2 * weight;
  let carbs;
  let fats;

  if (plan === 'lose-weight') {
    calories -= 350;
    fats = 0.8 * weight;
  } else if (plan === 'gain-weight') {
    calories += 400;
    fats = 1 * weight;
  }
  
  carbs = (calories - protein * 4 - fats * 9) / 4;
  return { calories, protein, carbs, fats };
}


form.addEventListener('submit', (event) => {

  event.preventDefault();

  const formData = new FormData(form);
  
  const age = Number(formData.get('age'));
  const height = Number(formData.get('height'));
  const weight = Number(formData.get('weight'));
  const gender = formData.get('gender'); 
  const activity = Number(formData.get('activity'));
  const plan = formData.get('plan');

  const baseCalories = CalculateCalories(weight, height, age, gender, activity);
  const { calories, protein, carbs, fats } = CalculateMacros(baseCalories, weight, plan);
  let info={age,height,weight,gender,activity,plan};
  let macros={calories, protein, carbs, fats};
  localStorage.setItem('kaloTrack',JSON.stringify(info))
  localStorage.setItem('KaloTrackMacros',JSON.stringify(macros))
  document.querySelector('.js-number-calories').innerHTML = Math.round(calories);
  document.querySelector('.js-number-protein').innerHTML = Math.round(protein);
  document.querySelector('.js-number-carbs').innerHTML = Math.round(carbs);
  document.querySelector('.js-number-fats').innerHTML = Math.round(fats);
});
clearBTN.addEventListener('click',()=>{
  localStorage.removeItem('kaloTrack');
  localStorage.removeItem('KaloTrackMacros');
  document.querySelector('.js-number-calories').innerHTML = 0;
  document.querySelector('.js-number-protein').innerHTML = 0;
  document.querySelector('.js-number-carbs').innerHTML = 0;
  document.querySelector('.js-number-fats').innerHTML = 0;
  form.reset();
})